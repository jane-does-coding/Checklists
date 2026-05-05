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
				{/* Header */}
				<div className="mb-[4vh]">
					<Link
						href="/"
						className="text-gray-400 hover:text-gray-600 transition-colors mb-[1vh] inline-block"
					>
						← Back
					</Link>
					<h1 className="text-[6vh] font-light mb-2 tracking-tight vintageone">
						Custom Checklists
					</h1>
					<div className="w-[3vw] h-px bg-gray-200 mt-4" />
				</div>

				<Link
					href="/custom/new"
					className="block px-4 py-[2vh] transition border-b text-neutral-700 border-neutral-300 text-[2vh]"
				>
					<div className="flex justify-between items-center">
						<span className="text-black text-[2vh] font-light group-hover:text-gray-600 transition-colors">
							Create new Checklist +
						</span>
						<span className="text-neutral-700 transition-colors w-[2vw] h-[2vw] text-[2vh] rounded-full bg-white border-[0.1vh] border-black flex items-center justify-center">
							→
						</span>
					</div>
				</Link>

				<div className="space-y-4">
					{checklists.map((c) => (
						<Link
							key={c.id}
							href={`/custom/${c.id}`}
							className="block px-4 py-[2vh] transition border-b text-neutral-700 border-neutral-300 text-[2vh]"
						>
							<div className="flex justify-between items-center">
								<span className="text-black text-[2vh] font-light group-hover:text-gray-600 transition-colors">
									{c.title}
								</span>
								<span className="text-neutral-700 transition-colors w-[2vw] h-[2vw] text-[2vh] rounded-full bg-white border-[0.1vh] border-black flex items-center justify-center">
									→
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</main>
	);
}
