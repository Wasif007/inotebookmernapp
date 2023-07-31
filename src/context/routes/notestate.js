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
        }
      });
      const json=await response.json(); 
      statechange(json);
     }
    //Adding a new Note
     const addNote=async(title,description,tag)=>{
      //Api request making to make a new note
      const response = await fetch(`${url}/api/notes/postingnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZDJmNWZmMDQ1ZDE1YmE2MGIzYmQ5In0sImlhdCI6MTY5MDEyMDY3MH0.pT7L30saSBTjMo5xhM1WI5mBj7_w87MzzWsNlJvsNjQ"  
        },
        body: JSON.stringify({title,description,tag}), 
      });
      const json=await response.json();
      //Changing notes state on front end
      statechange(notes.concat(json));
       }
    //Deleting a note
     const deleteNote=async (id)=>{
      //Api request to delete a note from both ends
      const response = await fetch(`${url}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZDJmNWZmMDQ1ZDE1YmE2MGIzYmQ5In0sImlhdCI6MTY5MDEyMDY3MH0.pT7L30saSBTjMo5xhM1WI5mBj7_w87MzzWsNlJvsNjQ"
         }
      });
      const json=await response.json(); 
      console.log(json);
      const newNotesADel=notes.filter((noteFilter)=> {return noteFilter._id!==id});
      
      statechange(newNotesADel);

     }
    //Editing a note
     const updateNote=async (id,title,description,tag)=>{
      //Looping to find the required note and than updating its data
      const response = await fetch(`${url}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZDJmNWZmMDQ1ZDE1YmE2MGIzYmQ5In0sImlhdCI6MTY5MDEyMDY3MH0.pT7L30saSBTjMo5xhM1WI5mBj7_w87MzzWsNlJvsNjQ"
        
        },
        body: JSON.stringify({title,description,tag}), 
      });
      const json=await response.json(); 
      console.log(json);
      //Making a deep copy of notes
      let newNotesSetting=JSON.parse(JSON.stringify(notes));
      //Looping through array to find the exact id and changing its detail with passed on from the  modal field
      for (let index = 0; index < notes.length; index++) {
        const element = newNotesSetting[index];
        if(element._id===id)
        {
          //Setting the note to be be used in useState after breaking the loop
          newNotesSetting[index].title=title;
          newNotesSetting[index].description=description;
          newNotesSetting[index].tag=tag;
          break;
        }
        
      }
      //Setting the note according to detail
      statechange(newNotesSetting);
     }

    return(
        <createContextExp.Provider value={{notes,addNote,deleteNote,updateNote,fetchingAllNotes}}>
            {props.children}
        </createContextExp.Provider>
    )
}
export default CreateContextExpFunction