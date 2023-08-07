import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  fadeAnimation,
  thumbVariants,
  silderVariants,
} from "../../utils/animation";

import {
  productOneImg,
  productOneThumb,
  productTwoImg,
  productTwoThumb,
  productThreeImg,
  productThreeThumb,
  productFourImg,
  productFourThumb,
} from "../../assets";

// eslint-disable-next-line react/prop-types
const LightBox = ({ setIsClicked, isProduct }) => {
  const [imgIndex, setImgIndex] = useState(isProduct);
  const [direction, setDirection] = useState("");

  const productImages = [
    productOneImg,
    productTwoImg,
    productThreeImg,
    productFourImg,
  ];

  const thumbsArray = [
    productOneThumb,
    productTwoThumb,
    productThreeThumb,
    productFourThumb,
  ];

  const handleNext = () => {
    setImgIndex((prevState) =>
      prevState + 1 === productImages.length ? 0 : prevState + 1
    );
    setDirection("right");
  };

  const handlePrevious = () => {
    setImgIndex((prevState) =>
      prevState - 1 < 0 ? productImages.length - 1 : prevState - 1
    );
    setDirection("left");
  };

  return (
    <motion.div
      variants={fadeAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="fixed w-full h-screen top-0 left-0 bg-black-color/70 flex items-center justify-center flex-col"
      onClick={() => setIsClicked((prevState) => !prevState)}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={imgIndex}
            className="overflow-hidden w-[445px] flex rounded-xl"
          >
            <motion.img
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              variants={silderVariants}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              exit="exit"
              animate="show"
              src={productImages[imgIndex]}
              alt="shoe"
              className="w-full h-[445px] object-cover cursor-pointer"
            />
          </motion.div>
        </AnimatePresence>

        <div
          className="bg-white-color w-14 h-14 flex justify-center items-center p-3 rounded-full absolute top-2/4 -left-7 z-40 cursor-pointer"
          onClick={handlePrevious}
        >
          <ChevronLeft size={30} className="hover:text-primary-orange" />
        </div>
        <div
          className="bg-white-color w-14 h-14 flex justify-center items-center p-3 rounded-full absolute top-2/4 -right-7 cursor-pointer"
          onClick={handleNext}
        >
          <ChevronRight size={30} className="hover:text-primary-orange" />
        </div>
        <div
          className="absolute -top-12 right-0"
          onClick={() => setIsClicked((prevState) => !prevState)}
        >
          <X
            size={30}
            className="text-white-color cursor-pointer hover:text-primary-orange"
          />
        </div>
      </div>

      <div
        className="flex items-center justify-between gap-5 mt-5"
        onClick={(e) => e.stopPropagation()}
      >
        {thumbsArray.map((thumb, index) => (
          <div
            key={index}
            onClick={() => setImgIndex(index)}
            className={`${
              imgIndex === index ? "ring-2 ring-primary-orange" : ""
            } overflow-hidden shadow-lg rounded-xl relative z-50 cursor-pointer`}
          >
            <img
              src={thumb}
              className={`w-full h-[88px] object-cover cursor-pointer`}
              alt="thumbnail"
            />

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                variants={thumbVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                key={imgIndex}
                className={`absolute top-0 left-0 w-0 z-10 h-full ${
                  imgIndex === index ? "bg-primary-pale-orange blur-xl" : ""
                }`}
              ></motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default LightBox;
