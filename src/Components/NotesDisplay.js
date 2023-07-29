import React, { useContext } from 'react'
import createContextExp from '../context/routes/notecontext';
import NotesCard from './NotesCard';
import AddingNoteFun from './AddingNoteFun';

const NotesDisplay = () => {
    const contextUsing=useContext(createContextExp);
    const {notes}=contextUsing;
   
  return (
   <>
   <AddingNoteFun/>
   <div className="container my-2">
    <h2>Your Notes</h2>
   </div>
    
    <div className='row my-2'>
      
      {
      notes.map((note)=>{
       return <NotesCard key={note._id} title={note.title} description={note.description}/>
      })}
    </div>
    </>
  )
}

export default NotesDisplay
