"use client"
import DarkModeExampleBox from "@/components/DarkModeExampleBox";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-tr from-[#6672a8] to-[#d696b3]">
      <DarkModeExampleBox darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* <DarkModeExampleBox darkMode={darkMode} setDarkMode={setDarkMode} /> */}
    </div>
  );
}
