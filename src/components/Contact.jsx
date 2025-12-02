import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Contact() {
  return (
    <section name="Contact" className="relative overflow-hidden bg-white">
      {/* Background accents */}
      <motion.div
        className="pointer-events-none absolute -top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"
        animate={{ x: [0, 12, 0], y: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-10 -left-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40"
        animate={{ x: [0, -12, 0], y: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 flex items-center gap-3">
            Contact Me
            <motion.span
              className="h-[4px] w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.7 }}
            />
          </h1>
          <p className="text-sm md:text-base text-slate-600 mt-1">
            Have a project, collaboration, or opportunity? Share a few details and, if needed, attach
            documents or designs for context.
          </p>
        </motion.div>

        {/* Form */}
        <div className="flex flex-col items-center justify-center mt-6">
          <motion.form
            variants={fadeUp}
            action="https://getform.io/f/aroxlljb"
            method="POST"
            encType="multipart/form-data"
            className="w-full max-w-md bg-white/80 backdrop-blur border border-slate-200 shadow-lg rounded-2xl px-8 py-6 relative overflow-hidden"
          >
            {/* glow accent */}
            <motion.div
              className="pointer-events-none absolute -top-10 right-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"
              animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-slate-900">
              Send Your Message
            </h2>

            {/* Full Name */}
            <div className="flex flex-col mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                className="rounded-lg border border-slate-300 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                className="rounded-lg border border-slate-300 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                className="rounded-lg border border-slate-300 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                id="phone"
                name="phone"
                type="tel"
                placeholder="e.g. +91 98765 43210"
              />
              <span className="text-[11px] text-slate-500 mt-1">
                Optional, but helps me reach you faster.
              </span>
            </div>

            {/* Company Name (Optional) */}
            <div className="flex flex-col mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name <span className="text-xs text-slate-400">(Optional)</span>
              </label>
              <input
                className="rounded-lg border border-slate-300 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                id="company"
                name="company"
                type="text"
                placeholder="Your company or organization"
              />
            </div>

            {/* Company Website (Optional) */}
            <div className="flex flex-col mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Website <span className="text-xs text-slate-400">(Optional)</span>
              </label>
              <input
                className="rounded-lg border border-slate-300 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                id="company_website"
                name="company_website"
                type="url"
                placeholder="https://example.com"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                className="rounded-lg border border-slate-300 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition min-h-[120px]"
                id="message"
                name="message"
                placeholder="Share details about your project, query, or idea..."
                required
              />
            </div>

            {/* Attachments: up to 5 files */}
            <div className="flex flex-col mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Attach Files <span className="text-xs text-slate-400">(Optional)</span>
              </label>
              <input
                className="block w-full text-xs md:text-sm text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                id="attachments"
                name="attachments"
                type="file"
                multiple
                accept=".pdf,image/*,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt"
              />
              <span className="text-[11px] text-slate-500 mt-1">
                Attach up to 5 files (PDFs, images, or documents) that help explain your requirement.
              </span>
            </div>

            {/* Hidden Honeypot */}
            <input type="hidden" name="_gotcha" style={{ display: "none" }} />

            {/* Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 w-full inline-flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-xl px-3 py-2 shadow-md hover:shadow-lg transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
