import { Plus } from "lucide-react";
import type { Pizza } from "@/types/pizza";
import { getPizzaImageUrl, getStartingPrice } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { PizzaDetailsDialog } from "@/components/pizza-details-dialog";

export function PizzaCard({ pizza }: { pizza: Pizza }) {
  const startingPrice = getStartingPrice(pizza);

  return (
    <Dialog>
      <DialogTrigger className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left transition-shadow hover:shadow-md">
        {pizza.isHit && (
          <Badge variant="destructive" className="absolute left-3 top-3 z-10">
            Hit
          </Badge>
        )}
        {!pizza.isHit && pizza.isNovelty && (
          <Badge className="absolute left-3 top-3 z-10">New</Badge>
        )}

        <img
          src={getPizzaImageUrl(pizza.img)}
          alt={pizza.name}
          className="aspect-square w-full bg-neutral-100 object-cover"
        />

        <div className="flex flex-1 flex-col gap-3 p-4">
          <h3 className="font-semibold leading-snug">{pizza.name}</h3>

          <div className="mt-auto flex items-center justify-between">
            <span className="text-sm text-neutral-600">
              from {startingPrice} ₽
            </span>
            <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Plus className="size-4" />
            </span>
          </div>
        </div>
      </DialogTrigger>

      <PizzaDetailsDialog pizza={pizza} />
    </Dialog>
  );
}
