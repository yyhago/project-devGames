import Header from "./components/Header";
import Home from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";

import "./App.css";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme}
    ${theme == "dark" ? "bg-[#121212]" : null} h-[100vh]`}
      >
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
