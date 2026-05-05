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
			<div className="w-[40vw] mx-auto px-[1vw] pt-[10vh]">
				<div className="mb-[3vh]">
					<h1 className="text-[6vh] font-normal mb-[1vh] vintageone">
						Ready or Not
					</h1>
					<p className="text-neutral-700 text-[2vh] font-extralight">
						Smart checklists for every scenario
					</p>
				</div>

				<div className="space-y-0 divide-neutral-300">
					<Link
						href={"/custom"}
						className="block py-[2vh] border-b border-neutral-300"
					>
						<div className="flex justify-between items-center">
							<span
								className={`"text-black text-[2vh] font-light group-hover:text-gray-600 transition-colors "`}
							>
								Custom Checklists
							</span>
							<span className="text-neutral-700 transition-colors w-[2vw] h-[2vw] text-[2vh] rounded-full bg-white border-[0.1vh] border-black flex items-center justify-center">
								→
							</span>
						</div>
					</Link>
					{scenarios.map((s, i) => (
						<Link
							key={s.slug}
							href={s.slug.startsWith("/") ? s.slug : `/checklists/${s.slug}`}
							className={`block py-[2vh] group  ${
								i == scenarios.length - 1 ? "border-none" : "border-b"
							} border-neutral-300`}
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
