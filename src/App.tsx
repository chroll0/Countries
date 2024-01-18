import React, { useState } from "react";

import "./global.css";
import Navbar from "./components/Navbar";
import CountryPage from "./pages/CountryPage";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "./pages/CountryDetails";

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
        <Routes>
          <Route
            path="/"
            element={<CountryPage currentTheme={theme} />}
          ></Route>
          <Route
            path="/countryDetails"
            element={<CountryDetails currentTheme={theme} />}
          ></Route>
        </Routes>
      </div>
    </main>
  );
};

export default App;
