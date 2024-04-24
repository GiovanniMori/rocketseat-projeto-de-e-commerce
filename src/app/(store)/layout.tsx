import Header from "@/components/header";
import { CartProvider } from "@/context/cart-context";
import React from "react";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full container grid-rows-app gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  );
}
