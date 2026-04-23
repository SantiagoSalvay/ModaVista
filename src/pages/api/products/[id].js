import { getProductById } from "../../../utils/supabaseDb";
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

// Función para buscar un producto estático por ID
const findStaticProductById = (id) => {
  // Convertir el ID a número para comparación
  const numId = parseInt(id, 10);
  
  // Buscar en todas las categorías de productos estáticos
  for (const category in staticProducts) {
    const product = staticProducts[category].find(p => p.id === numId);
    if (product) {
      return {...product, category};
    }
  }
  
  return null;
};

export default async function handler(req, res) {
  // Solo permitir peticiones GET
  if (req.method !== "GET") {
    console.log(`Método no soportado: ${req.method}`);
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const { id } = req.query;
    
    if (!id) {
      console.log("ID de producto no proporcionado");
      return res.status(400).json({ error: "ID de producto no proporcionado" });
    }

    console.log(`Buscando producto con ID: ${id}`);
    const numId = parseInt(id, 10);
    
    const dynamicProduct = await getProductById(numId);
    console.log(`¿Existe versión DB?: ${!!dynamicProduct}`);
    
    // Verificar si es un producto estático
    const isStatic = isStaticProduct(numId);
    console.log(`¿Es producto estático?: ${isStatic}`);
    
    if (isStatic) {
      // Si es un producto estático, buscarlo en el catálogo estático
      const staticProduct = findStaticProductById(numId);
      
      if (!staticProduct) {
        console.log(`Producto estático con ID ${id} no encontrado`);
        return res.status(404).json({ error: "Producto no encontrado" });
      }
      
      // Si hay una versión en DB, combinar con prioridad para campos dinámicos
      if (dynamicProduct) {
        console.log("Existe versión en DB, combinando datos");
        const combinedProduct = {
          ...staticProduct,
          ...dynamicProduct,
          image: dynamicProduct.image || staticProduct.image,
        };

        return res.status(200).json(combinedProduct);
      }
      
      // Si no hay versión dinámica, devolver el producto estático original
      console.log("No existe versión dinámica, usando datos del producto estático");
      
      const productWithDiscount = { ...staticProduct };
      
      return res.status(200).json(productWithDiscount);
    } else {
      // Si no es estático y no existe en DB
      if (!dynamicProduct) {
        console.log(`Producto con ID ${id} no encontrado`);
        return res.status(404).json({ error: "Producto no encontrado" });
      }

      console.log(`Devolviendo producto dinámico:`);
      console.log(JSON.stringify(dynamicProduct, null, 2));
      return res.status(200).json(dynamicProduct);
    }
  } catch (error) {
    console.error("Error al obtener producto:", error);
    return res.status(500).json({ error: "Error al obtener el producto" });
  }
} 