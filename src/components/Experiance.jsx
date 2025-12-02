import { motion } from "framer-motion";

function Experiance() {
  const cardItem = [
    { id: 1, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML" },
    { id: 2, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS" },
    { id: 3, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
    { id: 4, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "ReactJS" },
    { id: 5, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", name: "Bootstrap" },
    { id: 6, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "NodeJS" },
    { id: 7, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", name: "ExpressJS" },
    { id: 8, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", name: "PHP" },
    { id: 9, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
    { id: 10, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL" },
    { id: 11, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" },
    { id: 12, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", name: "GitHub" },
    { id: 13, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", name: "Postman" },
    { id: 14, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", name: "VS Code" },
    { id: 15, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", name: "C Language" },
    { id: 16, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", name: "Flutter (Beginner)" },
  ];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.35, type: "tween" } },
  };

  return (
    <section name="Experience" className="relative overflow-hidden bg-white py-20">

      {/* Soft Glow Background Instead of Floating */}
      <motion.div
        className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", type: "tween" }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-40"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", type: "tween" }}
      />

      <motion.div
        className="max-w-screen-2xl mx-auto px-4 md:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        {/* heading */}
        <motion.div variants={item} className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Skills
          </h1>
          <p className="text-slate-600 mt-2">
            Technologies and tools I use for development
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-7"
          variants={container}
        >
          {cardItem.map(({ id, logo, name }) => (
            <motion.div
              key={id}
              variants={item}
              whileHover={{ scale: 1.12, transition: { duration: 0.25, type: "tween" } }}
              className="flex flex-col items-center gap-3 cursor-pointer"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white shadow-md border border-gray-200 flex items-center justify-center">
                <img src={logo} alt={name} className="w-12 h-12 md:w-14 md:h-14" />
              </div>
              <p className="text-sm md:text-base font-semibold text-slate-800 text-center">
                {name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Experiance;
