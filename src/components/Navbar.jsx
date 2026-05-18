import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  const [hidden, setHidden] = useState(false);

  useEffect(() => {

    let lastScrollY = window.scrollY;

    const controlNavbar = () => {

      const currentScrollY = window.scrollY;

      // SHOW NAVBAR AT TOP
      if (currentScrollY < 80) {
        setHidden(false);
      }

      // HIDE WHEN SCROLLING DOWN
      else if (currentScrollY > lastScrollY) {
        setHidden(true);
      }

      // SHOW WHEN SCROLLING UP
      else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };

  }, []);

  return (

    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: hidden ? -120 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className="fixed left-0 top-0 z-50 w-full"
    >

      <div
        className="
        mx-auto mt-4
        flex h-[86px]
        w-[97%] max-w-[1500px]
        items-center justify-between
        rounded-[28px]
        border border-[#D7D2C8]
        bg-[#F6F4EF]/95
        backdrop-blur-xl
        px-6 lg:px-10
        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
        "
      >

        {/* LOGO */}
        <Link
          to="/"
          className="text-[1.45rem] font-semibold tracking-[-0.03em] text-[#111111]"
        >
          Anand Pal
        </Link>

        {/* CENTER NAV */}
        <div className="hidden lg:flex items-center gap-10">

          <Link
            to="/"
            className="text-[14px] font-medium text-[#666666] transition hover:text-[#111111]"
          >
            Home
          </Link>

          {/* DROPDOWN */}
          <div className="group relative">

            <button
              className="
              flex items-center gap-2
              text-[14px] font-medium
              text-[#666666]
              transition duration-300
              hover:text-[#111111]
              "
            >
              Research & Teaching

              <span className="text-[10px]">
                ▼
              </span>
            </button>

            {/* DROPDOWN MENU */}
            <div
              className="
              invisible absolute left-0 top-[180%]
              w-[220px]
              overflow-hidden rounded-2xl
              border border-[#E4DED2]
              bg-[#F8F6F1]
              opacity-0
              shadow-[0_20px_40px_rgba(0,0,0,0.08)]
              transition-all duration-300
              group-hover:visible
              group-hover:opacity-100
              "
            >

              <Link
  to="/research"
  className="block px-5 py-4 text-[14px] text-[#444] transition hover:bg-[#ECE7DE]"
>
  Research
</Link>

              <Link
                to="/publications"
                className="
                block px-5 py-4 text-[14px]
                text-[#444]
                transition
                hover:bg-[#ECE7DE]
                "
              >
                Publications
              </Link>

              <Link
                to="/teaching"
                className="
                block px-5 py-4 text-[14px]
                text-[#444]
                transition
                hover:bg-[#ECE7DE]
                "
              >
                Teaching
              </Link>

            </div>

          </div>

          <Link
            to="/insights"
            className="text-[14px] font-medium text-[#666666] transition hover:text-[#111111]"
          >
            Insights & Perspectives
          </Link>

          <Link
            to="/leadership"
            className="text-[14px] font-medium text-[#666666] transition hover:text-[#111111]"
         >
            Leadership Development
          </Link>

          <Link
            to="/about"
            className="text-[14px] font-medium text-[#666666] transition hover:text-[#111111]"
          >
            About
          </Link>

        </div>

        {/* CTA */}
        <Link
  to="/connect"
  className="
  hidden lg:flex
  h-[48px]
  items-center justify-center
  rounded-xl
  bg-[#111111]
  px-7
  text-[14px]
  font-semibold
  text-white
  transition duration-300
  hover:scale-[1.02]
  hover:bg-[#222]
  "
>
  Contact
</Link>

      </div>

    </motion.nav>
  );
}

export default Navbar;
