import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGooglescholar, SiOrcid, SiScopus } from "react-icons/si"; // ✅ Fix 1: Added missing imports

function Connect() {
  return (
    <div className="bg-[#F5F3EE] text-[#14274E]">

      {/* HERO */}
      <section className="px-6 md:px-10 lg:px-[8%] pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl text-center"
        >
          <div className="mx-auto mb-12 h-[2px] w-full max-w-5xl bg-[#D8D2C8]" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#14274E]">
            Advisory & Strategic Engagement
          </h1>
          <p className="mx-auto mt-10 max-w-4xl text-xl leading-relaxed text-[#5F6B7A]">
            I engage selectively with industry, universities,
            and research institutions on scientific direction,
            institutional transformation, and long-term innovation strategy.
          </p>
        </motion.div>
      </section>

      {/* ADVISORY CARDS */}
      <section className="px-6 md:px-10 lg:px-[8%] pb-32 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -140 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15, margin: "-120px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 lg:grid-cols-4"
        >
          {/* CARD 1 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-[28px] border border-[#DED8CE] bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl"
          >
            <h3 className="text-3xl font-bold leading-tight text-[#8B3A3A]">
              Technical & Innovation Advisory
            </h3>
            <ul className="mt-8 space-y-4 text-lg leading-relaxed text-[#5F6B7A]">
              <li>• Advanced materials performance assessment</li>
              <li>• Sustainability assessment for materials development</li>
              <li>• Research commercialization strategy</li>
              <li>• Experimental–computational integration</li>
            </ul>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-[28px] border border-[#DED8CE] bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl"
          >
            <h3 className="text-3xl font-bold leading-tight text-[#8B3A3A]">
              Institutional Excellence Strategy
            </h3>
            <ul className="mt-8 space-y-4 text-lg leading-relaxed text-[#5F6B7A]">
              <li>• Curriculum transformation</li>
              <li>• Innovation ecosystem alignment</li>
              <li>• Global benchmarking strategy</li>
              <li>• Research ecosystem design</li>
            </ul>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-[28px] border border-[#DED8CE] bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl"
          >
            <h3 className="text-3xl font-bold leading-tight text-[#8B3A3A]">
              Transnational Academic Strategy
            </h3>
            <ul className="mt-8 space-y-4 text-lg leading-relaxed text-[#5F6B7A]">
              <li>• Cross-border partnerships</li>
              <li>• Global mobility frameworks</li>
              <li>• Research alliance structuring</li>
              <li>• Regulatory and compliance strategy</li>
            </ul>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-[28px] border border-[#DED8CE] bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl"
          >
            <h3 className="text-3xl font-bold leading-tight text-[#8B3A3A]">
              Leadership, Governance & Policy
            </h3>
            <ul className="mt-8 space-y-4 text-lg leading-relaxed text-[#5F6B7A]">
              <li>• Human-centered institutional systems</li>
              <li>• Organizational diagnostics</li>
              <li>• Education policy strategy</li>
              <li>• Science & technology governance</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* CONNECT SECTION */}
      <section className="px-6 md:px-10 lg:px-[8%] pb-36">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-[#DED8CE] bg-white px-8 py-20 md:px-20">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#9A6B46]">
              Who I Work With
            </p>
            <h2 className="mx-auto max-w-5xl text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-[#14274E]">
              Building institutions for the future of science.
            </h2>
            <p className="mx-auto mt-12 max-w-5xl text-2xl leading-relaxed text-[#677284]">
              I engage with researchers, early-career professionals,
              and emerging leaders committed to disciplined development,
              intellectual independence, and meaningful contribution.
            </p>
          </motion.div>

          {/* FRAMEWORK */}
          <div className="mt-24">
            <div className="mb-12 flex items-center justify-center gap-6">
              <div className="h-[1px] w-40 bg-[#DED8CE]" />
              <p className="text-sm uppercase tracking-[0.35em] text-[#8B3A3A]">
                Development Framework
              </p>
              <div className="h-[1px] w-40 bg-[#DED8CE]" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                "Intellectual rigor and analytical discipline",
                "Structured reflection and long-term positioning",
                "Ethical grounding in decision-making",
                "Institutional and industry awareness",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="rounded-[24px] border border-[#E6E0D6] bg-[#FAF9F6] px-10 py-10 text-center text-xl text-[#677284] shadow-sm"
                >
                  {item}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="md:col-span-2 rounded-[24px] border border-[#E6E0D6] bg-[#FAF9F6] px-10 py-12 text-center text-xl text-[#677284] shadow-sm"
              >
                Leadership formation beyond technical expertise
              </motion.div>
            </div>
          </div>

          {/* SOCIALS */}
          {/* SOCIALS */}
<div className="mt-24 flex flex-col items-center">

  <div className="flex flex-nowrap items-center justify-center gap-8 overflow-x-auto">
    {[
      {
        icon: <FaLinkedinIn />,
        label: "LinkedIn",
        border: "hover:border-[#0A66C2]",
        href: "https://www.linkedin.com/in/pal-anand/",
      },
      {
        icon: <FaXTwitter />,
        label: "Twitter/X",
        border: "hover:border-black",
        href: "https://x.com/anandpal",
      },
      {
        icon: <FaFacebookF />,
        label: "Facebook",
        border: "hover:border-[#1877F2]",
        href: "https://www.facebook.com/sandhuanand/",
      },
      {
        icon: <FaInstagram />,
        label: "Instagram",
        border: "hover:border-[#E4405F]",
        href: "https://www.instagram.com/anandpal/",
      },
      {
        icon: <FaEnvelope />,                          // ✅ Mail icon added
        label: "Email",
        border: "hover:border-[#D8B07C]",
        href: "mailto:sandhu.anand@hotmail.com",       // ✅ Correct mailto format
      },
    ].map((social, index) => (
      <motion.a
        key={index}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -6 }}
        className={`flex h-[130px] min-w-[130px] flex-col items-center justify-center rounded-[26px] border border-[#DAD3C9] bg-[#FAF9F6] transition-all duration-300 ${social.border}`}
      >
        <div className="text-4xl text-[#14274E]">{social.icon}</div>
        <p className="mt-4 text-lg font-semibold text-[#14274E]">{social.label}</p>
      </motion.a>
    ))}
  </div>

            {/* ACADEMIC PROFILES */}
            <div className="mt-20 w-full max-w-5xl rounded-[32px] border border-[#E8D7C5] bg-white p-10 shadow-sm">
              <h3 className="mb-10 text-center text-2xl font-bold text-[#8B3A3A]">
                Academic Profiles
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-8">

                {/* GOOGLE SCHOLAR */}
                <motion.a
                  href="https://scholar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-4 rounded-2xl border border-[#4285F4] px-8 py-5 transition-all duration-300 hover:shadow-lg"
                >
                  <SiGooglescholar className="text-4xl text-[#4285F4]" />
                  <span className="text-xl font-semibold text-[#4B4B4B]">Google Scholar</span>
                </motion.a>

                {/* ORCID */}
                <motion.a
                  href="https://orcid.org/0000-0003-1602-507X"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-4 rounded-2xl border border-[#A6CE39] px-8 py-5 transition-all duration-300 hover:shadow-lg"
                >
                  <SiOrcid className="text-4xl text-[#A6CE39]" />
                  <span className="text-xl font-semibold text-[#4B4B4B]">ORCID</span>
                </motion.a>

                {/* SCOPUS */}
                <motion.a
                  href="https://www.scopus.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-4 rounded-2xl border border-[#F36D21] px-8 py-5 transition-all duration-300 hover:shadow-lg"
                >
                  <SiScopus className="text-4xl text-[#F36D21]" />
                  <span className="text-xl font-semibold text-[#4B4B4B]">Scopus</span>
                </motion.a>

              </div>
            </div>

          </div> {/* closes SOCIALS flex-col div */}

        </div> {/* ✅ Fix 2: closes the CONNECT SECTION's inner white card div */}
      </section>

    </div>
  );
}

export default Connect;