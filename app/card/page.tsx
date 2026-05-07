"use client";

import CartItem from "@/component/CartItem";
import { useCart } from "@/context/CartContext";

export const metadata = {
  title: "Cart",
  description: "Your cart",
};

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-4">
      <h1>Cart</h1>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} remove={removeFromCart} />
      ))}
    </div>
  );
}