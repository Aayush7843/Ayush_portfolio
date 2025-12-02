import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Profile from "../assets/profile.png";



function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, label: "Home", to: "Home" },
    { id: 2, label: "About", to: "About" },
    { id: 3, label: "Projects", to: "Portfolio" },
    { id: 4, label: "Skills", to: "Experience" },
    { id: 5, label: "Contact", to: "Contact" },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 shadow-md border-b border-slate-200"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-screen-2xl container mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <motion.img
              src={Profile}
              className="w-11 h-11 rounded-full object-cover border shadow"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
            <div>
              <h1 className="font-semibold text-lg text-slate-900 cursor-pointer">Ayush<span className="text-blue-500">.</span></h1>
              <p className="text-xs text-slate-500 -mt-1">Web Developer</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map(({ id, label, to }) => (
              <li key={id} className="cursor-pointer font-medium">
                <Link
                  to={to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-66}
                  activeClass="text-blue-600"
                  className="relative px-1 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {label}
                  {/* Active bottom indicator */}
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] scale-x-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-transform duration-300 origin-left active:scale-x-100 group-hover:scale-x-100"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Icon */}
          <div onClick={() => setMenu(!menu)} className="md:hidden text-slate-900 cursor-pointer">
            {menu ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            className="fixed inset-0 bg-white/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8 z-40"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35 }}
          >
            {navItems.map(({ id, label, to }) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-xl font-semibold text-slate-800 cursor-pointer"
              >
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-65}
                  spy={true}
                  onClick={() => setMenu(false)}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
