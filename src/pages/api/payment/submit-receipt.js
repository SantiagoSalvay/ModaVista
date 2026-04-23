import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { getOrderById, updateOrderStatus } from '../../../utils/supabaseDb';
import { supabaseAdmin } from '../../../utils/supabase';
import { withAuth } from '../../../middleware/auth';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { orderId, receiptImage } = req.body;
    
    if (!orderId || !receiptImage) {
      return res.status(400).json({
        success: false,
        message: 'ID de orden y imagen de recibo son requeridos'
      });
    }

    // Verificar que la orden existe y pertenece al usuario
    const order = await getOrderById(orderId);
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Orden no encontrada'
      });
    }

    if (order.user_id !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Acceso denegado'
      });
    }

    // Guardar comprobante y mantener estado de pago en pendiente para revisión admin
    const { data: receiptUpdatedOrder, error: receiptUpdateError } = await supabaseAdmin
      .from('orders')
      .update({
        receipt_image: receiptImage,
        payment_status: 'pending',
        updated_at: new Date().toISOString()
      })
      .eq('id', orderId)
      .select('*')
      .single();

    if (receiptUpdateError) {
      throw receiptUpdateError;
    }

    // Normalizar también el estado general de la orden
    const updatedOrder = await updateOrderStatus(orderId, 'pending', 'pending');
    
    console.log(`📄 Recibo enviado para orden ${orderId}`);
    
    return res.status(200).json({
      success: true,
      message: 'Recibo enviado exitosamente',
      order: {
        ...updatedOrder,
        ...(receiptUpdatedOrder || {})
      }
    });
    
  } catch (error) {
    console.error('Error al enviar recibo:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
}

// Exportar con protección de autenticación y validación
export default withAuth(handler, { 
  requireAdmin: false,
  rateLimit: { windowMs: 60000, maxRequests: 20 },
  validation: {
    orderId: { required: true, type: 'uuid' },
    receiptImage: { required: true, type: 'string' }
  }
})