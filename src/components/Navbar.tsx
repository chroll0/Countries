import ThemeChanger from "./ThemeChanger";

interface NavbarProps {
  onToggleTheme: () => void;
  currentTheme: string;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleTheme, currentTheme }) => {
  return (
    <nav
      className={`nav-class transition-all duration-300 ${
        currentTheme === "dark" ? "dark-elements" : "light-elements"
      }
`}
    >
      <h3 className="text-[20px] font-[600] tracking-wide">
        Where in the world?
      </h3>
      <ThemeChanger onToggleTheme={onToggleTheme} currentTheme={currentTheme} />
    </nav>
  );
};

export default Navbar;
