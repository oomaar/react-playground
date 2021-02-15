import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const useUpdateTheme = () => useContext(ThemeUpdateContext);

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);
    const toggleTheme = () => setDarkMode(prevDarkMode => !prevDarkMode);

    return (
        <ThemeContext.Provider value={darkMode}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}