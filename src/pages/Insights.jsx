import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import brainrace from "../assets/books/brainrace.webp";

export default function Insights() {
  return (
    <div className="bg-[#F5F3EE] text-[#14274E] overflow-hidden">

      {/* HERO */}
      <section className="px-6 pt-32 pb-20 text-center md:px-10 lg:px-[8%]">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
          uppercase
          tracking-[0.32em]
          text-[11px]
          sm:text-sm
          text-[#9A6B46]
          "
        >
          Insights & Perspectives
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="
          mt-6

          text-[3.2rem]
          sm:text-6xl
          lg:text-7xl

          font-bold
          leading-[0.95]
          tracking-[-0.06em]
          text-[#14274E]
          "
        >
          Ideas, Learning,
          <br />
          and Dialogue
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="
          mx-auto
          mt-8
          max-w-4xl

          text-[1.08rem]
          leading-[1.9rem]

          sm:text-xl
          sm:leading-relaxed

          text-[#697386]
          "
        >
          Reflections on science, education, public reasoning,
          technology, leadership, and intellectual growth.
        </motion.p>

      </section>

      {/* THREE PILLARS */}
      <section className="px-6 pb-20 md:px-10 lg:px-[8%] overflow-hidden">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >

            {[
              {
                title: "Writing & Commentary",
                desc: "Sharing insights on quantum physics, science policy, education, and the future of research through essays, commentary, and long-form reflections.",
              },
              {
                title: "Speaking & Engagement",
                desc: "Delivering lectures, conference talks, and public discussions on quantum science, higher education, technology, and global academic systems.",
              },
              {
                title: "Learning & Intellectual Growth",
                desc: "Exploring books, philosophies, institutional systems, and scientific ideas that shape long-term thinking on society and technological futures.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.01,
                }}
                transition={{ duration: 0.3 }}
                className="
                bg-white
                rounded-[30px]
                border border-[#E8E2D8]

                p-8
                sm:p-12

                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                transition-all duration-500
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >

                <div className="h-[3px] w-14 bg-[#D3A46B]" />

                <h2
                  className="
                  mt-8

                  text-[2.5rem]
                  sm:text-[3rem]

                  font-bold
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#14274E]
                  "
                >
                  {item.title}
                </h2>

                <p
                  className="
                  mt-8

                  text-[1rem]
                  leading-[1.95rem]

                  sm:text-[1.12rem]
                  sm:leading-[2.1rem]

                  text-[#697386]
                  "
                >
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </div>

      </section>

      {/* BLOG & ESSAYS */}
      <section className="px-6 py-20 md:px-10 lg:px-[8%]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <h2
              className="
              text-[3rem]
              sm:text-6xl
              font-bold
              tracking-[-0.05em]
              text-[#14274E]
              "
            >
              Blog & Essays
            </h2>

            <p
              className="
              mt-6
              text-[1.05rem]
              sm:text-xl
              text-[#697386]
              max-w-4xl
              mx-auto
              leading-relaxed
              "
            >
              Exploring quantum physics, science policy,
              education, and the future of research.
            </p>

          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">

            {[
              {
                date: "February 2026",
                tag: "Education",
                title: "The Global Science Race",
                read: "5 min read",
                button: "Read more →",
                desc: "A reflection on how China emerged as a global knowledge power and how universities across the world are restructuring themselves to compete in the future of science and technology leadership.",
              },
              {
                date: "April 2026",
                tag: "Reflection",
                title: "The Fear of Falling Behind",
                read: "15 min read",
                button: "Read more →",
                desc: "A philosophical reflection on ambition, burnout, productivity culture, and why modern academic systems increasingly reward anxiety over depth and intellectual purpose.",
              },
              {
                date: "Coming Soon",
                tag: "Policy",
                title: "Product to PhD",
                read: "8 min read",
                button: "Coming Soon",
                desc: "Examining whether Product to PhD represents genuine structural reform in research ecosystems or merely a policy slogan shaped by technological competition.",
              },
            ].map((blog, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="
                bg-[#F7F5F2]
                rounded-[28px]
                border border-[#E8E2D8]

                p-7
                sm:p-10

                text-left
                shadow-sm
                flex flex-col

                min-h-[520px]
                sm:min-h-[640px]
                "
              >

                <div className="flex items-center justify-between gap-4">

                  <p className="text-[#8C94A6] text-sm sm:text-base">
                    {blog.date}
                  </p>

                  <span
                    className="
                    px-4 py-2
                    rounded-full
                    bg-[#ECE7DF]
                    text-[#9A6B46]

                    text-[11px]
                    sm:text-sm

                    font-medium
                    whitespace-nowrap
                    "
                  >
                    {blog.tag}
                  </span>

                </div>

                <h3
                  className="
                  mt-8

                  text-[2rem]
                  sm:text-[2.5rem]

                  font-bold
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-[#14274E]
                  "
                >
                  {blog.title}
                </h3>

                <p
                  className="
                  mt-6
                  text-[#697386]

                  leading-[1.9rem]
                  text-[1rem]

                  sm:text-[1.05rem]
                  sm:leading-[2rem]
                  "
                >
                  {blog.desc}
                </p>

                <div className="mt-auto pt-10">

                  <div className="h-[1px] bg-[#E8E2D8]" />

                  <div className="mt-6 flex items-center justify-between">

                    <p className="text-[#8C94A6] text-sm">
                      {blog.read}
                    </p>

                    <button className="text-[#9A3B30] font-medium text-sm sm:text-base">
                      {blog.button}
                    </button>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* BOOKS */}
      <section className="px-6 md:px-10 lg:px-[8%] pb-24 sm:pb-36">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <h2
              className="
              text-[3rem]
              sm:text-6xl
              font-bold
              tracking-[-0.05em]
              text-[#14274E]
              "
            >
              Books & Reading
            </h2>

            <p
              className="
              mt-6
              text-[1.05rem]
              sm:text-xl
              leading-[1.9rem]
              sm:leading-relaxed
              text-[#697386]
              max-w-5xl
              mx-auto
              "
            >
              Reading across physics, history, philosophy,
              education, literature, and technology to understand
              the systems shaping modern civilization.
            </p>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
            mt-14
            mx-auto
            max-w-6xl
            bg-white
            border border-[#E8E2D8]
            rounded-[28px]

            p-6
            sm:p-8
            lg:p-10

            shadow-sm
            overflow-hidden
            "
          >

            <div
              className="
              grid
              gap-8
              sm:gap-10
              items-center

              lg:grid-cols-[220px_1fr]
              "
            >

              <div>

                <img
                  src={brainrace}
                  alt="book"
                  className="
                  w-full
                  max-w-[180px]
                  sm:max-w-[220px]

                  rounded-[20px]
                  object-cover
                  mx-auto
                  "
                />

              </div>

              <div>

                <span
                  className="
                  inline-block

                  px-5 py-2
                  sm:px-8 sm:py-3

                  rounded-full
                  bg-[#D3A46B]
                  text-white
                  font-semibold

                  text-sm
                  sm:text-lg
                  "
                >
                  Currently Reading
                </span>

                <h3
                  className="
                  mt-6

                  text-[2.2rem]
                  sm:text-4xl
                  lg:text-5xl

                  font-bold
                  leading-[1.02]
                  tracking-[-0.05em]
                  text-[#14274E]
                  "
                >
                  The Great Brain Race:
                  How Global Universities
                  Are Reshaping the World
                </h3>

                <p
                  className="
                  mt-4

                  text-lg
                  sm:text-2xl

                  italic
                  text-[#697386]
                  "
                >
                  by Ben Wildavsky
                </p>

                <p
                  className="
                  mt-6
                  max-w-4xl

                  text-[1rem]
                  leading-[1.9rem]

                  sm:text-[1.15rem]
                  sm:leading-[2.2rem]

                  text-[#697386]
                  "
                >
                  Explores how international student mobility,
                  branch campuses, global university rankings,
                  and research competitiveness are transforming
                  higher education systems and reshaping the
                  global knowledge economy.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* SPEAKING & PRESENTATIONS */}
      <section className="px-6 md:px-10 lg:px-[8%] py-20 sm:py-28">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <h2
            className="
            text-[3rem]
            sm:text-5xl
            font-bold
            tracking-[-0.05em]
            text-[#14274E]
            "
          >
            Speaking & Presentations
          </h2>

        </motion.div>

        <div className="mt-20">

          <h3
            className="
            text-[2.2rem]
            sm:text-4xl
            font-bold
            tracking-[-0.04em]
            text-[#14274E]
            "
          >
            Recent Invited Talks
          </h3>

          <div className="mt-12 space-y-10">

            {[
              {
                title:
                  "The Lost Dimension: How a Typo Became a Scientific Standard in Nanomaterials Research",
                date: "December 12–13, 2025",
                venue:
                  "National Conference on Advances in Materials Science (NCAMS-2025) — REVA University, Bengaluru",
                tag: "Invited Talk",
              },
              {
                title:
                  "From Bits to Braids: Computing in Quantum Flatland",
                date: "March 21–22, 2025",
                venue:
                  "International Workshop on Quantum Mathematics & Computing (QMAC-2025) — MIT Bengaluru",
                tag: "Invited Talk",
              },
              {
                title:
                  "A Century of Quantum Mechanics: Mysteries, Discoveries, and the Nature of Reality",
                date: "February 4, 2025",
                venue:
                  "International Year of Quantum Science and Technology — MIT Bengaluru",
                tag: "Public Lecture",
              },
            ].map((talk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="
                rounded-[26px]
                border border-[#E8E2D8]
                bg-white

                p-6 sm:p-10

                shadow-sm
                "
              >

                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                  <div>

                    <h4
                      className="
                      max-w-5xl

                      text-[1.7rem]
                      sm:text-3xl

                      font-bold
                      leading-tight
                      text-[#14274E]
                      "
                    >
                      {talk.title}
                    </h4>

                    <p className="mt-6 text-lg font-semibold text-[#9A6B46]">
                      {talk.date}
                    </p>

                    <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-600">
                      {talk.venue}
                    </p>

                  </div>

                  <div className="rounded-full bg-[#F4EFE8] px-6 py-3 text-sm font-semibold text-[#9A6B46] whitespace-nowrap">
                    {talk.tag}
                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* SPEAKING ENGAGEMENTS */}
      <section className="px-6 md:px-10 lg:px-[8%] pb-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
          rounded-[30px]
          border border-[#E8E2D8]
          bg-white

          p-6 sm:p-10 lg:p-14

          shadow-sm
          "
        >

          <h2
            className="
            text-[2.7rem]
            sm:text-5xl
            font-bold
            leading-[0.98]
            tracking-[-0.05em]
            text-[#14274E]
            "
          >
            Speaking Engagements
          </h2>

          <p
            className="
            mt-6
            max-w-4xl

            text-[1rem]
            leading-[1.9rem]

            sm:text-xl
            sm:leading-relaxed

            text-gray-600
            "
          >
            I am available for keynote addresses, invited talks,
            panel discussions, seminars, and academic conversations on:
          </p>

          <ul
            className="
            mt-10
            space-y-5

            text-[1rem]
            leading-[1.9rem]

            sm:text-lg
            sm:leading-relaxed

            text-gray-700
            "
          >

            <li>• Quantum materials and superconductivity</li>

            <li>• Muon spin spectroscopy and advanced characterization</li>

            <li>• International academic partnerships and student mobility</li>

            <li>• Quantum computing education</li>

            <li>• Science policy and research infrastructure</li>

          </ul>

          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="mt-12"
          >

            <Link
              to="/connect"
              className="
              w-full
              sm:w-auto

              rounded-xl
              bg-[#14274E]

              px-8 py-4
              sm:px-10 sm:py-5

              text-base
              sm:text-lg

              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:shadow-xl
              inline-flex
              items-center
              justify-center
              "
            >
              Invite Me to Speak
            </Link>

          </motion.div>

        </motion.div>

      </section>

      {/* NEWSLETTER */}
      <section className="px-6 md:px-10 lg:px-[8%] pb-24 sm:pb-32">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
          mx-auto
          max-w-5xl
          rounded-[32px]
          border border-[#E8E2D8]
          bg-white

          px-6 py-10
          sm:px-8 sm:py-16

          text-center
          shadow-sm
          "
        >

          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#9A6B46]">
            Newsletter
          </p>

          <h2
            className="
            text-[2.8rem]
            sm:text-5xl

            font-bold
            leading-[1]
            tracking-[-0.05em]
            text-[#14274E]
            "
          >
            Subscribe for Insights
          </h2>

          <p
            className="
            mx-auto
            mt-6
            max-w-3xl

            text-[1rem]
            leading-[1.9rem]

            sm:text-xl
            sm:leading-relaxed

            text-gray-600
            "
          >
            Monthly reflections on quantum physics,
            science policy, emerging technologies,
            and the future of higher education.
          </p>

          <div
            className="
            mx-auto
            mt-10

            flex
            max-w-2xl
            flex-col
            gap-4

            sm:flex-row
            "
          >

            <input
              type="email"
              placeholder="Enter your email"
              className="
              h-14 sm:h-16

              flex-1
              rounded-xl
              border border-[#E8E2D8]
              bg-[#F8F6F2]
              px-6

              text-base
              sm:text-lg

              outline-none
              transition
              focus:border-[#14274E]
              "
            />

            <button
              className="
              h-14 sm:h-16

              rounded-xl
              bg-[#14274E]

              px-8 sm:px-10

              text-base
              sm:text-lg

              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              "
            >
              Subscribe
            </button>

          </div>

        </motion.div>

      </section>

    </div>
  );
}
