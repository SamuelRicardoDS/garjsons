import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Orders } from "../Orders";
import { OrdersContainer, Board } from "./styles";


interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Order[];
}

export function OrdersBoard({icon, title, orders}: OrdersBoardProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenOrder(order: Order) {
    setModalIsOpen(true);
    setSelectedOrder(order);
    console.log(order);
  }
  
  return(
    <Board>
      <OrderModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} order={selectedOrder}/>
    <header>
      <span>{icon}</span>
      <strong>{title}</strong>
      <span>{1}</span>
    </header>
    {orders.length > 0 && (
      <OrdersContainer>
      {orders.map((order) => (
        <button type="button" key={order._id} onClick={() => handleOpenOrder(order)}>
          <strong> Mesa {order.table} </strong>
          <span> {order.products.length} </span>
        </button>
      ))}
    </OrdersContainer>
    )}
    </Board>
  )
}