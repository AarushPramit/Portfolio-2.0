import { motion } from "framer-motion";

const publications = [
  {
    title:
      "A dimensionally consistent size–strain plot method for crystallite size and microstrain estimation",
    authors: "Anand Pal",
    journal:
      "Journal of Alloys and Compounds, 1048, 185324 (2025)",
    link: "#",
  },

  {
    title:
      "Tuning optical and thermoelectric properties of LaCoO3: Partial substitution of La by isovalent Gd",
    authors:
      "U. Deepika Shanubhogue, Anand Pal, Ashok Rao, Saikat Chattopadhyay",
    journal:
      "Journal of Alloys and Compounds, 941 (2023)",
    link: "#",
  },

  {
    title:
      "Tuning the semimetallic charge transport in the Weyl semimetal candidate Eu2Ir2O7(111) epitaxial thin film with an all-in-all-out spin structure",
    authors:
      "Mithun Ghosh, Shwetha G. Bhat, Anand Pal, P. S. Anil Kumar",
    journal:
      "Journal of Physics: Condensed Matter, 34 (2022)",
    link: "#",
  },

  {
    title:
      "Investigation of cationic disorder effects on the transport and magnetic properties of perovskite Pr0.7-xRExSr0.3MnO3 (RE = Nd, Sm, Gd)",
    authors:
      "Anand Pal, Ashok Rao, Dhananjaya Kekuda, B. S. Nagaraja",
    journal:
      "Journal of Magnetism and Magnetic Materials, 512 (2020)",
    link: "#",
  },

  {
    title:
      "Magnetic field induced effects in the qusikagome Kondo lattice system CePtPb",
    authors:
      "A. C. Y. Fang, S. R. Dunsiger, Anand Pal, K. Akintola",
    journal:
      "Physical Review B, 100 (2019)",
    link: "#",
  },

  {
    title:
      "Freezing out of a low-energy bulk spin exciton in SmB6",
    authors:
      "Kolawole Akintola, Anand Pal, Sarah R. Dunsiger",
    journal:
      "npj Quantum Materials, 3 (2018)",
    link: "#",
  },

  {
    title:
      "Quasi-static internal magnetic field detected in the pseudogap phase of Bi2+xSr2-xCaCu2O8+δ",
    authors:
      "Anand Pal, S. R. Dunsiger, K. Akintola",
    journal:
      "Physical Review B, 97 (2018)",
    link: "#",
  },

  {
    title:
      "Quantum spin fluctuations in the bulk insulating state of pure and Fe-doped SmB6",
    authors:
      "K. Akintola, Anand Pal, M. Potma",
    journal:
      "Physical Review B, 95 (2017)",
    link: "#",
  },

  {
    title:
      "Investigation of potential fluctuating intra-unit cell magnetic order in cuprates by μSR",
    authors:
      "Anand Pal, K. Akintola, M. Potma",
    journal:
      "Physical Review B, 94 (2016)",
    link: "#",
  },

  {
    title:
      "Metallic monoclinic phase in VO2 induced by electrochemical gating: In situ Raman study",
    authors:
      "Satyendra Nath Gupta, Anand Pal, D. V. S. Muthu",
    journal:
      "EPL, 115 (2016)",
    link: "#",
  },

  {
    title:
      "Common effect of chemical and external pressures on the magnetic properties of RCoPO (R = La, Pr, Nd, Sm)",
    authors:
      "G. Prando, G. Profeta, Anand Pal",
    journal:
      "Physical Review B, 92 (2015)",
    link: "#",
  },

  {
    title:
      "Magnetic phase transitions in SmCoAsO",
    authors:
      "V. P. S. Awana, I. Nowik, Anand Pal",
    journal:
      "Physical Review B, 81 (2010)",
    link: "#",
  },
];

