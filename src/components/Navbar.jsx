import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import "../styles/nav.scss";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = (e, page) => {
    // e.preventDefault();
    setIsMenuOpen(false);
  };
  const toggleHamburger = () => {
    setIsMenuOpen((prevState) => !prevState);
    const hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("open");
  };
  // close hamburger menu when page is changed
  useEffect(() => {
    setIsMenuOpen(false);
    const hamburger = document.getElementById("hamburger");
    hamburger.classList.remove("open");
  }, []);
  return (
    <nav className="absolute w-full h-12 px-8 flex items-center justify-center no-select">
      <div className="nav-contain w-full h-full flex justify-between items-center">
        <a href="/" className="no-select">
          <span className="font-bold text-xl">
            TEJAS
            <span className="text-primary">BHOVAD</span>
          </span>
        </a>
        {/* Desktop Links */}
        <div
          className="desktop-links flex text-lg gap-8 float-right font-medium"
          id="desktop"
        >
          <a href="/about" className="">
            About
          </a>
          <a href="/projects" className="">
            Projects
          </a>
          <a
            href="/contact"
            className="bg-primary px-2 rounded-sm text-white dark:text-black"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>
        {/* mobile navbar menu */}
        <div className="hmb-container" id="mobile">
          <div id="hamburger" onClick={toggleHamburger}>
            <svg width="40" height="40" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </div>
          {/* Circle Menu for Mobile */}

          <div className={`circle-menu ${isMenuOpen ? "open" : ""}`}>
            {isMenuOpen && (
              <div className="mobile-menu">
                <ul className="text-right justify-right">
                  <li>
                    <a href="/about" onClick={(e) => handleClick(e, "about")}>
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/projects"
                      onClick={(e) => handleClick(e, "projects")}
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      onClick={(e) => handleClick(e, "contact")}
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <ThemeToggle className="items-end" />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
