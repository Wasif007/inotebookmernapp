import React, { useContext } from 'react'
import createContextExp from '../context/routes/notecontext';
import NotesCard from './NotesCard';
import AddingNoteFun from './AddingNoteFun';
import { useEffect } from 'react';

const NotesDisplay = () => {
    const contextUsing=useContext(createContextExp);
    const {notes}=contextUsing;
    const {fetchingAllNotes}=contextUsing;
    useEffect(() => {
      fetchingAllNotes();
      }, []);
   
  return (
   <>
   <AddingNoteFun/>
   <div className="container my-2">
    <h2>Your Notes</h2>
   </div>
    
    <div className='row my-2'>
      
      {
      notes.map((note)=>{
       return <NotesCard key={note._id} note={note}/>
      })}
    </div>
    </>
  )
}

export default NotesDisplay
