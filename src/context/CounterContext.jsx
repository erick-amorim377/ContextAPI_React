import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {

    const [counter, setConter] = useState(5);

    return(
        <CounterContext.Provider value={{counter, setConter}}>
            {children}
        </CounterContext.Provider>
    )

}

