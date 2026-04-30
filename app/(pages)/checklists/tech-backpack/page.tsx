import ChecklistPages from "@/app/components/ChecklistPage";
import Link from "next/link";

const categories = {
	"Core Devices": [
		"Laptop (13-16 inch)",
		"Laptop charger",
		"Tablet (iPad/Samsung)",
		"Tablet charger",
		"Smartphone",
		"Phone charger (2m+ cable)",
		"Portable power bank (20,000mAh+)",
		"Power bank charging cable",
	],
	"Audio & Video": [
		"Noise-cancelling headphones",
		"Headphone charging cable",
		"Earbuds (backup)",
		"External microphone",
		"Webcam (if laptop camera is poor)",
		"Action camera (GoPro etc.)",
		"Camera charger/batteries",
	],
	"Cables & Adapters": [
		"USB-C to USB-C cable",
		"USB-A to USB-C cable",
		"Lightning cable (if iPhone)",
		"HDMI cable",
		"USB hub/dongle",
		"SD card reader",
		"Ethernet adapter",
		"DisplayPort adapter (if needed)",
		"Extra charging bricks (65W+)",
	],
	Storage: [
		"External SSD (1TB+)",
		"External hard drive",
		"USB flash drive (64GB+)",
		"SD cards (64GB+)",
		"Micro SD cards",
		"Card holder/case",
	],
	"Power & Connectivity": [
		"International travel adapter",
		"Power strip (with USB ports)",
		"Car charger",
		"Portable Wi-Fi hotspot",
		"SIM ejector tool",
		"Extra batteries (for camera/mouse)",
	],
	Accessories: [
		"Wireless mouse",
		"Mechanical keyboard (optional)",
		"Laptop stand (portable)",
		"Phone stand/grip",
		"Screen cleaning cloth",
		"Screen protector (spare)",
		"Keyboard cover",
		"Cable organizers (velcro straps)",
		"Cable pouch",
		"Laptop sleeve",
	],
	"Productivity Tools": [
		"Notebook & pen",
		"Sticky notes",
		"Highlighter markers",
		"Whiteboard marker (for glass desks)",
		"Business cards",
		"Pocket calculator",
		"USB fingerprint scanner",
	],
	"Backpack Organization": [
		"Tech pouch (for cables)",
		"Hard drive case",
		"Laptop compartment",
		"Quick-access pocket items",
		"Water bottle pocket",
		"Key clip/lanyard",
		"RFID blocking sleeve",
		"Backpack rain cover",
	],
};

export default function TechBackpackPage() {
	return <ChecklistPages title="Tech Backpack" categories={categories} />;
}
