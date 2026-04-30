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
		<main className="min-h-screen text-black">
			<div className="w-[40vw] mx-auto px-[1vw] pt-[15vh]">
				<div className="mb-[6vh]">
					<h1 className="text-[6vh] font-normal mb-[1vh] vintageone">
						Ready or Not
					</h1>
					<p className="text-neutral-700 text-[2vh] font-extralight">
						Smart checklists for every scenario
					</p>
				</div>

				<div className="space-y-0 divide-y divide-neutral-300">
					{scenarios.map((s) => (
						<Link
							key={s.slug}
							href={`/checklists/${s.slug}`}
							className="block py-[2vh] group"
						>
							<div className="flex justify-between items-center">
								<span className="text-black text-[2vh] font-light group-hover:text-gray-600 transition-colors">
									{s.name}
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
