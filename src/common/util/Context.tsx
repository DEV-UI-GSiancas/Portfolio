import { createContext } from "react";

interface appContextProps {
    handleEvent: () => void
}

export const AppContext = createContext({} as appContextProps);

export const AppContextProvider = (props: any) => {

    const handleEvent = () => {
        console.log("context event handler");
    }

    return(
        <AppContext.Provider value={{
            handleEvent: handleEvent
        }}>
            {props.children}
        </AppContext.Provider>
    )
}