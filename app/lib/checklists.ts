export type Checklist = {
	id: string;
	title: string;
	categories: Record<string, string[]>;
};

const STORAGE_KEY = "customChecklists";

export function getChecklists(): Checklist[] {
	if (typeof window === "undefined") return [];

	const data = localStorage.getItem(STORAGE_KEY);
	return data ? JSON.parse(data) : [];
}

export function saveChecklist(checklist: Checklist) {
	const existing = getChecklists();

	localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, checklist]));
}

export function getChecklistById(id: string) {
	return getChecklists().find((c) => c.id === id);
}
