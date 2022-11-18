import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [

	{
		"_id": "6372ec11110d973c6734b6b7",
		"table": "123",
		"status": "WAITING",
		"products": [
			{
				"product": {
					"name": "Coca cola",
					"imagePath": "1668474707843-coca.jpg",
					"price": 6,
				},
				"quantity": 3,
				"_id": "6372ec11110d973c6734b6b8"
			},
			{
				"product": {
					"name": "Pizza quatro queijod",
					"imagePath": "1668473082825-pizzaquatroqueijos.jpg",
					"price": 40,
					
				},
				"quantity": 2,
				"_id": "6372ec11110d973c6734b6b9"
			}
		],
	}


]

export function Orders() {
  return (
  <Container>
    <OrdersBoard title="Fila de espera" icon="🕗" orders={[]}/>
    <OrdersBoard title="Em produção" icon="👩‍🍳" orders={orders}/>
    <OrdersBoard title="Pronto!" icon="✅" orders={[]}/>
  </Container>
  )
}