import createContextExp from "./notecontext";

const CreateContextExpFunction=(props)=>{
    const state={
        "name":"Kuch bhe rakh lo",
        "age":"Kuch bhe chale ge"
    }
    return(
        <createContextExp.Provider value={state}>
            {props.children}
        </createContextExp.Provider>
    )
}
export default CreateContextExpFunction