import { Plus, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Pizza } from "@/types/pizza";
import { getPizzaImageUrl, getStartingPrice } from "@/lib/api";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { PizzaDetailsDialog } from "@/components/pizza-details-dialog";

function getBadgeLabel(pizza: Pizza): string | null {
  if (pizza.isHit) return "Hit";
  if (pizza.isNovelty) return "New";
  if (pizza.isVegetarian) return "Vegan";
  return null;
}

function PizzaBadge({ label }: { label: string }) {
  return (
    <span className="absolute left-2 top-2 z-10 inline-flex h-6 items-center justify-center rounded-full bg-[#f14e1d] px-3 text-[10px] font-bold tracking-wide text-white lg:h-auto lg:px-4 lg:py-2 lg:text-xs">
      {label}
    </span>
  );
}

export function PizzaCard({
  pizza,
  featured = false,
}: {
  pizza: Pizza;
  featured?: boolean;
}) {
  const startingPrice = getStartingPrice(pizza);
  const badgeLabel = getBadgeLabel(pizza);

  return (
    <Dialog>
      {/* Mobile/tablet only — the first pizza gets a promo-style card up to `lg`.
          Desktop has no such treatment, so this trigger is hidden at `lg` and up. */}
      {featured && (
        <DialogTrigger className="group relative col-span-2 flex cursor-pointer flex-col items-center justify-between gap-4 overflow-hidden rounded-3xl bg-orange-500 px-6 pb-6 pt-8 text-center sm:col-span-3 lg:hidden">
          <div className="relative flex h-44 w-44 shrink-0 items-center justify-center sm:h-48 sm:w-48">
            <Sparkles className="absolute -left-1 top-2 size-4 rotate-12 text-yellow-200" />
            <Sparkles className="absolute right-0 top-6 size-6 rotate-45 text-yellow-200" />
            <Sparkles className="absolute bottom-2 left-4 size-3 text-yellow-200" />
            <img
              src={getPizzaImageUrl(pizza.img)}
              alt={pizza.name}
              className="relative z-10 size-full rounded-full object-cover"
            />
          </div>

          <h3 className="text-xl font-bold text-white">{pizza.name}</h3>

          <span className="w-full rounded-full bg-neutral-100 px-6 py-2 text-sm font-medium text-foreground">
            from {startingPrice} ₽
          </span>
        </DialogTrigger>
      )}

      {/* Standard card — used for every pizza on desktop (incl. the first one),
          and for every non-first pizza below `lg`. */}
      <DialogTrigger
        className={cn(
          "group relative w-full cursor-pointer flex-col gap-3 rounded-3xl bg-neutral-100 p-2 text-left transition-shadow hover:shadow-md lg:bg-transparent lg:p-0 lg:hover:shadow-none",
          featured ? "hidden lg:flex" : "flex",
        )}
      >
        <div className="relative aspect-163/176 w-full overflow-hidden rounded-2xl bg-white lg:flex lg:aspect-auto lg:h-49.5 lg:items-end lg:overflow-hidden lg:rounded-3xl lg:bg-neutral-100">
          {badgeLabel && <PizzaBadge label={badgeLabel} />}
          <img
            src={getPizzaImageUrl(pizza.img)}
            alt={pizza.name}
            className="size-full object-cover lg:h-48"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2 px-1 pb-1 lg:w-full lg:gap-3 lg:px-0 lg:pb-0">
          <h3 className="text-sm font-medium leading-snug text-foreground lg:h-16 lg:text-xl lg:font-bold lg:leading-7">
            {pizza.name}
          </h3>

          <div className="mt-auto flex h-8 items-center justify-between lg:h-10 lg:rounded-full lg:bg-secondary lg:px-6 lg:py-2">
            <span className="text-sm font-medium text-foreground">
              from {startingPrice} ₽
            </span>
            <Plus className="size-4 text-foreground" />
          </div>
        </div>
      </DialogTrigger>

      <PizzaDetailsDialog pizza={pizza} />
    </Dialog>
  );
}
