import { IoMoonSharp } from "react-icons/io5";

interface ThemeChangerProps {
  onToggleTheme: () => void;
  currentTheme: string;
}

const ThemeChanger: React.FC<ThemeChangerProps> = ({
  onToggleTheme,
  currentTheme,
}) => {
  return (
    <div className="transition-all duration-100">
      <button
        onClick={onToggleTheme}
        className="flex items-center justify-center text-sm"
      >
        <IoMoonSharp className="mr-2 text-md " />
        {currentTheme === "dark" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default ThemeChanger;
