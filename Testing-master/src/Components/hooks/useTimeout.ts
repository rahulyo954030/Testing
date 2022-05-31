import { useEffect, useState } from "react";
export const useTimeout = (delay: number) => {
    const [toShow, setToShow] = useState(false);

    useEffect(() => {
     let id =  setTimeout(() => {
        setToShow(true);
      }, delay * 1000)
  
      return () => clearTimeout(id);
    //   Cleanup
    },[]);
    
    // if(!toShow) {
    //   return  "wait"
      
    // }

    return toShow
}