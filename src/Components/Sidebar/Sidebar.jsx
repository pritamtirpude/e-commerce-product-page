/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeAnimation, sidebarAnim } from "../../utils/animation";

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

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, setIsOpen }) => {
  return (
    <motion.div
      key="sidebar"
      variants={fadeAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="fixed top-0 left-0 w-full h-screen bg-black-color/70 "
      onClick={() => {
        setIsSidebarOpen(false);
        setIsOpen(false);
      }}
    >
      <motion.div
        key={isSidebarOpen}
        initial="hidden"
        animate="show"
        exit="exit"
        variants={sidebarAnim}
        className="bg-white-color h-full w-10/12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-28">
          <motion.ul className="flex flex-col ml-5 gap-4 w-full">
            {NavLinks.map((link, index) => (
              <motion.li
                initial={{ x: "-100%", opacity: 0 }}
                animate={{
                  x: "0%",
                  opacity: 1,
                  transition: {
                    duration: 0.2,
                    delay: `0.${index}`,
                  },
                }}
                className="text-black-color font-bold text-lg cursor-pointer transition-all hover:text-neutral-very-dark-blue relative overflow-hidden"
                key={link.label}
                onClick={() => {
                  setIsSidebarOpen(false);
                  setIsOpen(false);
                }}
              >
                {link.label}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
