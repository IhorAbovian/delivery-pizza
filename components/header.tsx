"use client";

import Link from "next/link";
import { ChevronDown, Clock, Pizza, ShoppingBasket, User } from "lucide-react";
import { PIZZA_CATEGORIES, PIZZA_CATEGORY_LABELS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/components/cart-context";

export function SiteHeader() {
  const { itemCount, totalPrice } = useCart();
  return (
    <header className="px-6 py-4 sm:px-10">
      <div className="flex items-center justify-between gap-6 rounded-full bg-neutral-50 p-3">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 text-base font-extrabold uppercase tracking-tight text-foreground"
        >
          <Pizza className="size-6" aria-hidden />
          Pizza
        </Link>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="hidden cursor-pointer items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/80 sm:flex"
            >
              Select delivery address
              <ChevronDown className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Order history"
              className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-neutral-100 text-foreground hover:bg-neutral-200"
            >
              <Clock className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Account"
              className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-neutral-100 text-foreground hover:bg-neutral-200"
            >
              <User className="size-5" />
            </button>
          </div>
          <Button className="rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100">
            Log in
          </Button>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <nav className="flex flex-wrap gap-2">
          {PIZZA_CATEGORIES.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className={
                index === 0
                  ? "rounded-full border-transparent bg-black text-white hover:bg-black/80"
                  : "rounded-full border-transparent bg-neutral-100 hover:bg-neutral-200"
              }
              asChild
            >
              <a href={`/#${category}`}>{PIZZA_CATEGORY_LABELS[category]}</a>
            </Button>
          ))}
        </nav>

        <Button className="rounded-full">
          <ShoppingBasket />
          {formatPrice(totalPrice)}
        </Button>
      </div>
    </header>
  );
}
