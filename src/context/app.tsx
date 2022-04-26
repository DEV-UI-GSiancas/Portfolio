import React from 'react';
import { createContext } from "react";
import { appContxtObj } from "./default/app";

interface AppContextProps {
    handleSetter: (attr: keyof typeof appContxtObj | '*' , data:any) => boolean;
    handleGetter: (attr: keyof typeof appContxtObj | '*') => any;
}

export const AppContext = createContext(
    {} as AppContextProps
);

export const AppContextProvider = (props: any) => {

    const [appObjState, setAppObjState] = React.useState(appContxtObj);

    const handleSetter = (attr: keyof typeof appContxtObj | '*', data: any) => {
        try{

            if(attr !== '*'){
                if(appObjState.hasOwnProperty(attr)){

                    const newObjState = {...appObjState};
                    newObjState[attr] = data;

                    setAppObjState(newObjState);
                    return true;

                }else{
                    console.warn("property does not exist on context");
                }
            }else{
                setAppObjState({...data});
                return true; 
            }
            return false;

        }catch(e){
            console.error(e);
            return false;
        }
    }

    const handleGetter = (attr: keyof typeof appContxtObj | '*') => {
        try{
            return (attr !== '*' ? appObjState[attr] : appObjState);
        }catch(e){
            console.error(e);
            return null
        }
    }

    return(
        <AppContext.Provider value={{
            handleSetter: handleSetter,
            handleGetter: handleGetter,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}