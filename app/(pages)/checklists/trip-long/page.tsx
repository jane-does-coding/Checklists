import ChecklistPages from "@/app/components/ChecklistPage";
import Link from "next/link";

const categories = {
	"Documents & Money": [
		"Passport/ID",
		"Visa (if needed)",
		"Flight/hotel confirmations",
		"Travel insurance",
		"Credit/debit cards",
		"Local currency",
		"Emergency contacts",
	],
	Electronics: [
		"Phone & charger",
		"Laptop & charger",
		"Power bank",
		"Adapter/converter",
		"Headphones",
		"Camera & charger",
		"E-reader or tablet",
	],
	Clothing: [
		"5-7 shirts",
		"3-4 pants/shorts",
		"Underwear (7 pairs)",
		"Socks (7 pairs)",
		"Sleepwear (2 sets)",
		"Jacket/coat",
		"Rain jacket",
		"Swimsuit",
		"Workout clothes",
		"Comfortable walking shoes",
		"Dress shoes (if needed)",
	],
	Toiletries: [
		"Toothbrush & toothpaste",
		"Deodorant",
		"Shampoo & conditioner",
		"Body wash/soap",
		"Face care routine",
		"Hair products",
		"Razor",
		"Makeup (if needed)",
		"Medications (prescription & OTC)",
		"First aid kit",
		"Sunscreen",
		"Insect repellent",
	],
	"Packing Aids": [
		"Suitcase",
		"Daypack/backpack",
		"Packing cubes",
		"Laundry bag",
		"Tote for shopping",
		"Locks for luggage",
	],
	Miscellaneous: [
		"Water bottle",
		"Snacks",
		"Travel pillow",
		"Umbrella",
		"Tissues/wipes",
		"Hand sanitizer",
		"Guidebook or maps",
		"Pen (for customs forms)",
	],
};

export default function TripLongPage() {
	return <ChecklistPages title="3+ Day Trip" categories={categories} />;
}
