import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cart.context";
import { productOneThumb } from "../../assets";
import { Trash2 } from "lucide-react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { cartAnim } from "../../utils/animation";
import { motion } from "framer-motion";

const Cart = () => {
  const {
    cartItems,
    cartCount,
    cartTotal,
    removeItemFromCart,
    isCartOpen,
    setIsCartOpen,
  } = useContext(CartContext);

  const matches = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleCardDialog = () => {
      if (isCartOpen) {
        setIsCartOpen(false);
      }
    };

    window.addEventListener("mouseleave", handleCardDialog);

    return () => {
      window.removeEventListener("mouseleave", handleCardDialog);
    };
  });

  return (
    <motion.div
      variants={cartAnim}
      key="cart"
      initial="hidden"
      animate="show"
      exit="exit"
      className={`bg-white-color w-[360px] h-[256px] shadow-2xl absolute ${
        matches
          ? "top-20 left-3 w-[93%] transform  -translate-x-1/2"
          : "top-16 right-10"
      }  rounded-md`}
      onMouseLeave={() => {
        setIsCartOpen(false);
      }}
    >
      <div className="p-5 pb-6">
        <h4 className="font-bold">Cart</h4>
      </div>
      <hr className="text-neutral-grayish-blue" />

      <div
        className="p-5 w-full h-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {cartItems.length === 0 && (
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h4 className="text-neutral-grayish-blue font-bold">
              Your cart is empty.
            </h4>
          </div>
        )}
        {cartItems.length > 0 && (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src={productOneThumb}
                      alt={item.name}
                      className="w-[50px] h-[50px] rounded-md"
                    />
                  </div>
                  <div>
                    <h6 className="text-neutral-dark-grayish-blue font-thin truncate">
                      {item.name}
                    </h6>
                    <span className="text-neutral-grayish-blue inline-block">
                      ${item.price} x {cartCount}
                      <span className="inline-block font-bold text-black-color ml-2">
                        ${cartTotal}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="text-neutral-dark-grayish-blue">
                  <Trash2
                    onClick={() => removeItemFromCart(item)}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              className="rounded-md bg-primary-orange text-white-color font-bold w-full p-4 mt-6 focus:outline-none"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;
