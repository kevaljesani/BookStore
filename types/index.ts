export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  description: string;
}

export interface CartItem extends Book {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  isGuest: boolean;
}