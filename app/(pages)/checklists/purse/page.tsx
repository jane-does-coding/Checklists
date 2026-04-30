import ChecklistPages from "@/app/components/ChecklistPage";

export default function PursePage() {
	const categories = {
		Essentials: ["Wallet", "Keys", "Phone", "Lip balm"],
		Emergency: ["Band-aids", "Portable charger"],
		Beauty: ["Mirror", "Powder", "Perfume"],
	};

	return <ChecklistPages title="Purse Essentials" categories={categories} />;
}
