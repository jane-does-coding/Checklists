import Link from "next/link";

export default function ChecklistPages({ title, categories }: any) {
	return (
		<main className="min-h-screen bg-white text-black">
			<div className="max-w-2xl mx-auto px-6 py-24">
				{/* Header */}
				<div className="mb-16">
					<Link
						href="/"
						className="text-gray-400 hover:text-gray-600 transition-colors mb-8 inline-block"
					>
						← Back
					</Link>
					<h1 className="text-5xl font-light mb-2 tracking-tight">{title}</h1>
					<div className="w-12 h-px bg-gray-200 mt-4" />
				</div>

				{/* Categories */}
				<div className="space-y-12">
					{Object.entries(categories).map(([cat, items]: any) => (
						<section key={cat}>
							<h2 className="text-lg font-medium mb-4 text-gray-900">{cat}</h2>
							<div className="space-y-3">
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
						</section>
					))}
				</div>
			</div>
		</main>
	);
}
