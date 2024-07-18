import orange_buds from "../assets/tws_buds_orange.png";
import black_buds from "../assets/tws_buds_black.png";
import white_buds from "../assets/tws_buds_white.png";
import { CiPlay1 } from "react-icons/ci";
import { useState } from "react";

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
    <div className="relative bg-half_white flex flex-col">
      <div className="  flex justify-between">
        <div className="home-container-1">
          <h3 className="text-2xl font-dark_grey">
            BEST-IN-
            <br />
            CLASS FOR
            <br />
            ANC
          </h3>
        </div>

        <div className="home-container-2">
          <img
            src={currentImage}
            alt="Earbuds"
            className="object-scale-down h-96"
          />
        </div>

        <div className="home-container-3">
          <div className="flex items-center">
            <h1 className="home-container-3-heading-1"> BUDS </h1>
            <h3 className="home-container-3-heading-2">&#x20b9;2,499</h3>
          </div>
          <p className="home-container-3-para">
            42 dB ACTIVE NOISE CANCELLATION <br />
            HIGH-DEFINITION SOUND POWERED BY DIRAC
            <br />
            12.4 MM BIO-FIBRE DRIVER WITH ULTRA BASS 2.0
            <br />8 HOURS OF NON-STOP MUSIC
          </p>
        </div>
      </div>

      <div className="bottom flex justify-evenly">
        <ul className="text-sm text-dark_grey font-letteraMonoLL flex gap-9">
          <li>C: ORANGE</li>
          <li>M: PC+ABS+METAL</li>
          <li>F: MOULDED</li>
        </ul>

        <div className="flex gap-2">
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
              onClick={() => changeImage(image.src, index)}
            ></button>
          ))}
        </div>

       <a href='https://in.cmf.tech/pages/buds' className="text-orange text-4xl"><CiPlay1 /></a>
      </div>
    </div>
  );
};

export default Home;
