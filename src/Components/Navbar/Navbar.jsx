import Logo from "../../assets/logo.svg";
import Avatar from "../../assets/image-avatar.png";
import { ShoppingCart } from "lucide-react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Squash as Hamburger } from "hamburger-react";
import { useState, useContext } from "react";
import { Cart, Sidebar } from "../../Components";
import { CartContext } from "../../context/cart.context";
import { quantityCount } from "../../utils/counter.util";
import { motion, AnimatePresence } from "framer-motion";
import { countAnim, fadeAnimation } from "../../utils/animation";

const NavLinks = [
  {
    label: "Collection",
  },
  {
    label: "Men",
  },
  {
    label: "Women",
  },
  {
    label: "About",
  },
  {
    label: "Contact",
  },
];

const Navbar = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);

  const count = quantityCount(cartItems);

  return (
    <nav className={`${matches ? "fixed z-50 bg-white-color w-full" : ""}`}>
      <div
        className={`flex justify-between items-center py-3 ${
          matches ? "px-2" : ""
        }`}
      >
        <div className={`flex items-center ${matches ? "gap-3" : "gap-10"}`}>
          <div
            onClick={() => setIsSidebarOpen((prevState) => !prevState)}
            className="z-50"
          >
            {matches && <Hamburger toggle={setIsOpen} toggled={isOpen} />}
          </div>
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          {!matches && (
            <ul className="flex items-center gap-4">
              {NavLinks.map((link) => (
                <li
                  className="text-neutral-dark-grayish-blue cursor-pointer transition-all hover:text-neutral-very-dark-blue relative"
                  key={link.label}
                  onClick={() => setActive(link.label)}
                >
                  {link.label}

                  <motion.div
                    initial={{ width: "0%" }}
                    transition={{ duration: 0.5 }}
                    animate={{ width: active === link.label ? "100%" : "0%" }}
                    className="absolute top-[3.9rem] left-0 h-1 bg-primary-orange"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex items-center gap-5">
          <div className="relative">
            <ShoppingCart
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="cursor-pointer"
            />

            <AnimatePresence mode="wait" initial={false}>
              {count > 0 && (
                <motion.div
                  variants={fadeAnimation}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="absolute w-5 h-5 -top-3  left-2 rounded-full flex items-center justify-center bg-primary-orange"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      variants={countAnim}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      key={count}
                      className="inline-block text-white-color text-[0.6rem] font-bold"
                    >
                      {count}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div>
            <img
              src={Avatar}
              alt="Avatar"
              className="w-[50px] h-[50px] cursor-pointer hover:border-solid hover:border-2 hover:border-primary-orange hover:rounded-full"
            />
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {isCartOpen && <Cart />}
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        {isSidebarOpen && (
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </AnimatePresence>

      {!matches && <hr className="mt-4 text-neutral-grayish-blue" />}
    </nav>
  );
};

export default Navbar;
