"use client";

import { Checklist, getChecklists } from "@/app/lib/checklists";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CustomPage() {
	const [checklists, setChecklists] = useState<Checklist[]>([]);

	useEffect(() => {
		setChecklists(getChecklists());
	}, []);

	return (
		<main className="min-h-screen text-black">
			<div className="w-[40vw] mx-auto px-6 pt-24">
				<Link href="/" className=" hover:text-gray-600">
					← Back
				</Link>

				<h1 className="text-[6vh] font-light mb-8 vintageone">
					Custom Checklists
				</h1>

				<Link
					href="/custom/new"
					className="block px-4 py-[2vh] transition border-b text-neutral-700 border-neutral-300 text-[2vh]"
				>
					+ Create New Checklist
				</Link>

				<div className="space-y-4">
					{checklists.map((c) => (
						<Link
							key={c.id}
							href={`/custom/${c.id}`}
							className="block px-4 py-[2vh] transition border-b text-neutral-700 border-neutral-300 text-[2vh]"
						>
							{c.title}
						</Link>
					))}
				</div>
			</div>
		</main>
	);
}
