"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveChecklist } from "@/app/lib/checklists";

export default function NewChecklistPage() {
	const router = useRouter();

	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("");
	const [items, setItems] = useState("");

	const handleSave = () => {
		saveChecklist({
			id: crypto.randomUUID(),
			title,
			categories: {
				[category]: items.split("\n").filter(Boolean),
			},
		});

		router.push("/custom");
	};

	return (
		<main className="min-h-screen text-black">
			<div className="w-[40vw] mx-auto px-6 pt-24">
				<Link href="/custom">← Back</Link>

				<h1 className="text-[6vh] font-light mb-8 vintageone">New Checklist</h1>

				<div className="space-y-4">
					<input
						placeholder="Checklist Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="w-full border p-3"
					/>

					<input
						placeholder="Category"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						className="w-full border p-3"
					/>

					<textarea
						placeholder="One item per line"
						value={items}
						onChange={(e) => setItems(e.target.value)}
						className="w-full border p-3 h-48"
					/>

					<button
						onClick={handleSave}
						className="border px-6 py-3 hover:bg-black hover:text-white transition"
					>
						Save Checklist
					</button>
				</div>
			</div>
		</main>
	);
}
