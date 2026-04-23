import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  productIdExists,
  updateProduct,
} from "../../../utils/supabaseDb";
import { staticProducts } from "../../../utils/staticProducts";

// Verificar si un producto es estático (ID en rangos específicos)
const isStaticProduct = (id) => {
  // Los productos estáticos tienen IDs en rangos específicos:
  // Camisas: 1001-1999
  // Pantalones: 2001-2999
  // Vestidos: 3001-3999
  // Etc.
  return (
    (id >= 1001 && id <= 1999) || // Camisas
    (id >= 2001 && id <= 2999) || // Pantalones
    (id >= 3001 && id <= 3999) || // Vestidos
    (id >= 4001 && id <= 4999) || // Chaquetas
    (id >= 5001 && id <= 5999)    // Accesorios
  );
};

const groupByCategory = (items) => {
  const grouped = {};
  for (const item of items) {
    const category = item.category || "Sin categoria";
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(item);
  }
  return grouped;
};

const cloneStaticProducts = () => {
  const cloned = {};
  Object.keys(staticProducts).forEach((category) => {
    cloned[category] = staticProducts[category].map((product) => ({ ...product }));
  });
  return cloned;
};

const mergeProducts = (dbProductsByCategory) => {
  const combined = cloneStaticProducts();

  Object.keys(dbProductsByCategory).forEach((category) => {
    if (!combined[category]) combined[category] = [];

    for (const dbProduct of dbProductsByCategory[category]) {
      const existingIndex = combined[category].findIndex((p) => p.id === dbProduct.id);
      if (existingIndex >= 0) {
        combined[category][existingIndex] = {
          ...combined[category][existingIndex],
          ...dbProduct,
        };
      } else {
        combined[category].push(dbProduct);
      }
    }
  });

  return combined;
};

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  // GET - Obtener todos los productos
  if (req.method === "GET") {
    try {
      const dbProducts = await getAllProducts();
      const groupedDbProducts = groupByCategory(dbProducts || []);
      return res.status(200).json(mergeProducts(groupedDbProducts));
    } catch (error) {
      return res.status(500).json({ error: error.message || "Error al obtener productos" });
    }
  }

  // POST - Añadir un nuevo producto (solo para administradores)
  if (req.method === "POST") {
    // Verificar autenticación
    if (!session) {
      return res.status(401).json({ error: "No autorizado" });
    }

    // Verificar rol de administrador
    if (session.user.role !== "admin") {
      return res.status(403).json({ error: "Acceso denegado" });
    }

    try {
      const product = req.body;
      
      // Validar datos del producto
      if (!product.name || !product.price || !product.category || !product.image) {
        return res.status(400).json({ error: "Datos de producto incompletos" });
      }
      
      // Validar ID personalizado si se proporciona
      if (product.customId) {
        if (product.customId.length !== 4 || !/^\d{4}$/.test(product.customId)) {
          return res.status(400).json({ error: "El ID personalizado debe ser numérico y tener exactamente 4 dígitos" });
        }
        
        const customId = parseInt(product.customId, 10);
        
        // Verificar si el ID personalizado ya existe en DB
        if (await productIdExists(customId)) {
          return res.status(400).json({ error: `El ID ${customId} ya está en uso. Por favor, elija otro ID.` });
        }
        
        // Verificar si el ID personalizado entra en conflicto con productos estáticos
        if (isStaticProduct(customId)) {
          return res.status(400).json({ error: `El ID ${customId} está reservado para productos estáticos. Por favor, elija otro ID.` });
        }
      }
      
      // Forzar la moneda a ARS
      product.currency = "ARS";

      const newProduct = await createProduct(product);
      return res.status(201).json(newProduct);
    } catch (error) {
      console.error("Error al crear producto:", error);
      return res.status(500).json({ error: error.message || "Error al crear el producto" });
    }
  }

  // DELETE - Eliminar un producto (solo para administradores)
  if (req.method === "DELETE") {
    // Verificar autenticación
    if (!session) {
      return res.status(401).json({ error: "No autorizado" });
    }

    // Verificar rol de administrador
    if (session.user.role !== "admin") {
      return res.status(403).json({ error: "Acceso denegado" });
    }

    try {
      const { id } = req.query;
      
      if (!id) {
        return res.status(400).json({ error: "ID de producto no proporcionado" });
      }

      // Verificar si es un producto estático (no se pueden eliminar)
      if (isStaticProduct(parseInt(id))) {
        return res.status(400).json({ error: "No se pueden eliminar productos estáticos" });
      }

      const numericId = parseInt(id, 10);
      await deleteProduct(numericId);
      return res.status(200).json({ success: true, message: "Producto eliminado correctamente" });
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      return res.status(500).json({ error: "Error al eliminar el producto" });
    }
  }

  // PUT - Actualizar un producto (solo para administradores)
  if (req.method === "PUT") {
    // Verificar autenticación
    if (!session) {
      return res.status(401).json({ error: "No autorizado" });
    }

    // Verificar rol de administrador
    if (session.user.role !== "admin") {
      return res.status(403).json({ error: "Acceso denegado" });
    }

    try {
      const product = req.body;
      
      // Validar datos del producto
      if (!product.id || !product.name || !product.price || !product.category || !product.image) {
        return res.status(400).json({ error: "Datos de producto incompletos" });
      }
      
      if (isStaticProduct(product.id)) {
        return res.status(400).json({ error: "No se pueden editar productos estáticos desde el panel" });
      }

      const updatedProduct = await updateProduct(product.id, product);
      return res.status(200).json(updatedProduct);
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      return res.status(500).json({ error: error.message || "Error al actualizar el producto" });
    }
  }

  // Método no permitido
  return res.status(405).json({ error: "Método no permitido" });
}
