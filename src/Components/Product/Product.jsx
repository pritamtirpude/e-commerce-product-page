import { ProductImages } from "..";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Fragment } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { AnimatePresence, motion } from "framer-motion";
import { countAnim } from "../../utils/animation";
import { quantityCount } from "../../utils/counter.util";

const Product = () => {
  const matches = useMediaQuery("(max-width: 768px)");

  const { addItemToCart, removeItemFromCart, cartItems } =
    useContext(CartContext);

  const product = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    price: 125,
  };

  const count = quantityCount(cartItems);

  return (
    <Fragment>
      <div
        className={` ${
          matches ? "absolute top-16 w-full left-0" : ""
        } flex md:flex-col items-center gap-20 md:gap-5 md:max-w-none max-w-5xl mx-auto md:mx-0`}
      >
        <ProductImages />

        <div className="p-4 ">
          <span className="uppercase font-bold tracking-widest text-sm text-primary-orange">
            sneaker company
          </span>

          <h1 className="text-neutral-very-dark-blue font-bold text-[44px] md:text-[28px] leading-[40px] md:leading-8 max-w-[400px] mt-6">
            Fall Limited Edition Sneakers
          </h1>

          <p className="mt-8 text-neutral-dark-grayish-blue max-w-[420px]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="mt-6 md:flex items-center justify-between">
            <div className="flex gap-4">
              <h2 className="text-neutral-very-dark-blue font-bold text-3xl md:text-[28px]">
                $125.00
              </h2>

              <div className="bg-primary-pale-orange rounded-md flex justify-center items-center px-4">
                <span className="text-primary-orange text-sm font-bold">
                  50%
                </span>
              </div>
            </div>

            <h3 className="text-neutral-grayish-blue mt-3 md:mt-0 font-bold line-through text-base">
              $250.00
            </h3>
          </div>

          <div className="mt-6 md:flex-col flex items-center gap-2">
            <div className="flex items-center gap-4 md:w-full justify-between bg-neutral-light-grayish-blue rounded-md p-3 w-[120px] overflow-hidden">
              <Minus
                onClick={() => removeItemFromCart(product)}
                size={20}
                className="text-primary-orange cursor-pointer"
              />
              <AnimatePresence mode="wait" initial={false}>
                {count >= 0 && (
                  <motion.span
                    key={count}
                    variants={countAnim}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-neutral-very-dark-blue font-bold inline-block"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>

              <Plus
                onClick={() => addItemToCart(product)}
                size={20}
                className="text-primary-orange cursor-pointer"
              />
            </div>

            <button
              onClick={() => {
                if (cartItems.length === 0) {
                  addItemToCart(product);
                } else {
                  return;
                }
              }}
              type="button"
              className="flex flex-1 items-center justify-center gap-2 text-white-color font-bold bg-primary-orange p-3 w-full rounded-lg text-white cursor-pointer hover:opacity-70 decoration-0"
            >
              <ShoppingCart size={20} className="text-white-color" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
