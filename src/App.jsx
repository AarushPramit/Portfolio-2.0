import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Insights from "./pages/Insights";
import Research from "./pages/Research";
import Teaching from "./pages/Teaching";
import Publications from "./pages/Publications";
import Footer from "./components/Footer";
import Profile from "./assets/Profile.jpg";
import Connect from "./pages/Connect";



function HomePage() {

  

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#14274E]">



      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center justify-between overflow-hidden px-6 md:px-10 lg:px-[8%] pt-32">

        {/* LEFT CONTENT */}
        <div className="z-10 max-w-3xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 uppercase tracking-[0.35em] text-sm text-gray-500"
          >
            Research • Education • Public Reason
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.05] font-bold tracking-tight text-[#14274E]"
          >
            Science,
            <br />
            Technology
            <br />
            & Human Futures
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-500"
          >
            Quantum Physicist | Educator | Public Thinker
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 flex gap-5"
          >

            <motion.div
  whileHover={{
    scale: 1.04,
    y: -2,
  }}
  whileTap={{ scale: 0.97 }}
>
  <Link
    to="/research"
    className="rounded-full bg-[#14274E] px-8 py-4 font-medium text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl inline-block"
  >
    Explore Research
  </Link>
</motion.div>

            <motion.div
  whileHover={{
    scale: 1.04,
    y: -2,
  }}
  whileTap={{ scale: 0.97 }}
>
  <Link
    to="/connect"
    className="rounded-full border border-[#9A6B46] px-8 py-4 font-medium text-[#9A6B46] transition-all duration-500 hover:-translate-y-1 hover:bg-[#9A6B46] hover:text-white inline-block"
  >
    Get in Touch
  </Link>
</motion.div>

          </motion.div>

        </div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative hidden lg:block"
        >

          {/* BACK FRAME */}
          <div className="absolute left-8 top-8 h-[520px] w-[420px] rounded-md border-2 border-[#C08B5C]" />

          {/* IMAGE CARD */}
          <div className="relative h-[520px] w-[420px] overflow-hidden rounded-md bg-white shadow-xl">

            <img
              src={Profile}
              alt="Dr. Anand Pal"
              className="h-full w-full object-cover grayscale will-change-transform"
            />

          </div>

        </motion.div>

        {/* BACKGROUND BLUR */}
        <div className="absolute right-[-150px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#D8C3A5]/30 blur-xl" />

      </section>

      {/* ABOUT SECTION */}
      <section className="px-6 md:px-10 lg:px-[8%] py-32">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-16 lg:grid-cols-2"
        >

          {/* LEFT */}
          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#9A6B46]">
              About
            </p>

            <h2 className="max-w-xl text-2xl sm:text-3xl lg:text-4xl font-bold md:text-5xl font-bold leading-tight text-[#14274E]">
              Advancing conversations
              between science,
              technology & society.
            </h2>

          </div>

          {/* RIGHT */}
          <div>

            <p className="text-lg leading-relaxed text-gray-600">
              This portfolio explores the intersections of
              research, education, leadership, and public
              reasoning. The work spans academic inquiry,
              technological futures, institutional engagement,
              and interdisciplinary collaboration.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              The objective is not only to produce knowledge,
              but also to shape meaningful conversations around
              science and humanity.
            </p>

            {/* ABOUT BUTTON */}
            <motion.a
              href="/about"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 inline-block rounded-full border border-[#14274E] px-7 py-3 font-medium text-[#14274E] transition-all duration-300 hover:bg-[#14274E] hover:text-white"
            >
              About Me →
            </motion.a>

          </div>

        </motion.div>

      </section>

      {/* STATS SECTION */}
      {/* STATS SECTION */}
<section className="px-6 md:px-10 lg:px-[8%] pb-32">

  <div className="rounded-[40px] bg-[#14274E] px-10 py-20 text-white shadow-xl">

    <div className="grid grid-cols-2 gap-y-16 lg:grid-cols-4">

      {/* STAT 1 */}
      <div className="text-center lg:border-r lg:border-white/10">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold sm:text-5xl lg:text-6xl font-bold text-[#D8B07C]">
          66+
        </h2>

        <p className="mt-4 text-sm uppercase tracking-[0.25em] text-gray-300">
          Publications
        </p>

      </div>

      {/* STAT 2 */}
      <div className="text-center lg:border-r lg:border-white/10">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold sm:text-5xl lg:text-6xl font-bold text-[#D8B07C]">
          1,100+
        </h2>

        <p className="mt-4 text-sm uppercase tracking-[0.25em] text-gray-300">
          Citations
        </p>

      </div>

      {/* STAT 3 */}
      <div className="text-center lg:border-r lg:border-white/10">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold sm:text-5xl lg:text-6xl font-bold text-[#D8B07C]">
          19
        </h2>

        <p className="mt-4 text-sm uppercase tracking-[0.25em] text-gray-300">
          H-Index
        </p>

      </div>

      {/* STAT 4 */}
      <div className="text-center">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold sm:text-5xl lg:text-6xl font-bold text-[#D8B07C]">
          15+
        </h2>

        <p className="mt-4 text-sm uppercase tracking-[0.25em] text-gray-300">
          Years in Education
        </p>

      </div>

    </div>

  </div>

</section>
      {/* RESEARCH & INSIGHTS */}
<section className="px-6 md:px-10 lg:px-[8%] py-32 overflow-hidden">

  {/* SECTION HEADER */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7 }}
    className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
  >

    <div>

      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#9A6B46]">
        Recent Updates
      </p>

      <h2 className="text-5xl font-bold text-[#14274E]">
        Research & Insights
      </h2>

    </div>

    <Link
  to="/research"
  className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9A6B46] transition hover:tracking-[0.25em]"
>
  Browse More →
</Link>

  </motion.div>

  {/* ENTIRE GRID ANIMATION */}
  <motion.div
    initial={{ opacity: 0, x: -160 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{
      duration: 0.9,
      ease: "easeOut",
    }}
    className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
  >

    {/* CARD 1 */}
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.015,
      }}
      transition={{ duration: 0.3 }}
      className="group flex min-h-[420px] lg:min-h-[520px] flex-col rounded-[30px] border border-[#E8D7C5] bg-white p-10 shadow-sm transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
    >

      <div className="mb-10 h-[2px] w-16 bg-[#D8B07C]" />

      <h3 className="text-3xl font-bold leading-tight text-[#14274E]">
        Quantum & Emerging Technologies
      </h3>

      <p className="mt-8 text-lg leading-relaxed text-gray-600">
        Exploring quantum and emerging technologies
        to design and optimize next-generation
        materials that enable a sustainable future.
      </p>

      <div className="mt-auto flex items-center justify-between pt-14">

        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#9A6B46]">
          Read Paper
        </span>

        <span className="transition duration-300 group-hover:translate-x-2">
          →
        </span>

      </div>

    </motion.div>

    {/* CARD 2 */}
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.015,
      }}
      transition={{ duration: 0.3 }}
      className="group flex min-h-[420px] lg:min-h-[520px] flex-col rounded-[30px] border border-[#E8D7C5] bg-white p-10 shadow-sm transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
    >

      <div className="mb-10 h-[2px] w-16 bg-[#D8B07C]" />

      <h3 className="text-3xl font-bold leading-tight text-[#14274E]">
        Advanced Materials
      </h3>

      <p className="mt-8 text-lg leading-relaxed text-gray-600">
        Designing functional materials with advanced
        characterization expertise in muon spin
        spectroscopy under extreme conditions.
      </p>

      <div className="mt-auto flex items-center justify-between pt-14">

        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#9A6B46]">
          Read Paper
        </span>

        <span className="transition duration-300 group-hover:translate-x-2">
          →
        </span>

      </div>

    </motion.div>

    {/* CARD 3 */}
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.015,
      }}
      transition={{ duration: 0.3 }}
      className="group flex min-h-[420px] lg:min-h-[520px] flex-col rounded-[30px] border border-[#E8D7C5] bg-white p-10 shadow-sm transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
    >

      <div className="mb-10 h-[2px] w-16 bg-[#D8B07C]" />

      <h3 className="text-3xl font-bold leading-tight text-[#14274E]">
        Science, Technology & Governance
      </h3>

      <p className="mt-8 text-lg leading-relaxed text-gray-600">
        Studying how scientific breakthroughs and
        emerging technologies reshape societies and
        influence governance systems globally.
      </p>

      <div className="mt-auto flex items-center justify-between pt-14">

        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#9A6B46]">
          Read Paper
        </span>

        <span className="transition duration-300 group-hover:translate-x-2">
          →
        </span>

      </div>

    </motion.div>

  </motion.div>

