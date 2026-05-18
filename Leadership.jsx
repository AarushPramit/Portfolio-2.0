import { motion } from "framer-motion";
import archit from "../assets/fellows/archit.jpg";
import johan from "../assets/fellows/johan.jpeg";
import asmita from "../assets/fellows/asmita.jpeg";
import mohana from "../assets/fellows/mohana.jpeg";
import aniruddh from "../assets/fellows/aniruddh.jpeg";
import ayushi from "../assets/fellows/ayushi.jpeg";
import saanvi from "../assets/fellows/saanvi.jpeg";

const fellows = [
  {
    name: "Archit Chadalawada",
    year: "Since 2023",
    image:
      archit,
    interest:
      "Quantum Computing, Quantum Machine Learning, Computational Neuroscience, Robotics & Autonomous Systems",
    focus:
      "Artificial Intelligence, Quantum Technologies, Leadership, Community Building",
  },

  {
    name: "Johan S Daniel",
    year: "Since 2023",
    image:
      johan,
    interest:
      "AI Safety, Unicode, VR, Polygraphy, Cooperative AI in Chaotic Systems",
    focus:
      "Forecasting Research Institute, USA",
  },

  {
    name: "Asmita Joshi",
    year: "Since 2023",
    image:
      asmita,
    interest:
      "Quantum Information Science, Quantum Communication, Quantum Error Correction",
    focus:
      "Quantum Network Simulations, Graph Theory, Collaborative Leadership",
  },

  {
    name: "Mohana Misra",
    year: "Since 2023",
    image:
      mohana,
    interest:
      "Accessible Technology, AI, Game Development, Quantum Physics",
    focus:
      "Computer Graphics, Computer Vision, Quantum AI, Technical Education",
  },

  {
    name: "Aniruddh Pooli",
    year: "Since 2024",
    image:
      aniruddh,
    interest:
      "Artificial Intelligence, Cyber Security, Data Science",
    focus:
      "Energy Materials, Strategic Coordination, Leadership",
  },

  {
    name: "Ayushi Khubber",
    year: "Since 2025",
    image:
      ayushi,
    interest:
      "Cybersecurity, NLP, Literature & Global Cultures",
    focus:
      "Critical Thinking, Organizational Skills, Philosophy",
  },

  {
    name: "Saanvi Tara",
    year: "Since 2025",
    image:
      saanvi,
    interest:
      "Cybersecurity, Artificial Intelligence, Software Development",
    focus:
      "Network Security, Innovation, Storytelling, Event Leadership",
  },
];

