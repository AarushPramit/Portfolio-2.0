import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import brainrace from "../assets/books/brainrace.webp";

export default function Insights() {
  return (
    <div className="bg-[#F5F3EE] text-[#14274E] overflow-hidden">

      {/* HERO */}
      <section className="px-6 pt-36 pb-24 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.35em] text-sm text-[#9A6B46]"
        >
          Insights & Perspectives
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="
          mt-6
          text-5xl
          sm:text-6xl
          lg:text-7xl
          font-bold
          leading-[1]
          tracking-tight
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
          mt-10
          max-w-4xl
          text-xl
          leading-relaxed
          text-[#697386]
          "
        >
          Reflections on science, education, public reasoning,
          technology, leadership, and intellectual growth.
        </motion.p>

      </section>

      {/* THREE PILLARS */}
      <section className="px-6 pb-28 overflow-hidden">

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

            {/* CARD 1 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.01,
              }}
              transition={{ duration: 0.3 }}
              className="
              bg-white
              rounded-[32px]
              border border-[#E8E2D8]
              p-14
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
              transition-all duration-500
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >

              <div className="h-[3px] w-14 bg-[#D3A46B]" />

              <h2 className="mt-10 text-[3rem] font-bold leading-[1.1] text-[#14274E]">
                Writing &
                <br />
                Commentary
              </h2>

              <p className="mt-10 text-[1.12rem] leading-[2.1rem] text-[#697386]">
                Sharing insights on quantum physics,
                science policy, education, and the
                future of research through essays,
                commentary, and long-form reflections.
              </p>

            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.01,
              }}
              transition={{ duration: 0.3 }}
              className="
              bg-white
              rounded-[32px]
              border border-[#E8E2D8]
              p-14
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
              transition-all duration-500
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >

              <div className="h-[3px] w-14 bg-[#D3A46B]" />

              <h2 className="mt-10 text-[3rem] font-bold leading-[1.1] text-[#14274E]">
                Speaking &
                <br />
                Engagement
              </h2>

              <p className="mt-10 text-[1.12rem] leading-[2.1rem] text-[#697386]">
                Delivering lectures, conference talks,
                and public discussions on quantum
                science, higher education, technology,
                and global academic systems.
              </p>

            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.01,
              }}
              transition={{ duration: 0.3 }}
              className="
              bg-white
              rounded-[32px]
              border border-[#E8E2D8]
              p-14
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
              transition-all duration-500
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >

              <div className="h-[3px] w-14 bg-[#D3A46B]" />

              <h2 className="mt-10 text-[3rem] font-bold leading-[1.1] text-[#14274E]">
                Learning &
                <br />
                Intellectual Growth
              </h2>

              <p className="mt-10 text-[1.12rem] leading-[2.1rem] text-[#697386]">
                Exploring books, philosophies,
                institutional systems, and scientific
                ideas that shape long-term thinking
                on society and technological futures.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* BLOG & ESSAYS */}
      <section className="px-6 py-28">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <h2 className="
            text-5xl
            sm:text-6xl
            font-bold
            text-[#14274E]
            ">
              Blog & Essays
            </h2>

            <p className="
            mt-8
            text-xl
            text-[#697386]
            max-w-4xl
            mx-auto
            leading-relaxed
            ">
              Exploring quantum physics, science policy,
              education, and the future of research.
            </p>

          </div>

          {/* BLOG CARDS */}
          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {/* CARD 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="
bg-[#F7F5F2]
rounded-[28px]
border border-[#E8E2D8]
p-10
text-left
shadow-sm
flex flex-col
min-h-[640px]
"
            >

              <div className="flex items-center justify-between">

                <p className="text-[#8C94A6]">
                  February 2026
                </p>

                <span className="
                px-5 py-2
                rounded-full
                bg-[#ECE7DF]
                text-[#9A6B46]
                text-sm
                font-medium
                ">
                  Education
                </span>

              </div>

              <h3 className="mt-10 text-[2.5rem] font-bold leading-tight text-[#14274E]">
                The Global Science Race
              </h3>

              <p className="mt-8 text-[#697386] leading-[2rem] text-[1.05rem]">
                A reflection on how China emerged as
                a global knowledge power and how
                universities across the world are
                restructuring themselves to compete
                in the future of science, technology,
                and higher education leadership.
              </p>

              <div className="mt-auto pt-14">

  <div className="h-[1px] bg-[#E8E2D8]" />

  <div className="mt-8 flex items-center justify-between"></div>

                <p className="text-[#8C94A6]">
                  5 min read
                </p>

                <button className="text-[#9A3B30] font-medium">
                  Read more →
                </button>

              </div>

            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="
bg-[#F7F5F2]
rounded-[28px]
border border-[#E8E2D8]
p-10
text-left
shadow-sm
flex flex-col
min-h-[640px]
"
            >

              <div className="flex items-center justify-between">

                <p className="text-[#8C94A6]">
                  April 2026
                </p>

                <span className="
                px-5 py-2
                rounded-full
                bg-[#ECE7DF]
                text-[#9A6B46]
                text-sm
                font-medium
                ">
                  Reflection
                </span>

              </div>

              <h3 className="mt-10 text-[2.3rem] font-bold leading-tight text-[#14274E]">
                The Fear of Falling Behind
              </h3>

              <p className="mt-8 text-[#697386] leading-[2rem] text-[1.05rem]">
                A philosophical reflection on ambition,
                burnout, productivity culture, and why
                modern academic and professional systems
                increasingly reward anxiety over depth,
                mastery, and intellectual purpose.
              </p>

              <div className="mt-auto pt-14">

  <div className="h-[1px] bg-[#E8E2D8]" />

  <div className="mt-8 flex items-center justify-between"></div>

                <p className="text-[#8C94A6]">
                  15 min read
                </p>

                <button className="text-[#9A3B30] font-medium">
                  Read more →
                </button>

              </div>

            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="
bg-[#F7F5F2]
rounded-[28px]
border border-[#E8E2D8]
p-10
text-left
shadow-sm
flex flex-col
min-h-[640px]
"
            >

              <div className="flex items-center justify-between">

                <p className="text-[#8C94A6]">
                  Coming Soon
                </p>

                <span className="
                px-5 py-2
                rounded-full
                bg-[#ECE7DF]
                text-[#9A6B46]
                text-sm
                font-medium
                ">
                  Policy
                </span>

              </div>

              <h3 className="mt-10 text-[2.2rem] font-bold leading-tight text-[#14274E]">
                Product to PhD
              </h3>

              <p className="mt-8 text-[#697386] leading-[2rem] text-[1.05rem]">
                Examining whether “Product to PhD”
                represents genuine structural reform
                in research ecosystems or merely a
                policy slogan shaped by technological
                competition and startup culture.
              </p>

              <div className="mt-auto pt-14">

  <div className="h-[1px] bg-[#E8E2D8]" />

  <div className="mt-8 flex items-center justify-between"></div>

                <p className="text-[#8C94A6]">
                  8 min read
                </p>

                <button className="text-[#9A3B30] font-medium">
                  Coming Soon
                </button>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* BOOKS */}
      <section className="px-6 pb-36">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <h2 className="
            text-5xl
            sm:text-6xl
            font-bold
            text-[#14274E]
            ">
              Books & Reading
            </h2>

            <p className="
            mt-8
            text-xl
            leading-relaxed
            text-[#697386]
            max-w-5xl
            mx-auto
            ">
              Reading across physics, history,
              philosophy, education, literature,
              and technology to understand the
              systems shaping modern civilization.
            </p>

          </div>

          {/* BOOK CARD */}
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
  p-8 lg:p-10
  shadow-sm
  "
>

            <div className="
            grid
            gap-10
            items-center
            lg:grid-cols-[220px_1fr]
            ">

              {/* BOOK IMAGE */}
              <div>

                <img
                  src={brainrace}
                  alt="book"
                  className="
                  w-full
                  max-w-[220px]
                  rounded-[20px]
                  object-cover
                  mx-auto
                  "
                />

              </div>

              {/* CONTENT */}
              <div>

                <span className="
                inline-block
                px-8 py-3
                rounded-full
                bg-[#D3A46B]
                text-white
                font-semibold
                text-lg
                ">
                  Currently Reading
                </span>

                <h3 className="
                mt-8
                text-4xl
                lg:text-5xl
                font-bold
                leading-tight
                text-[#14274E]
                ">
                  The Great Brain Race:
                  How Global Universities
                  Are Reshaping the World
                </h3>

                <p className="
                mt-5
                text-2xl
                italic
                text-[#697386]
                ">
                  by Ben Wildavsky
                </p>

                <p className="
                mt-8
                max-w-4xl
                text-[1.15rem]
                leading-[2.2rem]
                text-[#697386]
                ">
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
<section className="px-6 md:px-10 lg:px-[8%] py-28">

  {/* HEADER */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="text-center"
  >

    <h2 className="text-5xl font-bold text-[#14274E]">
      Speaking & Presentations
    </h2>

  </motion.div>

  {/* RECENT TALKS */}
  <div className="mt-24">

    <h3 className="text-4xl font-bold text-[#14274E]">
      Recent Invited Talks
    </h3>

    <div className="mt-12 space-y-10">

      {/* TALK 1 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
        rounded-[26px]
        border border-[#E8E2D8]
        bg-white
        p-10
        shadow-sm
        "
      >

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

          <div>

            <h4 className="max-w-5xl text-3xl font-bold leading-tight text-[#14274E]">
              The Lost Dimension: How a Typo Became a Scientific Standard in Nanomaterials Research
            </h4>

            <p className="mt-8 text-xl font-semibold text-[#9A6B46]">
              December 12–13, 2025
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              National Conference on Advances in Materials Science (NCAMS-2025)
              <br />
              REVA University, Bengaluru
            </p>

          </div>

          <div className="rounded-full bg-[#F4EFE8] px-6 py-3 text-sm font-semibold text-[#9A6B46]">
            Invited Talk
          </div>

        </div>

      </motion.div>

      {/* TALK 2 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
        rounded-[26px]
        border border-[#E8E2D8]
        bg-white
        p-10
        shadow-sm
        "
      >

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

          <div>

            <h4 className="max-w-5xl text-3xl font-bold leading-tight text-[#14274E] ">
              From Bits to Braids: Computing in Quantum Flatland
            </h4>

            <p className="mt-8 text-xl font-semibold text-[#9A6B46]">
              March 21–22, 2025
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              International Workshop on Quantum Mathematics & Computing (QMAC-2025)
              <br />
              Manipal Institute of Technology, Bengaluru
            </p>

          </div>

          <div className="rounded-full bg-[#F4EFE8] px-6 py-3 text-sm font-semibold text-[#9A6B46]">
            Invited Talk
          </div>

        </div>

      </motion.div>

      {/* TALK 3 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
        rounded-[26px]
        border border-[#E8E2D8]
        bg-white
        p-10
        shadow-sm
        "
      >

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

          <div>

            <h4 className="max-w-5xl text-3xl font-bold leading-tight text-[#14274E]">
              A Century of Quantum Mechanics: Mysteries, Discoveries, and the Nature of Reality
            </h4>

            <p className="mt-8 text-xl font-semibold text-[#9A6B46]">
              February 4, 2025
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              International Year of Quantum Science and Technology
              <br />
              MIT Bengaluru
            </p>

          </div>

          <div className="rounded-full bg-[#F4EFE8] px-6 py-3 text-sm font-semibold text-[#9A6B46]">
            Public Lecture
          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>

{/* SPEAKING ENGAGEMENTS */}
<section className="px-6 md:px-10 lg:px-[8%] pb-28">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="
    rounded-[30px]
    border border-[#E8E2D8]
    bg-white
    p-10 lg:p-14
    shadow-sm
    "
  >

    <h2 className="text-5xl font-bold text-[#14274E]">
      Speaking Engagements
    </h2>

    <p className="mt-8 max-w-4xl text-xl leading-relaxed text-gray-600">
      I am available for keynote addresses, invited talks,
      panel discussions, seminars, and academic conversations on:
    </p>

    <ul className="mt-10 space-y-5 text-lg leading-relaxed text-gray-700">

      <li>• Quantum materials and superconductivity</li>

      <li>• Muon spin spectroscopy and advanced characterization</li>

      <li>• International academic partnerships and student mobility</li>

      <li>• Quantum computing education</li>

      <li>• Science policy and research infrastructure</li>

    </ul>

   <motion.div
  whileHover={{ y: -3 }}
  whileTap={{ scale: 0.98 }}
  className="mt-12 inline-block"
>
  <Link
    to="/connect"
    className="
      rounded-xl
      bg-[#14274E]
      px-10
      py-5
      text-lg
      font-semibold
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:shadow-xl
      inline-block
    "
  >
    Invite Me to Speak
  </Link>
</motion.div>

  </motion.div>

</section>

{/* NEWSLETTER */}
<section className="px-6 md:px-10 lg:px-[8%] pb-32">

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
    px-8
    py-16
    text-center
    shadow-sm
    "
  >

    <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#9A6B46]">
      Newsletter
    </p>

    <h2 className="text-5xl font-bold leading-tight text-[#14274E]">
      Subscribe for Insights
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-gray-600">
      Monthly reflections on quantum physics,
      science policy, emerging technologies,
      and the future of higher education.
    </p>

    <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-4 sm:flex-row">

      <input
        type="email"
        placeholder="Enter your email"
        className="
        h-16
        flex-1
        rounded-xl
        border border-[#E8E2D8]
        bg-[#F8F6F2]
        px-6
        text-lg
        outline-none
        transition
        focus:border-[#14274E]
        "
      />

      <button
        className="
        h-16
        rounded-xl
        bg-[#14274E]
        px-10
        text-lg
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
