import { createContext, useContext, useState } from "react";

const ToggleContext = createContext();
const SetToggleContext = createContext();

export const useToggle = () => useContext(ToggleContext);

export const useUpdateToggle = () => useContext(SetToggleContext);

export const ToggleProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(state => !state);

    return (
        <ToggleContext.Provider value={toggle}>
            <SetToggleContext.Provider value={handleToggle}>
                {children}
            </SetToggleContext.Provider>
        </ToggleContext.Provider>
    );
}