function Leadership() {
  return (
    <div className="overflow-hidden bg-[#F5F3EE] text-[#14274E]">

      {/* HERO */}
      <section className="px-6 pb-24 pt-40 md:px-10 lg:px-[8%]">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >

          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#9A6B46]">
            Leadership Development
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-[1.02] tracking-[-0.05em] text-[#14274E] sm:text-6xl lg:text-7xl">
            Building thoughtful,
            resilient,
            and future-ready leaders.
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-relaxed text-[#5F6775]">
            Leadership development beyond technical education —
            focused on intellectual independence, ethical reasoning,
            institutional awareness, and meaningful contribution.
          </p>

        </motion.div>

      </section>

      {/* PHILOSOPHY */}
      <section className="px-6 py-10 md:px-10 lg:px-[8%]">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <h2 className="mb-12 text-4xl font-bold tracking-tight text-[#14274E] md:text-5xl">
            Philosophy
          </h2>

          <div className="rounded-[24px] border-l-4 border-[#8B3A3A] bg-[#ECE8E1] p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">

            <p className="text-lg leading-[2.1rem] text-[#4E5664]">
              Leadership development, in my approach,
              extends beyond teaching to the deliberate
              cultivation of individuals who can think
              independently, act with integrity,
              and lead with clarity.
              While technical competence remains essential,
              true development lies in building judgment,
              resilience, and the ability to navigate
              complex professional and societal contexts.
            </p>

            <p className="mt-10 text-lg leading-[2.1rem] text-[#4E5664]">
              I believe enduring professional success is an
              integration of personal well-being,
              clarity of purpose,
              and meaningful societal contribution.
              Through open dialogue,
              collaborative inquiry,
              and structured guidance,
              I focus on holistic development —
              enabling individuals to discover purpose,
              build intellectual confidence,
              and evolve into self-directed professionals.
            </p>

          </div>

        </motion.div>

      </section>

      {/* FELLOWS */}
      <section className="px-6 py-28 md:px-10 lg:px-[8%]">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="mb-20">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#9A6B46]">
              Fellows
            </p>

            <h2 className="text-5xl font-bold tracking-tight text-[#14274E]">
              Emerging Leaders
            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">

            {fellows.map((fellow, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -12,
                  scale: 1.015,
                }}
                transition={{ duration: 0.35 }}
                className="
                group h-full overflow-hidden
                rounded-[30px]
                border border-[#E7DED2]
                bg-white
                shadow-sm
                transition-all duration-500
                hover:border-[#D8B07C]
                hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]
                "
              >

                {/* IMAGE */}
                <div className="relative flex justify-center px-8 pt-10">

                  <div className="overflow-hidden rounded-full border-[3px] border-[#D8B07C]">

                    <img
                      src={fellow.image}
                      alt={fellow.name}
                      className="
                      h-[180px] w-[180px]
                      object-cover
                      transition duration-700
                      group-hover:scale-105
                      "
                    />

                  </div>

                </div>

                {/* CONTENT */}
                <div className="flex h-full flex-col px-8 pb-10 pt-8">

                  <div className="text-center">

                    <h3 className="text-[1.7rem] font-bold tracking-tight text-[#14274E]">
                      {fellow.name}
                    </h3>

                    <p className="mt-3 text-[15px] text-[#9A6B46]">
                      {fellow.year}
                    </p>

                  </div>

                  {/* DETAILS */}
                  <div className="mt-8 space-y-6">

                    <div>

                      <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#8B3A3A]">
                        Interests
                      </h4>

                      <p className="text-[15px] leading-7 text-[#5F6775]">
                        {fellow.interest}
                      </p>

                    </div>

                    <div>

                      <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#8B3A3A]">
                        Focus Areas
                      </h4>

                      <p className="text-[15px] leading-7 text-[#5F6775]">
                        {fellow.focus}
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </section>

      {/* COMMUNITY LEADERSHIP */}
<section className="bg-[#F5F3EE] px-6 py-32 md:px-10 lg:px-[8%] overflow-hidden">

  {/* HEADING */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7 }}
    className="mb-24 text-center"
  >

    <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#9A6B46]">
      Community Leadership
    </p>

    <h2 className="text-5xl font-bold tracking-tight text-[#14274E] md:text-6xl">
      Academic & Institutional Engagement
    </h2>

  </motion.div>

  {/* CARDS */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
  transition={{
    staggerChildren: 0.08,
  }}
  className="grid gap-8 md:grid-cols-2 2xl:grid-cols-4"
>

  {/* CARD 1 */}
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        x: -120,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    }}
    transition={{
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }}
    whileHover={{
      y: -10,
    }}
    className="
    flex min-h-[520px] flex-col
    rounded-[34px]
    border border-[#E6DED2]
    bg-white
    p-12
    shadow-[0_10px_30px_rgba(0,0,0,0.04)]
    transition-all duration-500
    hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]
    "
  >

    <h3 className="text-[3rem] font-bold leading-[1.05] tracking-tight text-[#14274E]">
      Faculty
      <br />
      Advisor,
      <br />
      QuantUs
    </h3>

    <p className="mt-12 text-[1.15rem] leading-[2.3rem] text-[#697386]">
      Promoting quantum computing literacy
      through student activities and research.
    </p>

    {/* PUSHES TIMELINE DOWN */}
    <div className="flex-1" />

    <div className="mt-12 h-[1px] bg-[#E6DED2]" />

    <p className="mt-8 text-sm uppercase tracking-[0.28em] text-[#9A6B46]">
      2023 — Present
    </p>

  </motion.div>

  {/* CARD 2 */}
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        x: -120,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    }}
    transition={{
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }}
    whileHover={{
      y: -10,
    }}
    className="
    flex min-h-[520px] flex-col
    rounded-[34px]
    border border-[#E6DED2]
    bg-white
    p-12
    shadow-[0_10px_30px_rgba(0,0,0,0.04)]
    transition-all duration-500
    hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]
    "
  >

    <h3 className="text-[3rem] font-bold leading-[1.05] tracking-tight text-[#14274E]">
      Faculty
      <br />
      Advisor,
      <br />
      IEEE GRSS
      <br />
      Chapter
    </h3>

    <p className="mt-12 text-[1.15rem] leading-[2.3rem] text-[#697386]">
      Supporting student engagement with geoscience
      and remote sensing technologies.
    </p>

    <div className="flex-1" />

    <div className="mt-12 h-[1px] bg-[#E6DED2]" />

    <p className="mt-8 text-sm uppercase tracking-[0.28em] text-[#9A6B46]">
      2024 — Present
    </p>

  </motion.div>

  {/* CARD 3 */}
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        x: -120,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    }}
    transition={{
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }}
    whileHover={{
      y: -10,
    }}
    className="
    flex min-h-[520px] flex-col
    rounded-[34px]
    border border-[#E6DED2]
    bg-white
    p-12
    shadow-[0_10px_30px_rgba(0,0,0,0.04)]
    transition-all duration-500
    hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]
    "
  >

    <h3 className="text-[3rem] font-bold leading-[1.05] tracking-tight text-[#14274E]">
      President,
      <br />
      NDLI MITBLR
      <br />
      Club
    </h3>

    <p className="mt-12 text-[1.15rem] leading-[2.3rem] text-[#697386]">
      Leading initiatives to promote digital education
      and expand access to digital learning resources.
    </p>

    <div className="flex-1" />

    <div className="mt-12 h-[1px] bg-[#E6DED2]" />

    <p className="mt-8 text-sm uppercase tracking-[0.28em] text-[#9A6B46]">
      2024 — Present
    </p>

  </motion.div>

  {/* CARD 4 */}
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        x: -120,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    }}
    transition={{
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }}
    whileHover={{
      y: -10,
    }}
    className="
    flex min-h-[520px] flex-col
    rounded-[34px]
    border border-[#E6DED2]
    bg-white
    p-12
    shadow-[0_10px_30px_rgba(0,0,0,0.04)]
    transition-all duration-500
    hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]
    "
  >

    <h3 className="text-[3rem] font-bold leading-[1.05] tracking-tight text-[#14274E]">
      Faculty
      <br />
      Advisor,
      <br />
      IAESTE
    </h3>

    <p className="mt-12 text-[1.15rem] leading-[2.3rem] text-[#697386]">
      Mentoring students in securing international
      technical internships.
    </p>

    <div className="flex-1" />

    <div className="mt-12 h-[1px] bg-[#E6DED2]" />

    <p className="mt-8 text-sm uppercase tracking-[0.28em] text-[#9A6B46]">
      2023 — Present
    </p>

  </motion.div>

