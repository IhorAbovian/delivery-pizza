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
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {items.map((pizza) => (
                <PizzaCard key={pizza._id} pizza={pizza} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
