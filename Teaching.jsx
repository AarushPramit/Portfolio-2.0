import { motion } from "framer-motion";

function Teaching() {
  return (
    <div className="overflow-hidden bg-[#F5F3EE] text-[#14274E]">

      {/* HERO */}
      <section className="px-6 pt-36 pb-16 md:px-10 lg:px-[8%]">

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
            Education & Pedagogy
          </p>

          <h1
            className="
            text-5xl
            sm:text-6xl
            lg:text-[5.5rem]
            font-bold
            leading-[0.95]
            tracking-[-0.06em]
            text-[#14274E]
          "
          >
            Teaching
          </h1>

        </motion.div>

      </section>

      {/* PHILOSOPHY */}
      <section className="px-6 pb-24 md:px-10 lg:px-[8%]">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
          relative
          overflow-hidden
          rounded-[34px]
          border border-[#E4DDD3]
          bg-[#EFEAE2]
          px-10
          py-12
          md:px-14
          md:py-14
        "
        >

          {/* LEFT ACCENT */}
          <div className="absolute left-0 top-0 h-full w-[5px] bg-[#8B3A3A]" />

          <div className="space-y-10">

            <p
              className="
              text-[1.18rem]
              italic
              leading-[2.4rem]
              text-[#697386]
            "
            >
              Leadership development, in my approach, extends beyond teaching to the deliberate cultivation of individuals who can think independently, act with integrity, and lead with clarity. While technical competence remains essential, true development lies in building judgment, resilience, and the ability to navigate complex professional and societal contexts.
            </p>

            <p
              className="
              text-[1.18rem]
              italic
              leading-[2.4rem]
              text-[#697386]
            "
            >
              I believe enduring professional success is an integration of personal well-being, clarity of purpose, and meaningful societal contribution. Through open dialogue, collaborative inquiry, and structured guidance, I focus on holistic development — enabling individuals to discover purpose, build intellectual confidence, and evolve into self-directed professionals.
            </p>

          </div>

        </motion.div>

      </section>

      {/* CURRENT COURSES */}
      <section className="px-6 pb-28 md:px-10 lg:px-[8%] overflow-hidden">

        <div className="mb-14">

          <h2
            className="
            leading-[0.9]
            tracking-[-0.07em]
          "
          >

            <span
              className="
              block
              text-5xl
              sm:text-6xl
              lg:text-[5.5rem]
              font-bold
              text-[#14274E]
            "
            >
              Current Courses
            </span>

            <span
              className="
              block
              text-5xl
              sm:text-6xl
              lg:text-[5.5rem]
              font-bold
              text-[#7D879C]
            "
            >
              (Spring 2026)
            </span>

          </h2>

        </div>

        {/* GRID ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: -160 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="grid gap-8 xl:grid-cols-3"
        >

          {/* CARD 1 */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.015,
            }}
            transition={{ duration: 0.35 }}
            className="
            relative
            group
            will-change-transform
            flex flex-col
            min-h-[520px]
            rounded-[34px]
            border border-[#E5DDD2]
            bg-white
            p-10
            shadow-sm
            transition-all duration-500
            hover:shadow-[0_22px_60px_rgba(0,0,0,0.06)]
          "
          >

            <div
              className="
              absolute
              right-[-14px]
              top-10
              rounded-full
              bg-[#D8B07C]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-md
            "
            >
              Undergraduate
            </div>

            <h3
              className="
              max-w-[85%]
              text-[3.2rem]
              font-bold
              leading-[0.96]
              tracking-[-0.06em]
              text-[#14274E]
            "
            >
              PHYS 1072:
              <br />
              Applied
              Engineering
              Physics
            </h3>

            <p
              className="
              mt-12
              text-[1.12rem]
              leading-[2.3rem]
              text-[#697386]
            "
            >
              Introduction to quantum mechanics,
              LASER and Optical Fiber,
              and Quantum Computing.
            </p>

          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.015,
            }}
            transition={{ duration: 0.35 }}
            className="
            relative
            group
            will-change-transform
            flex flex-col
            min-h-[520px]
            rounded-[34px]
            border border-[#E5DDD2]
            bg-white
            p-10
            shadow-sm
            transition-all duration-500
            hover:shadow-[0_22px_60px_rgba(0,0,0,0.06)]
          "
          >

            <div
              className="
              absolute
              right-[-14px]
              top-10
              rounded-full
              bg-[#A34040]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-md
            "
            >
              Graduate
            </div>

            <h3
              className="
              max-w-[85%]
              text-[3.2rem]
              font-bold
              leading-[0.96]
              tracking-[-0.06em]
              text-[#14274E]
            "
            >
              CMP 7001:
              <br />
              Essentials of
              Condensed
              Matter Physics
            </h3>

            <p
              className="
              mt-12
              text-[1.12rem]
              leading-[2.3rem]
              text-[#697386]
            "
            >
              Advanced topics in quantum mechanics,
              scattering theory,
              and relativistic quantum mechanics.
            </p>

          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.015,
            }}
            transition={{ duration: 0.35 }}
            className="
            relative
            group
            will-change-transform
            flex flex-col
            min-h-[520px]
            rounded-[34px]
            border border-[#E5DDD2]
            bg-white
            p-10
            shadow-sm
            transition-all duration-500
            hover:shadow-[0_22px_60px_rgba(0,0,0,0.06)]
          "
          >

            <div
              className="
              absolute
              right-[-14px]
              top-10
              rounded-full
              bg-[#A34040]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-md
            "
            >
              Graduate
            </div>

            <h3
              className="
              max-w-[85%]
              text-[3.2rem]
              font-bold
              leading-[0.96]
              tracking-[-0.06em]
              text-[#14274E]
            "
            >
              CMP 7002:
              <br />
              Computational
              Methods for
              Condensed
              Matter Physics
            </h3>

            <p
              className="
              mt-12
              text-[1.12rem]
              leading-[2.3rem]
              text-[#697386]
            "
            >
              Computational approaches to condensed matter systems,
              simulations,
              and modeling.
            </p>

          </motion.div>

        </motion.div>

      </section>

      {/* PREVIOUS COURSES */}
      <section className="px-6 pb-28 md:px-10 lg:px-[8%] overflow-hidden">

        <div className="mb-14">

          <h2
            className="
            text-5xl
            sm:text-6xl
            font-bold
            tracking-[-0.05em]
            text-[#14274E]
          "
          >
            Previous Courses
          </h2>

        </div>

        <motion.div
          initial={{ opacity: 0, x: -180 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 2.0,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-6 xl:grid-cols-3"
        >

          {[
            {
              title: "Scientific Thinking & Creativity",
              tag: "Undergraduate",
              desc: "Innovative course developing scientific reasoning and creative approaches to research challenges.",
              date: "Fall 2023",
            },
            {
              title: "Engineering Physics",
              tag: "Undergraduate",
              desc: "Foundational engineering physics covering mechanics, electromagnetism, optics, and modern physics.",
              date: "Fall & Spring 2022",
            },
            {
              title: "Advanced Materials Characterization",
              tag: "Graduate",
              desc: "Graduate-level course covering XRD, μSR, PPMS, SQUID, and advanced characterization techniques.",
              date: "Current",
            },
          ].map((course, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              transition={{ duration: 0.3 }}
              className="
              will-change-transform
              rounded-[26px]
              border border-[#E5DDD2]
              bg-white
              p-7
              shadow-sm
              transition-all duration-500
              hover:shadow-[0_18px_45px_rgba(0,0,0,0.05)]
            "
            >

              <span
                className="
                inline-block
                rounded-full
                bg-[#EFE8E2]
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#8B3A3A]
              "
              >
                {course.tag}
              </span>

              <h3
                className="
                mt-6
                text-[2rem]
                font-bold
                leading-[1.12]
                tracking-[-0.04em]
                text-[#14274E]
              "
              >
                {course.title}
              </h3>

              <p
                className="
                mt-5
                text-[1rem]
                leading-[2rem]
                text-[#697386]
              "
              >
                {course.desc}
              </p>

              <p className="mt-8 text-sm text-[#7A7A7A]">
                {course.date}
              </p>

            </motion.div>
          ))}

        </motion.div>

      </section>

      {/* TEACHING RESOURCES */}
      <section className="px-6 pb-32 md:px-10 lg:px-[8%] overflow-hidden">

        <div className="mb-14">

          <h2
            className="
            text-5xl
            sm:text-6xl
            font-bold
            tracking-[-0.05em]
            text-[#14274E]
          "
          >
            Teaching Resources
          </h2>

        </div>

        <motion.div
          initial={{ opacity: 0, x: -180 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 2.0,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-6 xl:grid-cols-4"
        >

          {[
            {
              title: "Lecture Notes",
              desc: "Comprehensive notes for all major courses.",
            },
            {
              title: "Video Lectures",
              desc: "Recorded lectures and supplementary explanations.",
            },
            {
              title: "Computational Tools",
              desc: "Python notebooks and simulation software.",
            },
            {
              title: "Problem Sets",
              desc: "Curated assignments and guided solutions.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              transition={{ duration: 0.3 }}
              className="
              will-change-transform
              rounded-[26px]
              border border-[#E5DDD2]
              bg-white
              p-7
              shadow-sm
              transition-all duration-500
              hover:shadow-[0_18px_45px_rgba(0,0,0,0.05)]
            "
            >

              <h3
                className="
                text-[2rem]
                font-bold
                leading-[1.15]
                tracking-[-0.04em]
                text-[#14274E]
              "
              >
                {item.title}
              </h3>

              <p
                className="
                mt-5
                text-[1rem]
                leading-[2rem]
                text-[#697386]
              "
              >
                {item.desc}
              </p>

            </motion.div>
          ))}

        </motion.div>

      </section>

    </div>
  );
}

export default Teaching;