export default function Publications() {
  return (
    <section className="bg-[#F7F5F1] px-6 md:px-10 lg:px-[8%] pt-36 pb-28 overflow-hidden">

      {/* HERO */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl"
      >

        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#B57A45]">
          Scopus / Web of Science Indexed
        </p>

        <h1 className="text-[4.5rem] leading-[0.95] font-bold tracking-[-0.04em] text-[#14274E]">
          Selected Publications
        </h1>

        <p className="mt-10 max-w-4xl text-[1.45rem] leading-[2.3rem] text-[#6B7280]">
          Research contributions spanning condensed matter physics,
          quantum materials, thermoelectric systems, muon spin spectroscopy,
          and emerging computational approaches in materials science.
        </p>

      </motion.div>

      {/* BUTTONS */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-14 flex flex-wrap items-center gap-6"
      >

        {/* GOOGLE SCHOLAR */}

        <motion.a
          href="https://scholar.google.com/citations?hl=en&user=8Blz4qgAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            y: -4,
            scale: 1.02,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="
          group
          relative
          inline-flex
          items-center
          justify-center
          overflow-hidden
          rounded-2xl
          border
          border-[#9B3D3D]
          px-10
          py-5
          min-w-[320px]
          bg-transparent
          text-[18px]
          font-semibold
          text-[#9B3D3D]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-[0_12px_35px_rgba(155,61,61,0.12)]
          "
        >

          <span className="relative z-10 flex items-center gap-3">
            View Google Scholar

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>

        </motion.a>

        {/* SCOPUS */}

        <motion.a
          href="https://www.scopus.com/authid/detail.uri?authorId=25226051000"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            y: -4,
            scale: 1.02,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="
          group
          relative
          inline-flex
          items-center
          justify-center
          overflow-hidden
          rounded-2xl
          border
          border-[#9B3D3D]
          px-10
          py-5
          min-w-[320px]
          bg-transparent
          text-[18px]
          font-semibold
          text-[#9B3D3D]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-[0_12px_35px_rgba(155,61,61,0.12)]
          "
        >

          <span className="relative z-10 flex items-center gap-3">
            View Scopus Profile

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>

        </motion.a>

      </motion.div>

      {/* PUBLICATIONS */}

      <div className="mt-24 flex flex-col gap-8">

        {publications.map((pub, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.7,
              delay: index * 0.04,
              ease: "easeOut",
            }}
            whileHover={{
              y: -4,
            }}
            className="
                rounded-[24px]
                border
                border-[#E7DED2]
                bg-white
                px-8
                py-7
                shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_14px_35px_rgba(0,0,0,0.05)]
                "
            >

            <div className="mb-5 h-[42px] w-[4px] rounded-full bg-[#9B3D3D]" /> 

            <h2 className="max-w-6xl text-[1.5rem] font-bold leading-[1.35] tracking-[-0.02em] text-[#14274E]">
              {pub.title}
            </h2>

            <p className="mt-6 text-[1.15rem] leading-8 text-[#7B8190]">
              {pub.authors}
            </p>

            <a
              href={pub.link}
              className="
              mt-7
              inline-block
              text-[1.2rem]
              italic
              text-[#9B3D3D]
              underline-offset-4
              transition-all
              duration-300
              hover:underline
              "
            >
              {pub.journal}
            </a>

          </motion.div>

        ))}

      </div>

      {/* BOTTOM BUTTON */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24"
      >

        <motion.a
          href="https://scholar.google.com/citations?hl=en&user=8Blz4qgAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            y: -4,
            scale: 1.02,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="
          inline-flex
          items-center
          gap-3
          rounded-2xl
          border
          border-[#9B3D3D]
          px-10
          py-5
          text-[18px]
          font-semibold
          text-[#9B3D3D]
          transition-all
          duration-500
          hover:shadow-[0_12px_35px_rgba(155,61,61,0.12)]
          "
        >

          View All 66+ Publications on Google Scholar →

        </motion.a>

      </motion.div>

    </section>
  );
}
