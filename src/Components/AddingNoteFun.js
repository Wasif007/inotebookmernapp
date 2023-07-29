import React, { useContext, useState } from 'react'
import createContextExp from '../context/routes/notecontext';
import NotesDisplay from './NotesDisplay'
const AddingNoteFun = () => {
    //Using Context Api to add functionalites
    const contextUsing=useContext(createContextExp);
    const addingNotesFunction=contextUsing.addNote;
    const [note,changeNote]=useState({title:"",description:"",tag:""});
//On Click Function for handling submit button to add a note
const onClickHandler=(e)=>{
    e.preventDefault();
    addingNotesFunction(note.title,note.description,note.tag);
}
const onChangeHandler=(e)=>{
 changeNote({...note,[e.target.name]:e.target.value});
}
  return (
    <div>
      <div className="container my-2">
      <h2>Add Notes here</h2>
      </div>
      <form>
  <div className="form-group my-1">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChangeHandler}/>
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <input type="text" className="form-control" id="description" name="description" onChange={onChangeHandler}/>
  </div>
  <div className="form-group">
    <label htmlFor="tag">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" onChange={onChangeHandler}/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={onClickHandler}>Add a Note</button>
</form>
<div className="container my-2">
      <h3>Your Notes</h3>
         <NotesDisplay/> 
      </div>
    </div>
  )
}

export default AddingNoteFun
