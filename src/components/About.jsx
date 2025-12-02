import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaTools,
  FaSuitcase,
  FaCertificate,
  FaCode,
} from "react-icons/fa";
import PropTypes from "prop-types";

const fadeUp = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", type: "tween" },
  },
};

const timelineItem = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, type: "tween" } },
};

function About() {
  return (
    <section name="About" className="relative bg-white py-20 overflow-hidden">
      {/* Background Glow Animation (no y/x motion!) */}
      <motion.div
        className="absolute top-20 -right-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-40"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", type: "tween" }}
      />
      <motion.div
        className="absolute bottom-20 -left-20 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-40"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", type: "tween" }}
      />

      <div className="max-w-screen-xl mx-auto px-6 md:px-20">
        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-slate-900 flex items-center gap-3 mb-12"
        >
          About Me
          <motion.span
            className="h-[4px] w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.6, ease: "easeOut", type: "tween" }}
          />
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base leading-relaxed text-slate-600 max-w-3xl mb-14"
        >
          Hi, I’m <span className="font-semibold text-slate-900">Ayush Prajapati</span>, a passionate
          learner and developer who loves turning ideas into highly functional
          and modern digital products.
        </motion.p>

        {/* TIMELINE SECTIONS */}
        <div className="space-y-14">
          <Section
            title="Education"
            icon={<FaGraduationCap size={24} />}
            color="blue"
            items={[
              "Sushila Devi Bansal College — B.Tech CSE (Pursuing)",
              "Jija Mata Polytechnic College — Diploma CSE • 2025",
              "Govt. Higher Secondary School — 12th PCM • 2022",
              "Nehru Montessori School — 10th CBSE • 2020",
            ]}
          />

          <Section
            title="Skills & Expertise"
            icon={<FaTools size={24} />}
            color="indigo"
            items={[
              "Frontend: HTML, CSS, JavaScript, React",
              "Backend: Node.js, Express.js, PHP",
              "Libraries: Bootstrap, Material UI",
              "Databases: MongoDB, MySQL",
              "Tools: Git, GitHub, Postman",
              "Soft Skills: Teamwork, Problem-solving",
            ]}
          />

          <Section
            title="Experience"
            icon={<FaSuitcase size={24} />}
            color="purple"
            items={[
              "Intern — Academy of Skill Development • 2024",
              "Intern — Zensoft Technologies • 2022",
              "Intern — Memorial Computers • 2022",
            ]}
          />

          <Section
            title="Certifications"
            icon={<FaCertificate size={24} />}
            color="green"
            items={[
              "C Programming — Memorial Computers",
              "Web Designing — Zensoft Technologies",
              "MERN Full Stack — ASD Academy",
              "Gemini Certified — Google (Valid till 2028)",
            ]}
            bullet
          />

          <Section
            title="Projects"
            icon={<FaCode size={24} />}
            color="red"
            items={[
              "JMGCPC Portal — College Management System",
              "DreamXpert — Live Cricket Score App",
              "Furniture Store — MERN Stack Project",
              "Electronics Hub — E-Commerce Web App",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function Section({ title, icon, items, color, bullet }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
      <div className={`flex items-center gap-3 text-${color}-600 text-xl font-semibold`}>
        {icon} {title}
      </div>

      <div className="ml-10 pl-5 border-l-2 border-slate-200 space-y-3">
        {items.map((item, index) => (
          <motion.p
            key={index}
            variants={timelineItem}
            whileHover={{ scale: 1.05 }}
            className="text-slate-700 cursor-pointer text-sm md:text-base"
          >
            {bullet ? `• ${item}` : item}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

/* PropTypes Validation — removes ESLint warnings */
Section.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string,
  bullet: PropTypes.bool,
};

export default About;
