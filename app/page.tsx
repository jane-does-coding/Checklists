import Link from "next/link";

const scenarios = [
	{ name: "Purse Items", slug: "purse" },
	{ name: "1-3 Day Trip", slug: "trip-short" },
	{ name: "3+ Day Suitcase", slug: "trip-long" },
	{ name: "Grocery Shopping", slug: "groceries" },
	{ name: "Tech Backpack", slug: "tech-backpack" },
];

export default function Home() {
	return (
		<main className="min-h-screen bg-white text-black">
			<div className="max-w-2xl mx-auto px-6 py-32">
				<div className="mb-16">
					<h1 className="text-5xl font-normal mb-2">ReadySet</h1>
					<p className="text-gray-400">Smart checklists for every scenario</p>
				</div>

				<div className="space-y-0 divide-y divide-gray-100">
					{scenarios.map((s) => (
						<Link
							key={s.slug}
							href={`/checklists/${s.slug}`}
							className="block py-5 group"
						>
							<div className="flex justify-between items-center">
								<span className="text-lg font-light group-hover:text-gray-600 transition-colors">
									{s.name}
								</span>
								<span className="text-gray-300 group-hover:text-gray-400 transition-colors">
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
