import type { PizzaCategory } from "@/types/pizza";

export const PIZZA_CATEGORIES: PizzaCategory[] = [
  "pizza",
  "breakfast",
  "wings",
  "milkshake",
];

export const PIZZA_CATEGORY_LABELS: Record<PizzaCategory, string> = {
  pizza: "Pizzas",
  breakfast: "Breakfast",
  wings: "Wings",
  milkshake: "Milkshakes",
};
