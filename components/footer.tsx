import { PIZZA_CATEGORIES, PIZZA_CATEGORY_LABELS } from "@/lib/constants";
import { ThemeToggle } from "@/components/theme-toggle";

const CONTACT_LINKS = ["Customer support", "Email us", "Feedback", "Contacts"];

export function SiteFooter() {
  return (
    <div className="mt-16  p-6 pb-4 sm:p-10 sm:pb-4">
      <footer className="rounded-3xl bg-orange-50 p-8 sm:p-10">
        <div className="grid gap-8 sm:grid-cols-4">
          <div>
            <p className="text-lg font-semibold">🍕 Pizza</p>
            <p className="mt-1 text-sm text-neutral-600">Pizzeria</p>
          </div>

          <div>
            <p className="font-medium">Menu</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-neutral-600">
              {PIZZA_CATEGORIES.map((category) => (
                <li key={category}>
                  <a
                    href={`/#${category}`}
                    className="cursor-pointer hover:text-neutral-900"
                  >
                    {PIZZA_CATEGORY_LABELS[category]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium">Contact us</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-neutral-600">
              {CONTACT_LINKS.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium">Pizza delivery worldwide</p>
            <p className="mt-3 text-sm text-neutral-600">
              Fresh pizza, breakfast, wings and milkshakes delivered fast to
              your door, wherever you are.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-orange-100 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <span className="cursor-pointer hover:text-neutral-700">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-neutral-700">
              Terms of Service
            </span>
          </div>

          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
}
