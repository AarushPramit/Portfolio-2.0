import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  SiGooglescholar,
  SiOrcid,
  SiScopus,
} from "react-icons/si";

function Connect() {
  return (
    <div className="overflow-hidden bg-[#F5F3EE] text-[#14274E]">

      {/* HERO */}
      <section className="px-6 pt-32 pb-20 md:px-10 lg:px-[8%]">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl text-center"
        >

          <div className="mx-auto mb-10 h-[2px] w-full max-w-5xl bg-[#D8D2C8]" />

          <h1
            className="
            text-[3rem]
            sm:text-5xl
            md:text-7xl

            font-bold
            leading-[0.95]
            tracking-[-0.05em]
            text-[#14274E]
            "
          >
            Advisory & Strategic Engagement
          </h1>

          <p
            className="
            mx-auto
            mt-8
            max-w-4xl

            text-[1rem]
            leading-[1.9rem]

            sm:text-xl
            sm:leading-relaxed

            text-[#5F6B7A]
            "
          >
            I engage selectively with industry, universities,
            and research institutions on scientific direction,
            institutional transformation, and long-term innovation strategy.
          </p>

        </motion.div>

      </section>

      {/* ADVISORY CARDS */}
      <section className="px-6 pb-20 md:px-10 lg:px-[8%] overflow-hidden">

        <motion.div
          initial={{ opacity: 0, x: -140 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-6 lg:grid-cols-4"
        >

          {[
            {
              title: "Technical & Innovation Advisory",
              items: [
                "Advanced materials performance assessment",
                "Sustainability assessment for materials development",
                "Research commercialization strategy",
                "Experimental–computational integration",
              ],
            },

            {
              title: "Institutional Excellence Strategy",
              items: [
                "Curriculum transformation",
                "Innovation ecosystem alignment",
                "Global benchmarking strategy",
                "Research ecosystem design",
              ],
            },

            {
              title: "Transnational Academic Strategy",
              items: [
                "Cross-border partnerships",
                "Global mobility frameworks",
                "Research alliance structuring",
                "Regulatory and compliance strategy",
              ],
            },

            {
              title: "Leadership, Governance & Policy",
              items: [
                "Human-centered institutional systems",
                "Organizational diagnostics",
                "Education policy strategy",
                "Science & technology governance",
              ],
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.015,
              }}
              transition={{ duration: 0.3 }}
              className="
              rounded-[28px]
              border border-[#DED8CE]
              bg-white

              p-6
              sm:p-8

              shadow-sm
              transition-all duration-500
              hover:shadow-xl
              "
            >

              <h3
                className="
                text-[2rem]
                sm:text-3xl

                font-bold
                leading-[1.05]
                tracking-[-0.04em]
                text-[#8B3A3A]
                "
              >
                {card.title}
              </h3>

              <ul
                className="
                mt-8
                space-y-4

                text-[1rem]
                leading-[1.9rem]

                sm:text-lg
                sm:leading-relaxed

                text-[#5F6B7A]
                "
              >
                {card.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

            </motion.div>
          ))}

        </motion.div>

      </section>

      {/* CONNECT SECTION */}
      <section className="px-6 pb-24 md:px-10 lg:px-[8%]">

        <div
          className="
          mx-auto
          max-w-7xl

          rounded-[36px]
          border border-[#DED8CE]
          bg-white

          px-6 py-10
          sm:px-10 sm:py-16
          lg:px-20 lg:py-20
          "
        >

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <p
              className="
              mb-5
              text-[11px]
              sm:text-sm

              uppercase
              tracking-[0.35em]
              text-[#9A6B46]
              "
            >
              Who I Work With
            </p>

            <h2
              className="
              mx-auto
              max-w-5xl

              text-[3rem]
              sm:text-5xl
              md:text-7xl

              font-bold
              leading-[1]
              tracking-[-0.05em]
              text-[#14274E]
              "
            >
              Building institutions for the future of science.
            </h2>

            <p
              className="
              mx-auto
              mt-8
              max-w-5xl

              text-[1rem]
              leading-[1.9rem]

              sm:text-xl
              sm:leading-relaxed

              text-[#677284]
              "
            >
              I engage with researchers, early-career professionals,
              and emerging leaders committed to disciplined development,
              intellectual independence, and meaningful contribution.
            </p>

          </motion.div>

          {/* FRAMEWORK */}
          <div className="mt-16 sm:mt-24">

            <div className="mb-10 flex items-center justify-center gap-4 sm:gap-6">

              <div className="h-[1px] w-12 sm:w-40 bg-[#DED8CE]" />

              <p
                className="
                text-[10px]
                sm:text-sm

                uppercase
                tracking-[0.35em]
                text-[#8B3A3A]
                whitespace-nowrap
                "
              >
                Development Framework
              </p>

              <div className="h-[1px] w-12 sm:w-40 bg-[#DED8CE]" />

            </div>

            <div className="grid gap-6 md:grid-cols-2">

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
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="
                  rounded-[24px]
                  border border-[#E6E0D6]
                  bg-[#FAF9F6]

                  px-6 py-8
                  sm:px-10 sm:py-10

                  text-center

                  text-[1rem]
                  leading-[1.9rem]

                  sm:text-xl
                  sm:leading-relaxed

                  text-[#677284]
                  shadow-sm
                  "
                >
                  {item}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="
                md:col-span-2

                rounded-[24px]
                border border-[#E6E0D6]
                bg-[#FAF9F6]

                px-6 py-8
                sm:px-10 sm:py-12

                text-center

                text-[1rem]
                leading-[1.9rem]

                sm:text-xl
                sm:leading-relaxed

                text-[#677284]
                shadow-sm
                "
              >
                Leadership formation beyond technical expertise
              </motion.div>

            </div>

          </div>

          {/* SOCIALS */}
          <div className="mt-16 sm:mt-24">

            <div
              className="
              grid
              gap-5

              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-5
              "
            >

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
                  icon: <FaEnvelope />,
                  label: "Email",
                  border: "hover:border-[#D8B07C]",
                  href: "mailto:sandhu.anand@hotmail.com",
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
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                  className={`
                    rounded-[28px]
                    border border-[#DAD3C9]
                    bg-[#FAF9F6]

                    px-6 py-8
                    sm:px-8 sm:py-10

                    text-center
                    shadow-sm
                    transition-all duration-300

                    ${social.border}
                  `}
                >

                  <div
                    className="
                    flex justify-center

                    text-[3rem]
                    sm:text-[3.5rem]

                    text-[#14274E]
                    "
                  >
                    {social.icon}
                  </div>

                  <p
                    className="
                    mt-4

                    text-[1.3rem]
                    sm:text-[1.5rem]

                    font-semibold
                    tracking-[-0.03em]
                    text-[#14274E]
                    "
                  >
                    {social.label}
                  </p>

                </motion.a>
              ))}

            </div>

            {/* ACADEMIC PROFILES */}
            <div
              className="
              mt-16
              w-full

              rounded-[32px]
              border border-[#E6DDD2]
              bg-white

              p-7
              sm:p-10
              lg:p-14

              shadow-sm
              "
            >

              <h3
                className="
                mb-10
                text-center

                text-[2.7rem]
                sm:text-5xl

                font-bold
                leading-[1]
                tracking-[-0.05em]
                text-[#8B3A3A]
                "
              >
                Academic Profiles
              </h3>

              <div className="grid gap-6 lg:grid-cols-3">

                {/* GOOGLE SCHOLAR */}
                <motion.a
                  href="https://scholar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="
                  flex items-center gap-4

                  rounded-[24px]
                  border border-[#4285F4]

                  px-6 py-5
                  sm:px-8

                  transition-all duration-300
                  hover:shadow-lg
                  "
                >

                  <SiGooglescholar className="text-4xl text-[#4285F4]" />

                  <span
                    className="
                    text-[1rem]
                    sm:text-xl

                    font-semibold
                    text-[#4B4B4B]
                    "
                  >
                    Google Scholar
                  </span>

                </motion.a>

                {/* ORCID */}
                <motion.a
                  href="https://orcid.org/0000-0003-1602-507X"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="
                  flex items-center gap-4

                  rounded-[24px]
                  border border-[#A6CE39]

                  px-6 py-5
                  sm:px-8

                  transition-all duration-300
                  hover:shadow-lg
                  "
                >

                  <SiOrcid className="text-4xl text-[#A6CE39]" />

                  <span
                    className="
                    text-[1rem]
                    sm:text-xl

                    font-semibold
                    text-[#4B4B4B]
                    "
                  >
                    ORCID
                  </span>

                </motion.a>

                {/* SCOPUS */}
                <motion.a
                  href="https://www.scopus.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="
                  flex items-center gap-4

                  rounded-[24px]
                  border border-[#F36D21]

                  px-6 py-5
                  sm:px-8

                  transition-all duration-300
                  hover:shadow-lg
                  "
                >

                  <SiScopus className="text-4xl text-[#F36D21]" />

                  <span
                    className="
                    text-[1rem]
                    sm:text-xl

                    font-semibold
                    text-[#4B4B4B]
                    "
                  >
                    Scopus
                  </span>

                </motion.a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Connect;
