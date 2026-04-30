import ChecklistPages from "@/app/components/ChecklistPage";
import Link from "next/link";

const categories = {
	Essentials: ["Phone & charger", "Wallet & ID", "Keys", "Headphones"],
	Clothing: [
		"2-3 shirts",
		"1-2 pants/shorts",
		"Underwear (3 pairs)",
		"Socks (3 pairs)",
		"Jacket or sweater",
		"Sleepwear",
		"Hat",
	],
	Toiletries: [
		"Toothbrush & toothpaste",
		"Deodorant",
		"Face wash",
		"Shampoo (travel size)",
		"Hairbrush/comb",
		"Medications",
		"Sunscreen",
	],
	Extras: [
		"Water bottle",
		"Snacks",
		"Book or Kindle",
		"Portable charger",
		"Umbrella",
		"Tissues/wipes",
	],
};

export default function TripShortPage() {
	return <ChecklistPages title="1–3 Day Trip" categories={categories} />;
}
