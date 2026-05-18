import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import asha from "../assets/fellows/asha.jpg";
import anusha from "../assets/fellows/anusha.jpg";

function Research() {
  return (
    <div className="overflow-hidden bg-[#F5F3EE] text-[#14274E]">

      {/* HERO */}
      <section className="px-6 pt-36 pb-20 md:px-10 lg:px-[8%]">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-6xl"
        >

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#9A6B46]">
            Research & Teaching
          </p>

          <h1
            className="
            max-w-5xl
            text-5xl
            sm:text-6xl
            lg:text-[6rem]
            font-bold
            leading-[0.95]
            tracking-[-0.06em]
            text-[#14274E]
          "
          >
            Quantum Science,
            Advanced
            Materials,
            and Technological
            Futures.
          </h1>

          <p
            className="
            mt-14
            max-w-4xl
            text-[1.3rem]
            leading-[2.2rem]
            text-[#697386]
          "
          >
            Research spanning quantum materials,
            sustainable energy systems,
            emerging technologies,
            and the broader institutional impact
            of scientific innovation.
          </p>

        </motion.div>

      </section>

      {/* RESEARCH OVERVIEW */}
      <section className="px-6 py-20 md:px-10 lg:px-[8%]">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[1500px]"
        >

          <h2
            className="
            text-5xl
            sm:text-6xl
            font-bold
            tracking-[-0.04em]
            text-[#14274E]
          "
          >
            Research Overview
          </h2>

          <div className="mt-14 space-y-12">

            <p
              className="
              text-[1.18rem]
              leading-[2.3rem]
              text-[#4E5664]
            "
            >
              My research explores the fundamental interactions that lead to emergent phenomena in quantum materials, particularly in the context of sustainable energy applications. I am interested in both the design and experimental investigation of novel quantum systems, using advanced characterization techniques. Increasingly, I integrate computational and data-driven approaches to accelerate materials discovery and deepen physical insight.
            </p>

            <p
              className="
              text-[1.18rem]
              leading-[2.3rem]
              text-[#4E5664]
            "
            >
              Beyond laboratory research, I engage with the history of science and the public understanding of scientific knowledge. I am also interested in how emerging technologies influence economic systems, institutional structures, and ethical frameworks.
            </p>

          </div>

        </motion.div>

      </section>

      {/* RESEARCH AREAS */}
      <section className="px-6 py-24 md:px-10 lg:px-[8%] overflow-hidden">

        <div className="mb-16">

          <h2
            className="
            text-5xl
            sm:text-6xl
            font-bold
            tracking-[-0.04em]
            text-[#8B3A3A]
          "
          >
            Research Areas
          </h2>

        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            staggerChildren: 0.18,
          }}
          className="grid gap-8 xl:grid-cols-3"
        >

          {/* CARD 1 */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -120,
                y: 40,
              },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
              },
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
            }}
            className="
            group
            will-change-transform
            rounded-[28px]
            border border-[#E5DDD2]
            bg-white
            p-10
            shadow-sm
            transition-all duration-500
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          "
          >

            <div
              className="
              h-14
              w-14
              rounded-2xl
              bg-[#F3EEE8]
              flex items-center justify-center
            "
            >

              <div
                className="
                h-5
                w-5
                rounded-full
                border-2 border-[#8B3A3A]
                relative
              "
              >
                <div className="absolute inset-[-7px] rounded-full border border-[#8B3A3A]/30" />
                <div className="absolute inset-[-14px] rounded-full border border-[#8B3A3A]/10" />
              </div>

            </div>

            <h3
              className="
              mt-10
              text-[2rem]
              font-bold
              leading-[1.05]
              tracking-tight
              text-[#8B3A3A]
            "
            >
              Quantum &
              Emerging
              Technologies
            </h3>

            <p
              className="
              mt-8
              text-[1.02rem]
              leading-[2rem]
              text-[#697386]
            "
            >
              Exploring quantum and emerging technologies to design and optimize next-generation materials that enable a sustainable technological future.
            </p>

          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 80,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
            }}
            className="
            group
            will-change-transform
            rounded-[28px]
            border border-[#E5DDD2]
            bg-white
            p-10
            shadow-sm
            transition-all duration-500
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          "
          >

            <div
              className="
              h-14
              w-14
              rounded-2xl
              bg-[#F3EEE8]
              flex items-center justify-center
            "
            >

              <div
                className="
                h-6
                w-6
                rounded-full
                border-2 border-[#8B3A3A]
                flex items-center justify-center
              "
              >
                <div className="h-2 w-2 rounded-full bg-[#8B3A3A]" />
              </div>

            </div>

            <h3
              className="
              mt-10
              text-[2rem]
              font-bold
              leading-[1.05]
              tracking-tight
              text-[#8B3A3A]
            "
            >
              Advanced
              Materials
            </h3>

            <p
              className="
              mt-8
              text-[1.02rem]
              leading-[2rem]
              text-[#697386]
            "
            >
              Designing functional materials, with advanced characterization expertise in muon spin spectroscopy at TRIUMF, PSI, and RAL, to investigate their behavior under extreme conditions.
            </p>

          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 120,
                y: 40,
              },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
              },
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
            }}
            className="
            group
            will-change-transform
            rounded-[28px]
            border border-[#E5DDD2]
            bg-white
            p-10
            shadow-sm
            transition-all duration-500
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          "
          >

            <div
              className="
              h-14
              w-14
              rounded-2xl
              bg-[#F3EEE8]
              flex items-center justify-center
            "
            >

              <div
                className="
                h-6
                w-6
                border-2 border-[#8B3A3A]
              "
              />

            </div>

            <h3
              className="
              mt-10
              text-[2rem]
              font-bold
              leading-[1.05]
              tracking-tight
              text-[#8B3A3A]
            "
            >
              Science,
              Technology &
              Governance
            </h3>

            <p
              className="
              mt-8
              text-[1.02rem]
              leading-[2rem]
              text-[#697386]
            "
            >
              Studying how scientific breakthroughs and emerging technologies reshape societies by influencing governance systems, economic structures, ethical discourse, and global power dynamics.
            </p>

          </motion.div>

        </motion.div>

      </section>

      {/* RESEARCH GROUP */}
      <section className="px-6 py-24 md:px-10 lg:px-[8%]">

        <div className="mb-16">

          <h2
            className="
            text-5xl
            sm:text-6xl
            font-bold
            tracking-[-0.04em]
            text-[#14274E]
          "
          >
            Research Group
          </h2>

        </div>

        {/* PHD STUDENTS */}
        <div>

          <h3
            className="
            text-5xl
            font-bold
            tracking-[-0.04em]
            text-[#8B3A3A]
          "
          >
            Current PhD Students
          </h3>

          <div className="mt-14 grid gap-8 xl:grid-cols-2">

            {/* STUDENT 1 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="
              rounded-[28px]
              border border-[#E5DDD2]
              bg-white
              p-8
              shadow-sm
              transition-all duration-500
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]
            "
            >

              <div className="flex justify-center">

                <div className="overflow-hidden rounded-full border-[3px] border-[#D8B07C]">

                  <img
                    src={asha}
                    alt="Asha"
                    className="h-[220px] w-[220px] object-cover"
                  />

                </div>

              </div>

              <div className="mt-8">

                <span
                  className="
                  inline-block
                  rounded-full
                  bg-[#EEE7FA]
                  px-5 py-3
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#4A32C3]
                "
                >
                  PhD Candidate
                </span>

                <h3
                  className="
                  mt-7
                  text-[1.8rem]
                  font-bold
                  tracking-tight
                  text-[#8B3A3A]
                "
                >
                  Asha Bhandarkar
                </h3>

                <p className="mt-4 text-[1.05rem] text-[#8B3A3A]">
                  Since Feb 2024
                </p>

                <div className="mt-7 space-y-4">

                  <p className="text-[1.02rem] leading-relaxed text-[#4E5664]">
                    <span className="font-bold">
                      Research:
                    </span>{" "}
                    Sustainable Energy Materials
                  </p>

                  <p className="text-[1.02rem] leading-relaxed text-[#4E5664]">
                    <span className="font-bold">
                      Background:
                    </span>{" "}
                    M.Sc. Physics, MAHE, Manipal, Karnataka
                  </p>

                </div>

              </div>

            </motion.div>

            {/* STUDENT 2 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="
              rounded-[28px]
              border border-[#E5DDD2]
              bg-white
              p-8
              shadow-sm
              transition-all duration-500
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]
            "
            >

              <div className="flex justify-center">

                <div className="overflow-hidden rounded-full border-[3px] border-[#D8B07C]">

                  <img
                    src={anusha}
                    alt="Anusha"
                    className="h-[220px] w-[220px] object-cover"
                  />

                </div>

              </div>

              <div className="mt-8">

                <span
                  className="
                  inline-block
                  rounded-full
                  bg-[#EEE7FA]
                  px-5 py-3
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#4A32C3]
                "
                >
                  PhD Candidate
                </span>

                <h3
                  className="
                  mt-7
                  text-[1.8rem]
                  font-bold
                  tracking-tight
                  text-[#8B3A3A]
                "
                >
                  Anusha TT
                </h3>

                <p className="mt-4 text-[1.05rem] text-[#8B3A3A]">
                  Since Feb 2025
                </p>

                <div className="mt-7 space-y-4">

                  <p className="text-[1.02rem] leading-relaxed text-[#4E5664]">
                    <span className="font-bold">
                      Research:
                    </span>{" "}
                    Multivalent Battery Materials
                  </p>

                  <p className="text-[1.02rem] leading-relaxed text-[#4E5664]">
                    <span className="font-bold">
                      Background:
                    </span>{" "}
                    M.Sc. Computational Chemistry, CUP, Bathinda, Punjab
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

        {/* UG RESEARCHERS */}
        <div className="mt-24">

          <h3
            className="
            text-5xl
            font-bold
            tracking-[-0.04em]
            text-[#14274E]
          "
          >
            Undergraduate Researchers
          </h3>

          <div className="mt-12 grid gap-8 xl:grid-cols-2">

            {/* UG 1 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -6 }}
              className="
              rounded-[26px]
              border border-[#E5DDD2]
              bg-white
              p-8
              shadow-sm
              transition-all duration-500
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]
            "
            >

              <span
                className="
                inline-block
                rounded-full
                bg-[#E6EEF9]
                px-5 py-3
                text-xs
                font-bold
                uppercase
                tracking-[0.14em]
                text-[#1D63D1]
              "
              >
                UG Researcher
              </span>

              <h3
                className="
                mt-7
                text-[1.8rem]
                font-bold
                tracking-tight
                text-[#8B3A3A]
              "
              >
                Johan S. Daniel
              </h3>

              <p className="mt-4 text-[1.05rem] text-[#8B3A3A]">
                Since November 2023
              </p>

              <div className="mt-7 space-y-4">

                <p className="text-[1.02rem] leading-relaxed text-[#4E5664]">
                  <span className="font-bold">
                    Research:
                  </span>{" "}
                  Vulnerabilities and comprehension abilities of LLMs
                </p>

                <p className="text-[1.02rem] leading-relaxed text-[#4E5664]">
                  <span className="font-bold">
                    Background:
                  </span>{" "}
                  B.Tech. MIT Bengaluru
                </p>

              </div>

            </motion.div>

            {/* UG 2 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -6 }}
              className="
              rounded-[26px]
              border border-[#E5DDD2]
              bg-white
              p-8
              shadow-sm
              transition-all duration-500
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]
            "
            >

              <span
                className="
                inline-block
                rounded-full
                bg-[#E6EEF9]
                px-5 py-3
                text-xs
                font-bold
                uppercase
                tracking-[0.14em]
                text-[#1D63D1]
              "
              >
                UG Researcher
              </span>

              <h3
                className="
                mt-7
                text-[1.8rem]
                font-bold
                tracking-tight
                text-[#8B3A3A]
              "
              >
                Aniruddh Pooli
              </h3>

              <p className="mt-4 text-[1.05rem] text-[#8B3A3A]">
                Since May 2025
              </p>

              <div className="mt-7 space-y-4">

                <p className="text-[1.02rem] leading-relaxed text-[#4E5664]">
                  <span className="font-bold">
                    Research:
                  </span>{" "}
                    Data-driven design of energy materials
                </p>

                <p className="text-[1.02rem] leading-relaxed text-[#4E5664]">
                  <span className="font-bold">
                    Background:
                  </span>{" "}
                    B.Tech. MIT Bengaluru
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* JOIN RESEARCH GROUP */}
      <section className="px-6 pb-32 md:px-10 lg:px-[8%]">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="
          rounded-[34px]
          border border-[#E5DDD2]
          bg-[#14274E]
          px-8
          py-20
          text-center
        "
        >

          <h2
            className="
            text-4xl
            sm:text-5xl
            font-bold
            tracking-tight
            text-white
          "
          >
            Join the Research Group
          </h2>

          <p
            className="
            mx-auto
            mt-8
            max-w-4xl
            text-[1.2rem]
            leading-[2.2rem]
            text-white/80
          "
          >
            I welcome motivated students interested in quantum materials, green energy, and computational physics. PhD and undergraduate research positions available.
          </p>

          <Link
            to="/connect"
            className="
            mt-12
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-white
            px-10
            py-5
            text-sm
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#14274E]
            transition-all duration-300
            hover:scale-[1.03]
          "
          >
            Get in Touch →
          </Link>

        </motion.div>

      </section>

    </div>
  );
}

export default Research;