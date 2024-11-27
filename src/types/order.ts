export interface OrderItem {
  name: string;
  quantity: number;
}

export interface Order {
  id: string;
  status: string;
  date: string;
  customerName: string;
  deliveryTime: string;
  location: string;
  items: OrderItem[];
  totalAmount: number;
}