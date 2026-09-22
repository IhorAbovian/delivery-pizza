import Link from "next/link";
import { ChevronDown, Clock, ShoppingBasket, User } from "lucide-react";
import { PIZZA_CATEGORIES, PIZZA_CATEGORY_LABELS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 px-6 py-4 sm:px-10">
      <div className="flex items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span aria-hidden>🍕</span>
          PIZZA
        </Link>

        <div className="flex items-center gap-4 text-sm text-neutral-600">
          <button
            type="button"
            className="hidden items-center gap-1 hover:text-neutral-900 sm:flex"
          >
            Select delivery address
            <ChevronDown className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Order history"
            className="text-neutral-500 hover:text-neutral-900"
          >
            <Clock className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="text-neutral-500 hover:text-neutral-900"
          >
            <User className="size-5" />
          </button>
          <Button variant="secondary" className="rounded-full">
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
              className="rounded-full"
              asChild
            >
              <a href={`/#${category}`}>{PIZZA_CATEGORY_LABELS[category]}</a>
            </Button>
          ))}
        </nav>

        <Button className="rounded-full">
          <ShoppingBasket />
          Cart
        </Button>
      </div>
    </header>
  );
}
