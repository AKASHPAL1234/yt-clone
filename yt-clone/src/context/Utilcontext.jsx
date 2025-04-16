// import { children, createContext, useContext, useState } from "react";

// const UtilContext=createContext(null);

// export const utilsContextProvider=({children})=>{

//     const[isSidebar,setIsSidebar]=useState(false);
//     const [mobileShow,setMobileShow]=useState(false); 

//     return <utilsContext.Provider value={{isSidebar,setIsSidebar,mobileShow,setMobileShow}}>
//         {children}
//     </utilsContext.Provider>
// }


// export const useUtils=()=>{
//      const utilsContext=useContext(UtilContext);

//      if(!utilsContext) return null;
//      return utilsContext;
// }

// Utilcontext.js
import { createContext, useContext, useState } from "react";

const UtilsContext = createContext(null);

export const UtilsProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [mobileShow, setMobileShow] = useState(false);

  return (
    <UtilsContext.Provider value={{ isSidebar, setIsSidebar, mobileShow, setMobileShow }}>
      {children}
    </UtilsContext.Provider>
  );
};

export const useUtils = () => {
    const context = useContext(UtilsContext);
    if (!context) {
      throw new Error("useUtils must be used within a UtilsProvider");
    }
    return context;
  };
