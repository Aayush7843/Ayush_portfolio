import { motion } from "framer-motion";
import electronicshub from "../../src/assets/electrical-electronic-logo-design1.webp";
import furniture from "../../src/assets/furniture.png";
import dream from "../../src/assets/dreamxpert.png";
import JMGCPC from "../../src/assets/jmgpc.png";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: dream,
      name: "DreamXpert - Live Cricket Score Platform",
      desc: "A real-time live cricket score platform built with MERN Stack and live API integration.",
      live: "",
      video:
        "https://www.linkedin.com/posts/ayush-prajapati-040476311_mernstack-reactjs-nodejs-activity-7332335426839420929-uy3L?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE9E37ABVEMgXf3Ec2CAPlzUtZUhmNXF8sg",
    },
    {
      id: 2,
      logo: JMGCPC,
      name: "JMGCPC Portal - College Management System",
      desc: "A college management system with student records, results, admin dashboard, and department management.",
      live: "https://6839e67778f84c2b04780b33--astounding-jelly-4ee636.netlify.app/",
      video:
        "https://www.linkedin.com/posts/ayush-prajapati-040476311_mernstack-mongodb-collageportel-activity-7324661219187920896-sXR7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE9E37ABVEMgXf3Ec2CAPlzUtZUhmNXF8sg",
    },
    {
      id: 3,
      logo: electronicshub,
      name: "Electronics Hub - E-Commerce Website",
      desc: "A MERN-based e-commerce platform for electronics with products, cart, and order management.",
      live: "",
      video: "",
    },
    {
      id: 4,
      logo: furniture,
      name: "Online Furniture Shop - MERN Project",
      desc: "A furniture e-commerce site with product categories, cart, and checkout flow.",
      live: "",
      video: "",
    },
  ];

  return (
    <section name="Portfolio" className="relative overflow-hidden bg-white">
      {/* Background accents */}
      <motion.div
        className="pointer-events-none absolute -top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"
        animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-10 -left-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40"
        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16 mb-20 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {/* heading */}
        <motion.div variants={fadeUp} className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 flex items-center gap-3">
            Featured Projects
            <motion.span
              className="h-[4px] w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.7 }}
            />
          </h1>
          <p className="text-slate-600 text-sm md:text-base mt-2 max-w-xl">
            A selection of my recent MERN stack and web development projects,
            focused on performance, usability, and clean UI.
          </p>
        </motion.div>

        {/* projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardItem.map(({ id, logo, name, desc, live, video }) => (
            <motion.div
              key={id}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.01, rotate: -0.3 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="relative rounded-2xl bg-white/80 backdrop-blur border border-slate-200 shadow-sm hover:shadow-xl overflow-hidden group"
            >
              {/* gradient bar top */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

              <div className="flex flex-col sm:flex-row gap-5 p-5 items-center">
                {/* Logo */}
                <motion.div
                  className="relative"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 rounded-full bg-blue-100/60 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={logo}
                    alt={name}
                    className="relative w-24 h-24 rounded-full object-contain border border-slate-200 shadow-md"
                  />
                </motion.div>

                {/* Text */}
                <div className="flex-1 space-y-2">
                  <h2 className="font-semibold text-lg md:text-xl text-slate-900 leading-snug">
                    {name}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {video && (
                      <a
                        href={video}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs md:text-sm px-3 py-1.5 rounded-full border border-blue-500 text-blue-600 hover:bg-blue-50 transition"
                      >
                        🎥 Video
                      </a>
                    )}

                    <a
                      href={live || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center text-xs md:text-sm px-3 py-1.5 rounded-full transition ${
                        live
                          ? "bg-purple-600 text-white hover:bg-purple-700"
                          : "bg-slate-200 text-slate-500 cursor-not-allowed"
                      }`}
                    >
                      🚀 Live
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover overlay text at bottom */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 text-[11px] md:text-xs text-center py-1.5 bg-slate-900/90 text-white translate-y-full group-hover:translate-y-0 transition-transform"
              >
                {live ? "Click Live to open the deployed project" : "This project is not live yet"}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default PortFolio;
