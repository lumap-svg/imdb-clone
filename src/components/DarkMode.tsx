"use client";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
const DarkMode = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <MdLightMode
          className="hover:bg-amber-500 text-xl cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdDarkMode
          className="hover:bg-amber-500 text-xl cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default DarkMode;
