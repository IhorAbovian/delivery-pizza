export type PizzaCategory = "pizza" | "breakfast" | "wings" | "milkshake";

export type PizzaSize = {
  type: "small" | "medium" | "large";
  price: number;
  volume: number;
};

export type PizzaOption = {
  type: string;
  price: number;
};

export type PizzaIngredient = {
  type: string;
  price: number;
  img: string;
};

export type Pizza = {
  _id: string;
  category: PizzaCategory;
  name: string;
  description: string;
  img: string;
  sizes: PizzaSize[];
  options: PizzaOption[];
  ingredients: PizzaIngredient[];
  calories: number;
  protein: string;
  totalFat: string;
  carbohydrates: string;
  sodium: string;
  allergens: string[];
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isNovelty: boolean;
  isHit: boolean;
};
