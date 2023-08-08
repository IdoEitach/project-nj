"use client";
import HomePage from "./pages/homePage/homePage";
import "../pagestyle.css";
import ButtonTheme from "./components/Button-Theme";
import { ThemeContext } from "./context/ThemeContext";
import { useState, useContext } from "react";
import UserName from "./pages/signUpPage/UserName";

export default function page() {
  const [theme, setTheme] = useState("light");
  if (theme === "dark") {
    document.body.style.backgroundColor = "#0f0f0f";
  } else {
    document.body.style.backgroundColor = "#fff";
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="app">
        <ButtonTheme />
        <UserName />
      </div>
    </ThemeContext.Provider>
  );
}
