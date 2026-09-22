import { PIZZA_CATEGORIES, PIZZA_CATEGORY_LABELS } from "@/lib/constants";

const CONTACT_LINKS = ["Customer support", "Email us", "Feedback", "Contacts"];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-orange-50 px-6 py-10 sm:px-10">
      <div className="grid gap-8 sm:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">🍕 Pizza Jr</p>
          <p className="mt-1 text-sm text-neutral-600">Pizzeria</p>
        </div>

        <div>
          <p className="font-medium">Menu</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-neutral-600">
            {PIZZA_CATEGORIES.map((category) => (
              <li key={category}>
                <a href={`/#${category}`} className="hover:text-neutral-900">
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
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-orange-100 pt-6 text-xs text-neutral-500 sm:flex-row sm:justify-between">
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </footer>
  );
}
