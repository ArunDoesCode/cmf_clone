import React, { useState } from "react";
import orange_buds from "../assets/tws_buds_orange.png";
import black_buds from "../assets/tws_buds_black.png";
import white_buds from "../assets/tws_buds_white.png";

const imageData = [
  { src: orange_buds, color: "bg-orange" },
  { src: black_buds, color: "bg-black" },
  { src: white_buds, color: "bg-white" },
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(imageData[0].src);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const changeImage = (image, index) => {
    setCurrentImage(image);
    setSelectedIndex(index);
  };

  return (
    <div className="bg-half_white flex justify-between">
      <div className="relative w-1/3 flex justify-center items-center">
        <h3 className=" font-ndot55 text-2xl uppercase font-dark_grey">
          BEST-IN-
          <br />
          CLASS FOR
          <br />
          ANC
        </h3>

        <ul className="pl-8 absolute uppercase text-sm text-dark_grey pt-56 font-letteraMonoLL flex gap-9">
					<li>C: orange</li>
					<li>M: pc+abs+metal</li>
					<li>F: moulded</li>
				</ul>
      </div>

      <div className="flex flex-col items-center w-1/3">
        <img src={currentImage} alt="Earbuds" className="h-64 w-64" />
        <div className="flex mb-10 gap-2">
          {imageData.map((image, index) => (
            <button
              key={index}
              className={`w-8 h-8 rounded-full ${image.color}  ${
                selectedIndex === index
                  ? image.color === "bg-orange"
                    ? "border-2 border-white"
                    : "border-2 border-red-500"
                  : ""
              }`}
              onClick={() => changeImage(image.src)}
            ></button>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-1/3 justify-center">
        <h1 class="flex text-4xl text-dark_grey">
          BUDS
          <p className="text-orange p-1 font-letteraMonoLL text-xl pl-2">
            {" "}
            &#x20b9;2,499
          </p>
        </h1>

        <p class="pt-4 font-letteraMonoLL text base font-normal">
          42 dB ACTIVE NOISE CANCELLATION
          <br />
          HIGH-DEFINITION SOUND POWERED BY DIRAC
          <br />
          12.4 MM BIO-FIBRE DRIVER WITH ULTRA BASS 2.0
          <br />8 HOURS OF NON-STOP MUSIC
        </p>
      </div>

      <div></div>
    </div>
  );
};

export default Home;
