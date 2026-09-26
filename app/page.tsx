import { fetchPizzaCatalog, groupPizzasByCategory } from "@/lib/api";
import { PIZZA_CATEGORIES, PIZZA_CATEGORY_LABELS } from "@/lib/constants";
import { PizzaCard } from "@/components/pizza-card";

export default async function Home() {
  const pizzas = await fetchPizzaCatalog();
  const groups = groupPizzasByCategory(pizzas);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
      {PIZZA_CATEGORIES.map((category) => {
        const items = groups[category];

        if (items.length === 0) {
          return null;
        }

        return (
          <section key={category} id={category} className="mb-16 scroll-mt-24">
            <h2 className="mb-6 text-2xl font-semibold">
              {PIZZA_CATEGORY_LABELS[category]}
            </h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-8">
              {items.map((pizza, index) => (
                <PizzaCard
                  key={pizza._id}
                  pizza={pizza}
                  featured={category === "pizza" && index === 0}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
