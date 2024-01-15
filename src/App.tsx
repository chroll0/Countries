import React, { useState } from "react";

import "./global.css";
import Navbar from "./components/Navbar";
import CountryPage from "./pages/CountryPage";

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <main
      className={`min-h-[100svh] transition-all duration-300 ${
        theme === "dark" ? "dark-background" : "light-background"
      }`}
    >
      <Navbar onToggleTheme={toggleTheme} currentTheme={theme} />
      <div className="flex flex-col items-center paddings">
        <CountryPage currentTheme={theme} />
      </div>
    </main>
  );
};

export default App;
