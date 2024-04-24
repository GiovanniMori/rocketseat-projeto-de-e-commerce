import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CartWidget from "./cart-widget";
import SearchForm from "./search-form";

export default function Header() {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-5">
        <Link href={"/"} className="text-2xl text-white font-extrabold">
          devstore
        </Link>
        <SearchForm />
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />
        <div className="w-px h-4 bg-zinc-400" />
        <Link href={"/"} className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/giovannimori.png"
            alt="avatar"
            width={24}
            height={24}
            className="rounded-full h-6 w-6 "
          />
        </Link>
      </div>
    </div>
  );
}
