import React from "react";
import { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

function Carousel() {
  const [imageNumber, setImageNumber] = useState(1);
  return (
    <div className="w-screen h-screen flex justify-center items-center outline-none">
      <button
        className="w-[10vw] h-full flex justify-center items-center"
        onClick={() => {
          let newImageNumber = imageNumber - 1;
          if (newImageNumber < 1) {
            newImageNumber += 5;
          }
          setImageNumber(newImageNumber);
        }}
      >
        <IoIosArrowDropleftCircle className="text-[3rem]" />
      </button>
      <img
        src={"/assets/" + imageNumber.toString() + ".jpg"}
        className="aspect-[1.777] w-[80vw] rounded-[2rem]"
      />
      <button
        className="w-[10vw] h-full flex justify-center items-center outline-none"
        onClick={() => {
          let newImageNumber = imageNumber + 1;
          if (newImageNumber > 5) {
            newImageNumber -= 5;
          }
          setImageNumber(newImageNumber);
        }}
      >
        <IoIosArrowDroprightCircle className="text-[3rem]" />
      </button>
      <div className="absolute p-[0.5rem] rounded-full w-[3rem] h-[3rem] flex justify-center items-center bottom-[10vh] bg-black text-white">
        {imageNumber}
      </div>
    </div>
  );
}

export default Carousel;
