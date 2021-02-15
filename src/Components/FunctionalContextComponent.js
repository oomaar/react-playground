// import { useContext } from 'react';
import { useTheme, useUpdateTheme, ThemeProvider } from "../screens/ThemeContext";

const FunctionalContextComponent = () => {
    const darkTheme = useTheme();
    const toggleTheme = useUpdateTheme();

    const themeStyles = {
        backgroundColor: darkTheme ? "#222" : "#ccc",
        color: darkTheme ? "#ccc" : "#222",
        padding: "2rem",
        margin: "2rem",
        transition: "1s",
        display: "flex",
        justifyContent: "space-between"
    }

    return (
        <ThemeProvider>
            <div style={themeStyles}>
                function theme
            <button onClick={toggleTheme}>Darker Than This</button>
            </div>
        </ThemeProvider>
    )
};

export default FunctionalContextComponent;
