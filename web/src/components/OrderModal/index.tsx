import { Overlay, ModalBody, OrderDetails, Actions } from "./styles"

import closeIcon from '../../assets/images/close-icon.svg'
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";

interface OrderModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  order: Order | null;
}

export function OrderModal({isOpen, onRequestClose, order}: OrderModalProps) {
  if(!isOpen || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity}) => {
    return total + (product.price * quantity);
  }, 0)
  
  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button>
            <img src={closeIcon} alt="Fechar modal" onClick={onRequestClose}/>
          </button>
        </header>
        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status == 'WAITING' && '🕗'}
              {order.status == 'IN_PRODUCTION' && '👩‍🍳'}
              {order.status == 'DONE' && '✅'}
              </span>
            <strong>
              {order.status == 'WAITING' && 'fila de espera'}
              {order.status == 'IN_PRODUCTION' && 'em produção'}
              {order.status == 'DONE' && 'pronto'}
            </strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>
          <div className="order-items">
          {order.products.map(({_id, product, quantity}) => (
            <div className="item" key={_id}>
              <img src={`http://localhost:3001/uploads/${product.imagePath}`} alt="" width={48} height={40}/>
              <span className="quantity">{quantity}x</span>
              <div className="product-details">
                <strong>{product.name}</strong>
                <span>{formatCurrency(product.price)}</span>
              </div>
            </div>
          ))}
          </div>
          <div className="total">
            <span>Total</span>
            <strong>{total}</strong>
          </div>
        </OrderDetails>
        <Actions>
          <button className="primary">
            <span>👩‍🍳</span>
            <strong>Iniciar Produção</strong>
          </button>
          <button className="secondary">
            cancelar pedido
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  )
}