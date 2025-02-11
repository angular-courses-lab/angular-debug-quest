export interface Sock {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
}

export interface CartItem {
  sock: Sock;
  quantity: number;
}
