import { useState } from "react";
import createContextExp from "./notecontext";
const CreateContextExpFunction=(props)=>{
  const url="http://localhost:5000";
   const notesInitial=[];
  
     const [notes,statechange]=useState(notesInitial);
//Fetching all notes to be displayed on our application
     const fetchingAllNotes=async ()=>{
      const response = await fetch(`${url}/api/notes/fetchingAllNotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZDJmNWZmMDQ1ZDE1YmE2MGIzYmQ5In0sImlhdCI6MTY5MDEyMDY3MH0.pT7L30saSBTjMo5xhM1WI5mBj7_w87MzzWsNlJvsNjQ"
        },
        body: JSON.stringify(), 
      });
      const json=await response.json(); 
      statechange(json);
     }
    //Adding a new Note
     const addNote=(title,description,tag)=>{
      const newNoteCreated={
        "_id": "64c166c699007dc1d6797f176",
        "user": "64bd2f5ff045d15ba60b3bd9",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-07-26T18:32:38.310Z",
        "__v": 0
      };
      statechange(notes.concat(newNoteCreated))
       }
    //Deleting a note
     const deleteNote=(id)=>{
      const newNotesADel=notes.filter((noteFilter)=> {return noteFilter._id!==id});
      
      statechange(newNotesADel);

     }
    //Editing a note
     const updateNote=async (id,title,description,tag)=>{
      //Looping to find the required note and than updating its data
      const response = await fetch(`${url}/api/notes/updatenote/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify({title,description,tag}), 
      });
      const json=await response.json(); 
      
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id===id)
        {
          element.title=title;
          element.description=description;
          element.tag=tag;
        }
        
      }
     }

    return(
        <createContextExp.Provider value={{notes,addNote,deleteNote,updateNote,fetchingAllNotes}}>
            {props.children}
        </createContextExp.Provider>
    )
}
export default CreateContextExpFunction