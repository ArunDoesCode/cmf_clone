import React from "react";
import logo from "../assets/logo.svg"; // Update with your actual path
import black_left_earbud from "../assets/black_left_earbud.png";
import bluetooth_black from "../assets/bluetooth_black.png";
import orange_buds_case from "../assets/orange_buds_case.png";
import dirac from "../assets/dirac.png";
import black_buds_only from "../assets/black_buds_only.png";
import phone_bottom from "../assets/phone_bottom.png";
import black_buds_rev from "../assets/black_buds_rev.png";
import game_mode from "../assets/game_mode.png";
import bud_detail from "../assets/bud_detail.png";
import girl from "../assets/girl.png";


const gridItems = [
	{
		title: "42dB",
		subtitle: "Active Noise Cancellation with Transparency Mode",
		image: black_left_earbud,
		rowSpan: "row-span-2",
		colSpan: "col-span-2",
		bgColor: "bg-gray-100",
	},
	{
		title: "BLUETOOTH 5.3 AND FAST PAIR",
		rowSpan: "row-span-1",
		colSpan: "col-span-1",
		bgColor: "bg-gray-300",
	},
	{
		title: "HIGH-DEFINITION AUDIO TUNED BY DIRAC",
		rowSpan: "row-span-1",
		colSpan: "col-span-1",
		bgColor: "bg-gray-100",
	},
	{
		title: "35.5 HOURS",
		subtitle: "Total playback",
		additionalInfo: "6.5 HOURS With 10 minutes of charge",
		rowSpan: "row-span-1",
		colSpan: "col-span-1",
		bgColor: "bg-gray-300",
	},
	// Add the rest of the grid items following the same structure
];


const Grid1 = () => {
  return (
		<div className="grid grid-cols-4 grid-rows-4 gap-4 p-4">
			{gridItems.map((item, index) => (
				<div
					key={index}
					className={`${item.colSpan} ${item.rowSpan} ${item.bgColor} rounded-lg p-4`}
				>
					<h2 className="text-2xl font-bold">{item.title}</h2>
					{item.subtitle && <p className="mt-2">{item.subtitle}</p>}
					{item.image && (
						<img src={item.image} alt="Earbuds" className="mt-4 h-24 w-24 mx-auto" />
					)}
					{item.additionalInfo && <p className="mt-2">{item.additionalInfo}</p>}
				</div>
			))}
		</div>
	);
}

export default Grid1;
