import { useState } from "react";
import createContextExp from "./notecontext";

const CreateContextExpFunction=(props)=>{
   const notes=[
    {
      "_id": "64c166c599007dcd6797f174",
      "user": "64bd2f5ff045d15ba60b3bd9",
      "title": "wasif",
      "description": "wasif is a bad boy",
      "tag": "General",
      "date": "2023-07-26T18:32:37.233Z",
      "__v": 0
    },
    {
      "_id": "64c166c699007dcd6797f176",
      "user": "64bd2f5ff045d15ba60b3bd9",
      "title": "wasif",
      "description": "wasif is a bad boy",
      "tag": "General",
      "date": "2023-07-26T18:32:38.310Z",
      "__v": 0
    }
  ];
     const [state,statechange]=useState({notes});
    
    return(
        <createContextExp.Provider value={{state,statechange}}>
            {props.children}
        </createContextExp.Provider>
    )
}
export default CreateContextExpFunction