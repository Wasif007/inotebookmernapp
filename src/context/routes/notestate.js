// import { useState } from "react";
// import createContextExp from "./notecontext";

// const CreateContextExpFunction=(props)=>{
//    const initialNotes=[
//     {
//       "_id": "64c166c599007dcd6797f174",
//       "user": "64bd2f5ff045d15ba60b3bd9",
//       "title": "wasif",
//       "description": "wasif is a bad boy",
//       "tag": "General",
//       "date": "2023-07-26T18:32:37.233Z",
//       "__v": 0
//     },
//     {
//       "_id": "64c166c6990073dcd6797f176",
//       "user": "64bd2f5ff045d15ba60b3bd9",
//       "title": "wasif",
//       "description": "wasif is a bad boy",
//       "tag": "General",
//       "date": "2023-07-26T18:32:38.310Z",
//       "__v": 0
//     },
//     {
//       "_id": "64c166c6990072dcd6797f176",
//       "user": "64bd2f5ff045d15ba60b3bd9",
//       "title": "wasif",
//       "description": "wasif is a bad boy",
//       "tag": "General",
//       "date": "2023-07-26T18:32:38.310Z",
//       "__v": 0
//     },
//     {
//       "_id": "64c166c699007dc1d6797f176",
//       "user": "64bd2f5ff045d15ba60b3bd9",
//       "title": "wasif",
//       "description": "wasif is a bad boy",
//       "tag": "General",
//       "date": "2023-07-26T18:32:38.310Z",
//       "__v": 0
//     }
//   ];
//   const [notes,setNotes]=useState(initialNotes);

//      // Add a Note
//      const addNote = (title, description, tag)=>{
//       // TODO: API Call
//       console.log("Adding a new note")
//       const note = {
//         "_id": "61322f119553781a8ca8d0e08",
//         "user": "6131dc5e3e4037cd4734a0664",
//         "title": title,
//         "description": description,
//         "tag": tag,
//         "date": "2021-09-03T14:20:09.668Z",
//         "__v": 0
//       };
//       setNotes(notes.concat(note)) 
//     }

//     // Delete a Note
//     const deleteNote = ()=>{

//     }
//     // Edit a Note
//     const editNote = ()=>{

//     }
//     return(
//         <createContextExp.Provider value={{notes,addNote,deleteNote,editNote}}>
//             {props.children}
//         </createContextExp.Provider>
//     )
// }
// export default CreateContextExpFunction

import { useState } from "react";
import createContextExp from "./notecontext";
const CreateContextExpFunction=(props)=>{
   const notesInitial=[
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
      "_id": "64c166c6990073dcd6797f176",
      "user": "64bd2f5ff045d15ba60b3bd9",
      "title": "wasif",
      "description": "wasif is a bad boy",
      "tag": "General",
      "date": "2023-07-26T18:32:38.310Z",
      "__v": 0
    },
    {
      "_id": "64c166c6990072dcd6797f176",
      "user": "64bd2f5ff045d15ba60b3bd9",
      "title": "wasif",
      "description": "wasif is a bad boy",
      "tag": "General",
      "date": "2023-07-26T18:32:38.310Z",
      "__v": 0
    },
    {
      "_id": "64c166c699007dc1d6797f176",
      "user": "64bd2f5ff045d15ba60b3bd9",
      "title": "wasif",
      "description": "wasif is a bad boy",
      "tag": "General",
      "date": "2023-07-26T18:32:38.310Z",
      "__v": 0
    }
  ];
     const [notes,statechange]=useState(notesInitial);

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
     const deleteNote=()=>{

     }
    //Editing a note
     const updateNote=()=>{

     }

    return(
        <createContextExp.Provider value={{notes,addNote,deleteNote,updateNote}}>
            {props.children}
        </createContextExp.Provider>
    )
}
export default CreateContextExpFunction