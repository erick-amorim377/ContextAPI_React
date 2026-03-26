import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();
export const titleColorReducer = (state, action) => { 
    //switch (action.type) {
        // case "CHANGE_COLOR":
        //     return { color: action.payload };
        // default:
        //     return state;
    //}
}

export const TitleColorContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color:"red" });
  console.log("Title color context:", state);
  return (
    <TitleColorContext.Provider value={{...state}}>
      {children}
    </TitleColorContext.Provider>
  )
}
