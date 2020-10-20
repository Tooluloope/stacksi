import React from "react";
import "./App.css";
import { Form } from "./components/form";

function App() {
	return (
		<div className="min-h-screen w-screen flex justify-center items-center">
			<div className="box1 h-screen sm:flex justify-end items-center hidden ">
				<div className="box-gradient flex justify-between items-center px-5">
					<div className="text-white max-w w-full mx-auto">
						<p className=" text-xl line-big mb-4">
							Here’s some amazing copy. Doesn’t this copy just make you excited?
						</p>

						<p className="text-base line-small mb-8">
							Wow, you really built this form in 2-3 hours? You’re awesome.{" "}
						</p>

						<p className="mb-4 flex items-center">
							<span className=" mr-2">
								<svg
									className="inline"
									width="20"
									height="20"
									viewBox="0 0 20 20"
								>
									<g
										id="Group_1"
										data-name="Group 1"
										transform="translate(-499 -380)"
									>
										<circle
											id="Ellipse_1"
											data-name="Ellipse 1"
											cx="10"
											cy="10"
											r="10"
											transform="translate(499 380)"
											fill="#fff"
										/>
										<path
											id="Polygon_1"
											data-name="Polygon 1"
											d="M6,0l6,10H0Z"
											transform="translate(515 384) rotate(90)"
											fill="#006df3"
										/>
									</g>
								</svg>
							</span>
							<span className="text-xs">Write Code</span>
						</p>

						<p className="mb-4 flex items-center">
							<span className=" text-sm mr-2 h-5 w-5 inline-flex justify-center items-center text-center rounded-full border-white border">
								2
							</span>
							<span className="text-xs">Fix Bugs</span>
						</p>

						<p className=" flex items-center">
							<span className=" text-sm mr-2 h-5 w-5 inline-flex justify-center items-center text-center rounded-full border-white border">
								3
							</span>
							<span className="text-xs">Profit</span>
						</p>
					</div>
				</div>
			</div>
			<div className="box2 h-screen flex justify-start items-center w-full">
				<div className="box-white flex justify-between items-center px-5">
					<Form />
				</div>
			</div>
		</div>
	);
}

export default App;
