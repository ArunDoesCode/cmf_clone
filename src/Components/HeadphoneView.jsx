import React, { useState } from "react";
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
    <div class='bg-half_white w-full'
    style={{
      height:"110vh",
    }}>
      
    <div className="flex flex-col items-center"
    style={{
      height: "200px",
      width:"full",
    }}>
      <img src={currentImage} alt="Earbuds" className="object-scale-down" 
      style={{height:"600px", width:"600px"}}/>
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
    <div class='pl-14 translate-y-64'>
      <h1 class='font-letteraMonoLL text-dark_grey uppercase text-5xl font-thin'>Easy on the ear</h1>
      <p class='py-6 leading-5 text-base font-franklinGothicBook'>Designed to fit your ear. Featherlight comfort delivered in a <br/>bold bud shape.</p>
      <p class='uppercase text-xs text-dark_grey'>{imageData[selectedIndex].text}</p>
    </div>
   
    </div>
  );
};

export default HeadphoneView;
