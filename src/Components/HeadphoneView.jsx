import { useState } from "react";
import orange_buds_only from "../assets/orange_buds_only.png";
import black_buds_only from "../assets/black_buds_only.png";
import white_buds_only from "../assets/white_buds_only.png";

const imageData = [
  { src: orange_buds_only, color: "bg-orange", text: "orange" },
  { src: black_buds_only, color: "bg-black", text: "dark grey" },
  { src: white_buds_only, color: "bg-white", text: "light grey" },
];

const HeadphoneView = () => {
  const [currentImage, setCurrentImage] = useState(imageData[0].src);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const changeImage = (image, index) => {
    setCurrentImage(image);
    setSelectedIndex(index);
  };

  return (
    <div className='relative headphone-container flex'>
      
    <div className="absolute headphone-container-view">
      <img src={currentImage} alt="Earbuds" className="headphone-container-img"/>
      <div className="flex mb-10 gap-2">
        {imageData.map((image, index) => (
            <button
            key={index}
            className={`w-8 h-8 rounded-full ${image.color} ${
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

    </div>

    <div className='headphone-container-content'>
      <h1 className='headphones-container-content-heading'>EASY ON THE EAR</h1>
      <p className='py-6 font-franklinGothicBook'>Designed to fit your ear. Featherlight comfort delivered in a <br/>bold bud shape.</p>
      <p className='uppercase text-xs text-dark_grey'>{imageData[selectedIndex].text}</p>
    </div>
   
    </div>
  );
};

export default HeadphoneView;
