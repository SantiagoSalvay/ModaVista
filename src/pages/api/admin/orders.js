import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { getAllOrders } from '../../../utils/supabaseDb';
import { withAuth } from '../../../middleware/auth';

const handler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Método no permitido' });
  }
  
  try {
    
    // Obtener todas las órdenes usando Supabase
    const ordersResult = await getAllOrders();

    const normalizedOrders = (ordersResult || []).map((order) => {
      const shipping = order.shipping_address || {};

      return {
        ...order,
        // Datos cliente
        name: shipping.name || order?.users?.name || order.name || '',
        email: shipping.email || order?.users?.email || order.email || '',
        phone: shipping.phone || order.phone || '',

        // Datos de envío (compatibilidad snake/camel)
        address: shipping.address || order.address || '',
        city: shipping.city || order.city || '',
        state: shipping.state || order.state || '',
        postal_code: shipping.postal_code || shipping.postalCode || order.postal_code || order.postalCode || '',

        // Items siempre como arreglo
        items: Array.isArray(order.items) ? order.items : [],

        // Comprobante
        receipt_image: order.receipt_image || null,
      };
    });
    
    return res.status(200).json({
      success: true,
      orders: normalizedOrders
    });
    
  } catch (error) {
    console.error('Error al obtener las órdenes:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Error al obtener las órdenes'
    });
  }
}

// Exportar con protección de administrador
export default withAuth(handler, { 
  requireAdmin: true,
  rateLimit: { windowMs: 60000, maxRequests: 30 } // 30 requests per minute
}) 