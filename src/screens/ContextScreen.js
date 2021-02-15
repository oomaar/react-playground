// import { useState, createContext } from 'react';
import { ClassContextComponent, FunctionalContextComponent } from "../Components";
import { ThemeProvider } from "./ThemeContext";

const ContextScreen = () => {
    return (
        <ThemeProvider>
            {/* <ClassContextComponent /> */}
            <FunctionalContextComponent />
        </ThemeProvider>
    )
};

export default ContextScreen;
