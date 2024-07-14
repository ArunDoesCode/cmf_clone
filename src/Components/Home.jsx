import React, { useState } from 'react'
import orange_buds from "../assets/tws_buds_orange.png";
import black_buds from "../assets/tws_buds_black.png";
import white_buds from "../assets/tws_buds_white.png";


const imageData = [
	{ src: orange_buds, color: "bg-orange" },
	{ src: black_buds, color: "bg-black" },
	{ src: white_buds, color: "bg-white border border-orange" },
];


const Home = () => {
  const [currentImage, setCurrentImage] = useState(imageData[0].src);

  const changeImage = (image) => {setCurrentImage(image)};

  return (
		<div className="bg-half_white flex justify-between">
			<div className="w-1/3 flex justify-center items-center">
				<h3 className='text-2xl uppercase'>BEST-IN-<br/>CLASS FOR<br/>ANC</h3>


				{/* <ul className="text-sm flex mb-10 gap-2">
					<li>C: orange</li>
					<li>M: pc+abs+metal</li>
					<li>F: moulded</li>
				</ul> */}
			</div>

			<div className="flex flex-col items-center w-1/3">
				<img src={currentImage} alt="Earbuds" className="h-64 w-64" />
				<div className="flex mb-10 gap-2">
					{imageData.map((image, index) => (
						<button
							key={index}
							className={`w-8 h-8 rounded-full ${image.color}`}
							onClick={() => changeImage(image.src)}
						></button>
					))}
				</div>
			</div>

			<div className="flex flex-col w-1/3 justify-center">
				<h1>
					BUDS<sup className="text-orange p-1"> &#x20b9;2,499</sup>
				</h1>

				<p>
					42 dB ACTIVE NOISE CANCELLATION
					<br />
					HIGH-DEFINITION SOUND POWERED BY DIRAC
					<br />
					12.4 MM BIO-FIBRE DRIVER WITH ULTRA BASS 2.0
					<br />8 HOURS OF NON-STOP MUSIC
				</p>
			</div>

      <div>

      </div>
		</div>
	);
}

export default Home