</motion.div>

  

</section>

{/* WHO I WORK WITH */}
<section className="px-6 pb-36 pt-10 md:px-10 lg:px-[8%]">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7 }}
    className="mx-auto max-w-6xl text-center"
  >

    <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#9A6B46]">
      Who I Work With
    </p>

    <h2 className="text-5xl font-bold tracking-tight text-[#14274E] md:text-6xl">
      Building institutions
      for the future of science.
    </h2>
    

    <p className="mx-auto mt-12 max-w-4xl text-xl leading-[2.2rem] text-[#697386]">
      I engage with researchers, early-career professionals,
      and emerging leaders committed to disciplined development,
      intellectual independence, and meaningful contribution.
    </p>

    {/* FRAMEWORK */}
    <div className="mt-24">

      <div className="mb-10 flex items-center justify-center gap-6">

        <div className="h-[1px] w-32 bg-[#DDD3C5]" />

        <p className="text-sm uppercase tracking-[0.35em] text-[#8B3A3A]">
          Development Framework
        </p>

        <div className="h-[1px] w-32 bg-[#DDD3C5]" />

      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <div className="rounded-2xl border border-[#E6DED2] bg-white px-8 py-6 text-[#4E5664] shadow-sm">
          Intellectual rigor and analytical discipline
        </div>

        <div className="rounded-2xl border border-[#E6DED2] bg-white px-8 py-6 text-[#4E5664] shadow-sm">
          Structured reflection and long-term positioning
        </div>

        <div className="rounded-2xl border border-[#E6DED2] bg-white px-8 py-6 text-[#4E5664] shadow-sm">
          Ethical grounding in decision-making
        </div>

        <div className="rounded-2xl border border-[#E6DED2] bg-white px-8 py-6 text-[#4E5664] shadow-sm">
          Institutional and industry awareness
        </div>

        <div className="rounded-2xl border border-[#E6DED2] bg-white px-8 py-6 text-[#4E5664] shadow-sm md:col-span-2">
          Leadership formation beyond technical expertise
        </div>

      </div>

    </div>

  </motion.div>

</section>

    </div>
  );
}

export default Leadership;