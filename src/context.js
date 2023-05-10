import { createContext, useContext } from "react";
import App from "./App";

const GlobalContext=createContext();

export const useGlobalContext=()=>useContext(GlobalContext);

const AppContext=()=>{
    return <GlobalContext.Provider value={{}}>
        <App/>
    </GlobalContext.Provider>
}

export default AppContext;