"use client";

import Link from "next/link";
import { useState } from "react";

export default function ChecklistPages({ title, categories }: any) {
	const [openCategories, setOpenCategories] = useState(
		Object.keys(categories).reduce((acc: any, key) => {
			acc[key] = true;
			return acc;
		}, {})
	);

	const toggleCategory = (category: string) => {
		setOpenCategories((prev: any) => ({
			...prev,
			[category]: !prev[category],
		}));
	};

	return (
		<main className="min-h-screen text-black pb-[10vh]">
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
						{title}
					</h1>
					<div className="w-[3vw] h-px bg-gray-200 mt-4" />
				</div>

				{/* Categories */}
				<div className="space-y-8">
					{Object.entries(categories).map(([cat, items]: any) => (
						<section key={cat}>
							<button
								onClick={() => toggleCategory(cat)}
								className="w-full flex items-center justify-between mb-4 text-left group"
							>
								<h2 className="text-lg font-medium text-gray-900">{cat}</h2>
								<span className="text-neutral-700 transition-colors w-[2vw] h-[2vw] text-[2vh] rounded-full bg-white border-[0.1vh] border-black flex items-center justify-center">
									{openCategories[cat] ? "−" : "+"}
								</span>
							</button>

							{openCategories[cat] && (
								<div className="space-y-3 pl-1">
									{(items as string[]).map((item: string) => (
										<label
											key={item}
											className="flex items-center group cursor-pointer"
										>
											<input
												type="checkbox"
												className="w-4 h-4 border-gray-300 rounded focus:ring-0 focus:ring-offset-0 text-black"
											/>
											<span className="ml-3 text-gray-600 group-hover:text-gray-900 transition-colors">
												{item}
											</span>
										</label>
									))}
								</div>
							)}
						</section>
					))}
				</div>
			</div>
		</main>
	);
}