</section>

  {/* GLOBAL LEADERSHIP */}
<section className="px-6 md:px-10 lg:px-[8%] pb-32 overflow-hidden">

  {/* HEADER */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7 }}
    className="mb-20 text-center"
  >

    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold sm:text-5xl lg:text-6xl font-bold text-[#14274E]">
      Global Academic Leadership
    </h2>

    <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-gray-600">
      Building global academic ecosystems through
      international partnerships, mobility pathways,
      and institutional frameworks for cross-border education.
    </p>

  </motion.div>

  {/* ENTIRE GRID ANIMATION */}
  <motion.div
    initial={{ opacity: 0, x: -160 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{
      duration: 0.9,
      ease: "easeOut",
    }}
    className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
  >

    {/* CARD 1 */}
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.015,
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-[30px] border border-[#E8D7C5] bg-white p-10 shadow-sm transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
    >

      <div className="mb-10 h-[2px] w-16 bg-[#D8B07C]" />

      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-bold leading-tight text-[#8B3A3A]">
        International Partnerships
      </h3>

      <p className="mt-8 text-lg leading-relaxed text-gray-600">
        Established strategic collaborations and governance
        frameworks with leading universities across North
        America, Europe, and Oceania.
      </p>

    </motion.div>

    {/* CARD 2 */}
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.015,
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-[30px] border border-[#E8D7C5] bg-white p-10 shadow-sm transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
    >

      <div className="mb-10 h-[2px] w-16 bg-[#D8B07C]" />

      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-bold leading-tight text-[#8B3A3A]">
        Transnational Academic Pathways
      </h3>

      <p className="mt-8 text-lg leading-relaxed text-gray-600">
        Developed joint and dual-degree programs supporting
        integrated international education and mobility.
      </p>

    </motion.div>

    {/* CARD 3 */}
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.015,
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-[30px] border border-[#E8D7C5] bg-white p-10 shadow-sm transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
    >

      <div className="mb-10 h-[2px] w-16 bg-[#D8B07C]" />

      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-bold leading-tight text-[#8B3A3A]">
        Global Mobility Programs
      </h3>

      <p className="mt-8 text-lg leading-relaxed text-gray-600">
        Designed and led student and faculty mobility
        initiatives enabling cross-border academic engagement.
      </p>

    </motion.div>

  </motion.div>

</section>

{/* CONNECT & COLLABORATE */}
<section className="px-6 md:px-10 lg:px-[8%] py-36 overflow-hidden">

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
    className="mx-auto max-w-5xl text-center"
  >

    {/* HEADING */}
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#14274E]">
      Connect & Collaborate
    </h2>

    {/* DESCRIPTION */}
    <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-gray-500">
      I welcome opportunities to collaborate on research,
      build academic and institutional partnerships,
      mentor students, and contribute to global initiatives
      at the intersection of science, education,
      and emerging technologies.
    </p>

    {/* BUTTONS */}
    <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">

     {/* PRIMARY BUTTON */}
<motion.div
  whileHover={{
    y: -4,
    scale: 1.02,
  }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.25 }}
>
  <Link
    to="/connect"
    className="rounded-xl bg-[#111111] px-10 py-5 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 hover:shadow-2xl inline-block"
  >
    Research Collaboration
  </Link>
</motion.div>

{/* SECONDARY BUTTON */}
<motion.div
  whileHover={{
    y: -4,
    scale: 1.02,
  }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.25 }}
>
  <Link
    to="/insights"
    className="rounded-xl border border-[#D8D2C8] bg-white px-10 py-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#14274E] shadow-sm transition-all duration-300 hover:border-[#14274E] hover:shadow-xl inline-block"
  >
    <span className="flex items-center gap-3">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V8.25A2.25 2.25 0 015.25 6h13.5A2.25 2.25 0 0121 8.25v10.5A2.25 0 0118.75 21H5.25A2.25 0 013 18.75z"
        />
      </svg>

      International Relations

    </span>
  </Link>
</motion.div>

    </div>

  </motion.div>

</section>

    </div>
  );
}
function App() {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/research" element={<Research />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
