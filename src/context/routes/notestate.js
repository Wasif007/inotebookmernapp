import { useState } from "react";
import createContextExp from "./notecontext";

const CreateContextExpFunction=(props)=>{
    const s1={
        "name":"Kuch bhe rakh lo",
        "age":"Kuch bhe chale ge"
    }
    const [state,statechange]=useState(s1);
    const updateFunction=()=>{
        setTimeout(() => {
           statechange({
            "name":"Jhinggaa ",
        "age":"Lalallaal"
        }) 
        }, 1000);
        
    }
    return(
        <createContextExp.Provider value={{state,updateFunction}}>
            {props.children}
        </createContextExp.Provider>
    )
}
export default CreateContextExpFunction