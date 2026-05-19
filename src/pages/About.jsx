import { motion } from "framer-motion";
import Aboutphoto from "../assets/Aboutphoto.jpeg";

function About() {
  return (
    <div className="bg-[#F5F3EE] text-[#14274E]">

      {/* HERO SECTION */}
      <section
        className="
        mx-auto
        max-w-[1400px]
        px-6
        pb-20
        pt-32

        md:pt-36

        lg:px-12
        lg:pb-24
        lg:pt-40
        "
      >

        <div
          className="
          grid
          items-start
          gap-14

          lg:grid-cols-[420px_1fr]
          lg:gap-16
          "
        >

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative lg:sticky lg:top-32"
          >

            <div
              className="
              mx-auto
              overflow-hidden
              rounded-[28px]
              bg-white
              shadow-[0_10px_40px_rgba(0,0,0,0.06)]

              max-w-[340px]

              sm:max-w-[420px]

              lg:max-w-none
              "
            >

              <img
                src={Aboutphoto}
                alt="Dr Anand Pal"
                className="
                h-full
                w-full
                object-cover
                "
              />

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >

            {/* LABEL */}
            <p
              className="
              mb-5
              text-sm
              uppercase
              tracking-[0.25em]
              text-[#9A6B46]
              "
            >
              About
            </p>

            {/* TITLE */}
            <h1
              className="
              max-w-4xl

              text-[3.4rem]
              font-bold
              leading-[0.98]
              tracking-[-0.05em]
              text-[#14274E]

              sm:text-6xl

              lg:text-7xl
              "
            >
              Science,
              education,
              and the institutions
              shaping tomorrow.
            </h1>

            {/* SUBTEXT */}
            <p
              className="
              mt-7
              max-w-3xl

              text-[1.12rem]
              leading-relaxed
              text-[#5E6472]

              sm:text-xl
              "
            >
              A journey through quantum physics,
              higher education, institutional leadership,
              and the ideas shaping technological futures.
            </p>

            {/* BIOGRAPHY */}
            <div
              className="
              mt-12
              space-y-8

              lg:mt-16
              lg:space-y-10
              "
            >

              <p
                className="
                text-[1.02rem]
                leading-[1.95rem]
                text-[#444B57]

                sm:text-[1.12rem]
                sm:leading-[2rem]
                "
              >
                I am a quantum physicist, educator,
                and institutional strategist dedicated to the idea
                that the future will be defined not just by what
                we discover, but by the quality of our public
                reasoning and the strength of the institutions
                we build to guide it.
              </p>

              <p
                className="
                text-[1.02rem]
                leading-[1.95rem]
                text-[#444B57]

                sm:text-[1.12rem]
                sm:leading-[2rem]
                "
              >
                While my technical research centers on quantum
                technologies and advanced energy systems,
                my broader interests explore how emerging
                technologies intersect with ethics,
                economic systems, governance,
                and global power structures.
              </p>

              <p
                className="
                text-[1.02rem]
                leading-[1.95rem]
                text-[#444B57]

                sm:text-[1.12rem]
                sm:leading-[2rem]
                "
              >
                Education, for me, is not peripheral to science
                but fundamental to civilization itself.
                I remain deeply committed to building
                institutions that expand opportunity,
                strengthen intellectual culture,
                and cultivate responsible leadership
                for an era of accelerating technological change.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ACADEMIC JOURNEY */}
      <section
        className="
        mx-auto
        max-w-[1400px]
        px-6
        py-20

        lg:px-12
        lg:py-24
        "
      >

        {/* SECTION LABEL */}
        <p
          className="
          mb-4
          text-sm
          uppercase
          tracking-[0.25em]
          text-[#9A6B46]
          "
        >
          Timeline
        </p>

        {/* HEADING */}
        <h2
          className="
          text-[2.7rem]
          font-bold
          leading-tight
          tracking-[-0.04em]
          text-[#14274E]

          sm:text-5xl
          "
        >
          Academic Journey
        </h2>

        {/* TIMELINE */}
        <div
          className="
          mt-14
          border-l
          border-[#D9D3C8]
          pl-7

          sm:pl-10

          lg:mt-20
          "
        >

          {/* ITEM */}
          <div className="relative pb-16">

            <div className="absolute -left-[34px] top-2 h-4 w-4 rounded-full bg-[#14274E] sm:-left-[46px]" />

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-[#9A6B46]">
              2026 — Present
            </p>

            <h3
              className="
              text-[1.7rem]
              font-bold
              leading-tight
              text-[#14274E]

              sm:text-3xl
              "
            >
              Associate Dean, School of Basic Sciences,
              Humanities & Management
            </h3>

            <p className="mt-5 max-w-5xl text-base leading-relaxed text-[#505866] sm:text-lg">
              Leading academic and institutional initiatives
              focused on interdisciplinary growth,
              educational quality,
              faculty development,
              and international engagement.
            </p>

          </div>

          {/* ITEM */}
          <div className="relative pb-16">

            <div className="absolute -left-[34px] top-2 h-4 w-4 rounded-full bg-[#14274E] sm:-left-[46px]" />

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-[#9A6B46]">
              2024 — Present
            </p>

            <h3
              className="
              text-[1.7rem]
              font-bold
              leading-tight
              text-[#14274E]

              sm:text-3xl
              "
            >
              Associate Professor
            </h3>

            <p className="mt-5 max-w-5xl text-base leading-relaxed text-[#505866] sm:text-lg">
              Advancing research in quantum materials,
              energy systems,
              and emerging technologies
              while integrating modern scientific thinking
              into higher education.
            </p>

          </div>

          {/* ITEM */}
          <div className="relative pb-16">

            <div className="absolute -left-[34px] top-2 h-4 w-4 rounded-full bg-[#14274E] sm:-left-[46px]" />

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-[#9A6B46]">
              2024 — 2026
            </p>

            <h3
              className="
              text-[1.7rem]
              font-bold
              leading-tight
              text-[#14274E]

              sm:text-3xl
              "
            >
              Assistant Director - International Collaborations
            </h3>

            <p className="mt-5 max-w-5xl text-base leading-relaxed text-[#505866] sm:text-lg">
              Developed strategic global partnerships,
              mobility pathways,
              and institutional collaborations
              designed to strengthen international academic ecosystems.
            </p>

          </div>

          {/* ITEM */}
          <div className="relative pb-16">

            <div className="absolute -left-[34px] top-2 h-4 w-4 rounded-full bg-[#14274E] sm:-left-[46px]" />

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-[#9A6B46]">
              2021 — 2024
            </p>

            <h3
              className="
              text-[1.7rem]
              font-bold
              leading-tight
              text-[#14274E]

              sm:text-3xl
              "
            >
              Assistant Professor
            </h3>

            <p className="mt-5 max-w-5xl text-base leading-relaxed text-[#505866] sm:text-lg">
              Developed new courses in quantum physics and materials science
              while building a research group focused on advanced materials,
              superconductivity, and emerging energy systems.
            </p>

          </div>

          {/* ITEM */}
          <div className="relative pb-16">

            <div className="absolute -left-[34px] top-2 h-4 w-4 rounded-full bg-[#14274E] sm:-left-[46px]" />

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-[#9A6B46]">
              2014 — 2021
            </p>

            <h3
              className="
              text-[1.7rem]
              font-bold
              leading-tight
              text-[#14274E]

              sm:text-3xl
              "
            >
              Postdoctoral Research Fellow
            </h3>

            <p className="mt-5 max-w-5xl text-base leading-relaxed text-[#505866] sm:text-lg">
              Conducted advanced research in quantum materials and
              superconductivity at IISc and Simon Fraser University,
              collaborating with leading international laboratories
              and research facilities.
            </p>

          </div>

          {/* ITEM */}
          <div className="relative">

            <div className="absolute -left-[34px] top-2 h-4 w-4 rounded-full bg-[#14274E] sm:-left-[46px]" />

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-[#9A6B46]">
              2008 — 2013
            </p>

            <h3
              className="
              text-[1.7rem]
              font-bold
              leading-tight
              text-[#14274E]

              sm:text-3xl
              "
            >
              Ph.D. in Physics
            </h3>

            <p className="mt-5 max-w-5xl text-base leading-relaxed text-[#505866] sm:text-lg">
              Explored emergent quantum phenomena in iron-based oxypnictides
              and chalcogenides, focusing on the interplay between
              magnetism and superconductivity using advanced spectroscopic techniques.
            </p>

          </div>

        </div>

      </section>

      {/* LOOKING FORWARD */}
      <section
        className="
        px-6
        pb-24
        pt-6

        md:px-10

        lg:px-[8%]
        lg:pb-32
        "
      >

        <div className="mx-auto max-w-5xl text-center">

          {/* LABEL */}
          <p
            className="
            mb-5
            text-sm
            uppercase
            tracking-[0.3em]
            text-[#9A6B46]
            "
          >
            Looking Forward
          </p>

          {/* TITLE */}
          <h2
            className="
            text-[2.8rem]
            font-bold
            leading-[1.02]
            tracking-[-0.05em]
            text-[#14274E]

            md:text-6xl
            "
          >
            Building institutions
            for the future of science.
          </h2>

          {/* TEXT */}
          <p
            className="
            mx-auto
            mt-8
            max-w-4xl

            text-[1.08rem]
            leading-relaxed
            text-[#667085]

            sm:text-xl

            lg:mt-10
            "
          >
            As emerging technologies reshape societies,
            I seek to contribute not only through scientific research,
            but also through building educational systems,
            global collaborations, and ethical frameworks
            capable of guiding technological transformation responsibly.
          </p>

        </div>

      </section>

    </div>
  );
}

export default About;
