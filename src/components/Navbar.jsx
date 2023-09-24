import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="w-full h-12 px-8 flex items-center justify-center">
      <div className="nav-contain w-full h-full flex justify-between items-center">
        <a href="/" className="">
          <span className="font-bold text-xl">
            TEJAS
            <span className="text-primary">BHOVAD</span>
          </span>
        </a>
        {/* Desktop Links */}
        <div className="links flex text-lg gap-8 float-right font-medium">
          <a href="/about" className="">
            About
          </a>
          <a href="/projects" className="">
            Projects
          </a>
          <a href="/contact" className="">
            Contact
          </a>
          <ThemeToggle />
        </div>
        {/* mobile navbar menu */}
      </div>
    </nav>
  );
};

export default Navbar;
