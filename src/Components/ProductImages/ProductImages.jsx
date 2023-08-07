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
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LightBox } from "..";
import { fadeAnimation } from "../../utils/animation";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductImages = () => {
  const [isProduct, setIsProduct] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const matches = useMediaQuery("(max-width: 768px)");

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
    setIsProduct((prevState) =>
      prevState + 1 === productImages.length ? 0 : prevState + 1
    );
    // setDirection("right");
  };

  const handlePrevious = () => {
    setIsProduct((prevState) =>
      prevState - 1 < 0 ? productImages.length - 1 : prevState - 1
    );
    // setDirection("left");
  };

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isProduct}
          variants={fadeAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          className={`overflow-hidden ${
            matches ? "rounded-none" : "rounded-xl"
          }  relative`}
          onClick={() =>
            setIsClicked((prevState) => (matches ? false : !prevState))
          }
        >
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={productImages[isProduct]}
            className="w-full h-[445px] object-cover  cursor-pointer"
            alt="shoe"
          />

          {matches && (
            <div>
              <div
                className={`bg-white-color w-14 h-14 flex justify-center items-center p-3 rounded-full absolute top-2/4 ${
                  matches ? "left-3" : "left-0"
                } z-40 cursor-pointer`}
                onClick={handlePrevious}
              >
                <ChevronLeft size={30} className="hover:text-primary-orange" />
              </div>
              <div
                className={`bg-white-color w-14 h-14 flex justify-center items-center p-3 rounded-full absolute top-2/4 ${
                  matches ? "right-3" : "right-0"
                }  cursor-pointer`}
                onClick={handleNext}
              >
                <ChevronRight size={30} className="hover:text-primary-orange" />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {!matches && (
        <div className="flex items-center justify-between gap-5 mt-5">
          {thumbsArray.map((thumb, index) => (
            <div
              key={index}
              onClick={() => setIsProduct(index)}
              className={`${
                isProduct === index ? "ring-2 ring-primary-orange" : ""
              } overflow-hidden shadow-lg rounded-xl hover:opacity-70`}
            >
              <img
                src={thumb}
                className={`w-full h-[88px] object-cover cursor-pointer ${
                  isProduct === index ? "opacity-70" : ""
                }`}
                alt="thumbnail"
              />
            </div>
          ))}
        </div>
      )}
      <AnimatePresence initial={false} mode="wait">
        {isClicked && (
          <LightBox
            key="lightbox"
            setIsClicked={setIsClicked}
            isProduct={isProduct}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductImages;
