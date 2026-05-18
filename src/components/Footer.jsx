import { Link } from "react-router-dom";

function Footer() {
  return (

    <footer className="bg-[#14274E] px-6 md:px-10 lg:px-[8%] py-16 text-white">

      <div className="grid gap-12 lg:grid-cols-3">

        {/* LEFT COLUMN */}
        <div>

          <h3 className="text-4xl font-bold">
            Dr. Anand Pal
          </h3>

          <p className="mt-5 max-w-md text-xl leading-relaxed text-[#D6DCE8]">
            Associate Professor of Physics specializing
            in Quantum Technologies & Global Higher Education.
          </p>

          <div className="mt-8 space-y-5">

            <a
              href="https://scholar.google.com/citations?hl=en&user=8Blz4qgAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg font-medium text-white transition hover:text-[#D8B07C]"
            >
              <span className="text-[#D8B07C]">●</span>
              Google Scholar
            </a>

            <a
              href="https://orcid.org/0000-0003-1602-507X"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg font-medium text-white transition hover:text-[#D8B07C]"
            >
              <span className="text-[#D8B07C]">●</span>
              ORCID: 0000-0003-1602-507X
            </a>

            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=25226051000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg font-medium text-white transition hover:text-[#D8B07C]"
            >
              <span className="text-[#D8B07C]">●</span>
              Scopus ID: 25226051000
            </a>

          </div>

        </div>

        {/* MIDDLE COLUMN */}
        <div>

          <h3 className="text-4xl font-bold">
            Quick Links
          </h3>

          <div className="mt-8 flex flex-col gap-5 text-xl text-[#D6DCE8]">

            <Link
              to="/about"
              className="transition duration-300 hover:translate-x-2 hover:text-white"
            >
              About
            </Link>

            <Link
              to="/publications"
              className="transition duration-300 hover:translate-x-2 hover:text-white"
            >
              Research & Publications
            </Link>

            <Link
              to="/teaching"
              className="transition duration-300 hover:translate-x-2 hover:text-white"
            >
              Teaching
            </Link>

            <Link
              to="/insights"
              className="transition duration-300 hover:translate-x-2 hover:text-white"
            >
              Insights & Perspectives
            </Link>

            <Link
              to="/leadership"
              className="transition duration-300 hover:translate-x-2 hover:text-white"
            >
              Leadership Development
            </Link>

          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div>

          <h3 className="text-4xl font-bold">
            Connect
          </h3>

          <p className="mt-5 max-w-sm text-lg leading-relaxed text-[#D6DCE8]">
            Open to collaborations, invited talks,
            institutional partnerships, and academic initiatives.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/pal-anand/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex h-14 w-14 items-center justify-center
              rounded-full border border-white/20
              text-xl font-semibold
              transition-all duration-300
              hover:-translate-y-2
              hover:border-[#D8B07C]
              hover:text-[#D8B07C]
              "
            >
              in
            </a>

            {/* TWITTER/X */}
            <a
              href="https://x.com/anandpal"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex h-14 w-14 items-center justify-center
              rounded-full border border-white/20
              text-xl font-semibold
              transition-all duration-300
              hover:-translate-y-2
              hover:border-[#D8B07C]
              hover:text-[#D8B07C]
              "
            >
              X
            </a>

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/sandhuanand/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex h-14 w-14 items-center justify-center
              rounded-full border border-white/20
              text-xl font-semibold
              transition-all duration-300
              hover:-translate-y-2
              hover:border-[#D8B07C]
              hover:text-[#D8B07C]
              "
            >
              f
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/anandsandhu_/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex h-14 w-14 items-center justify-center
              rounded-full border border-white/20
              text-xl font-semibold
              transition-all duration-300
              hover:-translate-y-2
              hover:border-[#D8B07C]
              hover:text-[#D8B07C]
              "
            >
              ◎
            </a>

            {/* EMAIL */}
            <a
              href="mailto:sandhu.anand@hotmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex h-14 w-14 items-center justify-center
              rounded-full border border-white/20
              text-xl font-semibold
              transition-all duration-300
              hover:-translate-y-2
              hover:border-[#D8B07C]
              hover:text-[#D8B07C]
              "
            >
              ✉
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-16 border-t border-white/10 pt-8">

        <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row">

          <p className="text-sm uppercase tracking-[0.2em] text-[#AAB6CC]">
            
          </p>

          

        </div>

      </div>

    </footer>

  );
}

export default Footer;
