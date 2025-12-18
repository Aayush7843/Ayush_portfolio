import { FaEnvelope } from "react-icons/fa6";
import { FaTelegram, FaNodeJs } from "react-icons/fa6";
import { FaLinkedin, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import Profile from "../assets/ayush.png";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

function Home() {
  return (
    <>
      <motion.div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* LEFT SIDE */}
          <motion.div
            className="md:w-1/2 space-y-6 order-2 md:order-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { delayChildren: 0.2, staggerChildren: 0.15 },
              },
            }}
          >
            <motion.span
              variants={fadeUp}
              className="text-base md:text-lg font-semibold tracking-[0.25em] text-blue-600 uppercase"
            >
              Welcome to My Portfolio
            </motion.span>

            {/* Animated heading letters */}
            <motion.div
              className="text-3xl md:text-5xl font-extrabold flex flex-wrap items-center gap-2"
              variants={fadeUp}
            >
              {`Hello, I'm a `.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-slate-900"
                >
                  {char}
                </motion.span>
              ))}

              <ReactTyped
                className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent font-extrabold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-sm md:text-base text-slate-600 text-justify leading-relaxed"
            >
              Developed strong organizational and communication skills while
              working in collaborative, fast-paced environments. Demonstrated
              ability to manage multiple tasks, meet deadlines, and contribute
              effectively to team goals. Currently seeking to transition into a
              new field, leveraging transferable skills to drive success.
            </motion.p>

            {/* SOCIAL + TECH SECTION */}
            <motion.div
              className="flex flex-col md:flex-row justify-between items-center gap-6"
              variants={fadeUp}
            >
              {/* SOCIAL */}
              <div className="space-y-3">
                <motion.h1
                  className="font-semibold text-center text-slate-900"
                  whileHover={{ scale: 1.05 }}
                >
                  Available on
                </motion.h1>

                <div className="flex space-x-6">
                  {[FaLinkedin, FaTelegram, FaEnvelope].map((Icon, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: i * 0.2,
                      }}
                      whileHover={{ scale: 1.3 }}
                    >
                      <Icon className="text-3xl text-slate-700 hover:text-blue-600 cursor-pointer transition-all" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <motion.h1
                  className="font-semibold text-center text-slate-900"
                  whileHover={{ scale: 1.05 }}
                >
                  Currently working on
                </motion.h1>

                <div className="flex space-x-6">
                  {[SiMongodb, SiExpress, FaReact, FaNodeJs].map((Icon, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.3, rotate: 10 }}
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.5,
                        delay: i * 0.3,
                      }}
                      className="border border-slate-200 bg-white p-2 rounded-full shadow-md"
                    >
                      <Icon className="text-3xl text-slate-700" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            className="md:w-1/2 flex justify-center order-1 md:order-2"
            initial={{ opacity: 0, x: 70 }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: [0, 2, -2, 0],
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={Profile}
              alt="profile"
              className="w-[260px] h-[260px] md:w-[400px] md:h-[400px] rounded-full border-4 border-white shadow-2xl object-cover"
              animate={{ boxShadow: ["0 0 20px #90cdf4", "0 0 40px #63b3ed", "0 0 20px #90cdf4"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />

          </motion.div>
        </div>
      </motion.div>

      <motion.hr
        className="border-t border-slate-300"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
      />
    </>
  );
}

export default Home;
