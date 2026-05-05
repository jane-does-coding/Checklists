"use client";

import ChecklistPages from "@/app/components/ChecklistPage";
import { getChecklistById } from "@/app/lib/checklists";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CustomChecklistPage() {
	const params = useParams();
	const [checklist, setChecklist] = useState<any>(null);

	useEffect(() => {
		setChecklist(getChecklistById(params.id as string));
	}, [params.id]);

	if (!checklist) return null;

	return (
		<ChecklistPages title={checklist.title} categories={checklist.categories} />
	);
}
