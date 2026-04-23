import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import {
  getFeaturedProducts,
  setProductFeatured,
  getProductById,
} from "../../../utils/supabaseDb";

export default async function handler(req, res) {
  // GET - Obtener todos los productos destacados
  if (req.method === "GET") {
    try {
      const featuredProducts = await getFeaturedProducts();
      return res.status(200).json(featuredProducts.map((product) => product.id));
    } catch (error) {
      return res.status(500).json({ message: error.message || "Error al leer destacados" });
    }
  }

  // Verificar autenticación para operaciones de escritura
  const session = await getServerSession(req, res, authOptions);
  
  if (!session) {
    return res.status(401).json({ message: "No has iniciado sesión" });
  }

  // Verificar si el usuario es administrador
  if (session.user.role !== "admin") {
    return res.status(401).json({ message: "No tienes permisos de administrador" });
  }

  // POST - Añadir un producto a la colección destacada
  if (req.method === "POST") {
    const { productId } = req.body;

    if (!productId || typeof productId !== 'number') {
      return res.status(400).json({ message: "Se requiere un ID de producto válido" });
    }

    try {
      const product = await getProductById(productId);
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }

      if (product.isFeatured) {
        return res.status(400).json({ message: "El producto ya está en la colección destacada" });
      }

      await setProductFeatured(productId, true);
      return res.status(201).json({ message: "Producto añadido a la colección destacada" });
    } catch (error) {
      return res.status(500).json({ message: error.message || "Error al actualizar destacados" });
    }
  }

  // DELETE - Eliminar un producto de la colección destacada
  if (req.method === "DELETE") {
    const { productId } = req.body;

    if (!productId || typeof productId !== 'number') {
      return res.status(400).json({ message: "Se requiere un ID de producto válido" });
    }

    try {
      const product = await getProductById(productId);
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }

      if (!product.isFeatured) {
        return res.status(404).json({ message: "Producto no encontrado en la colección destacada" });
      }

      await setProductFeatured(productId, false);
      return res.status(200).json({ message: "Producto eliminado de la colección destacada" });
    } catch (error) {
      return res.status(500).json({ message: error.message || "Error al guardar los cambios" });
    }
  }

  // Método no permitido
  return res.status(405).json({ message: "Método no permitido" });
}
