import { useState } from "react";
import createContextExp from "./notecontext";
import { useNavigate } from 'react-router-dom';
const CreateContextExpFunction=(props)=>{
  let navigations=useNavigate();
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
      const newNotesADel=notes.filter((noteFilter)=> {return noteFilter._id!==id});
      
      statechange(newNotesADel);
      props.settingAlert("Note Deleted Successfully","success");

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
     //Login to user FROM FRONT END
 const loggingInFunc=async (email,password)=>{
   //Looping to find the required note and than updating its data
   const response = await fetch(`${url}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
        
    },
    body: JSON.stringify({email,password}), 
  });
  const json=await response.json(); 
  //If successful in Login
  if(json.success){
localStorage.setItem("token",json.authToken);
navigations("/");
props.settingAlert("Logging In Successful","success");
  }
  //If Unsuccessful in login
  else{
props.settingAlert("Invalid Credentials","danger");  }
 
 }
 const signingUpFunction=async(name,email,password)=>{
   //Looping to find the required note and than updating its data
   const response = await fetch(`${url}/api/auth/createUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
        
    },
    body: JSON.stringify({name,email,password}), 
  });
  const json=await response.json(); 
  //If successful in SignUp
  if(json.success){
localStorage.setItem("token",json.authToken);
props.settingAlert("Logging In Successful","success");
  }
  //If Unsuccessful in SignUp
  else{
    props.settingAlert("Invalid Credentials","danger"); 
  }
 }
    return(
        <createContextExp.Provider value={{notes,addNote,deleteNote,updateNote,fetchingAllNotes,loggingInFunc,signingUpFunction}}>
            {props.children}
        </createContextExp.Provider>
    )
}
export default CreateContextExpFunction