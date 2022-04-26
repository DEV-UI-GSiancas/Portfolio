import React from 'react';

interface PopupContextProps {
    currentActive: string;
    setCurrentActive: (attr: string) => void;
}

export const PopupContext = React.createContext({} as PopupContextProps);

export const PopupContextProvider = (props: any) => {

    const [currentActive, setCurrentActive] = React.useState<string>('');

    return(
        <PopupContext.Provider value={{
            currentActive , setCurrentActive
        }}>
            {props.children}
        </PopupContext.Provider>
    )
}