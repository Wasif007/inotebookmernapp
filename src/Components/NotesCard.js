import createContextExp from '../context/routes/notecontext';
import React, { useContext } from 'react'

const NotesCard = (props) => {
  const context = useContext(createContextExp);
    const {deleteNote} = context;
    const {note,updateFunction}=props;
    const onClickFunc=()=>{
      return deleteNote(note._id);
    }
  return (
    <div className="col-md-3">
      <div className="card my-3">
  <div className="card-body">
    
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    {/* Passing update function and sending it the required note to be displayed and we will do fetch calls from it */}
    <i className="fa-solid fa-pen mx-2" onClick={()=>{updateFunction(note)}}></i>
    <i className="fa-solid fa-trash mx-2" onClick={onClickFunc}></i>
  </div>
</div>
</div>
  )
}

export default NotesCard
