import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextProps  ={
    isDarkMode:boolean,
    setDarkMode:React.Dispatch<React.SetStateAction<boolean>>
}
const ThemeContext = createContext<ThemeContextProps>({
    isDarkMode:true,
    setDarkMode:()=>{}
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;

    if (isDarkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;



export const useTheme = ()=> useContext(ThemeContext)