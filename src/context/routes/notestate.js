import React from "react";
import noteContextCreation from "./notecontext";

const noteContextCreationFunction=(props)=>{
    const state={
        "name":"wasif",
        "age":"50"
    }
    return (
        <noteContextCreation.Provider value={state}>
            {props.children}
        </noteContextCreation.Provider>

    );
}