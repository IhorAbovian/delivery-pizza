"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const CartContext = createContext<{
  itemCount: number;
  totalPrice: number;
  addItem: (price: number) => void;
} | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (price: number) => {
    setItemCount((prev) => prev + 1);
    setTotalPrice((prev) => prev + price);
  };

  return (
    <CartContext.Provider value={{ itemCount, totalPrice, addItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
