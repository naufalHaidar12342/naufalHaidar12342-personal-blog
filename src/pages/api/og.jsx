import { NextRequest } from "next/server";
const { ImageResponse } = require("@vercel/og");

export const config = {
	runtime: "edge",
};

export default function handler(request) {
	try {
		const { searchParams } = new URL(request.url);

		const hasTitle = searchParams.has("pageTitle");
		const title = hasTitle
			? searchParams.get("pageTitle")?.slice(0, 100)
			: "naufalHaidar12342";

		return new ImageResponse(
			(
				<div
					style={{
						backgroundColor: "black",
						backgroundSize: "150px 150px",
						height: "100%",
						width: "100%",
						display: "flex",
						textAlign: "center",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
						flexWrap: "nowrap",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							justifyItems: "center",
						}}
					>
						<img
							src="data:image/svg+xml,%3Csvg width='116' height='100' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M57.5 0L115 100H0L57.5 0z' /%3E%3C/svg%3E"
							alt="Vercel logo"
							style={{ margin: "0 30px" }}
							width={232}
							height={200}
						/>
					</div>
					<div
						style={{
							fontSize: 60,
							fontStyle: "normal",
							letterSpacing: "-0.025em",
							color: "white",
							marginTop: 30,
							padding: "0 120px",
							lineHeight: 1.4,
							whiteSpace: "pre-wrap",
						}}
					>
						{title}
					</div>
				</div>
			),
			{ width: 1200, height: 630 }
		);
	} catch (error) {
		console.error(`error open graph image generation= ${error.message}`);
		console.log(`error open graph image generation= ${error.message}`);
		return new Response("Failed to generate the image for link preview", {
			status: 500,
		});
	}
}