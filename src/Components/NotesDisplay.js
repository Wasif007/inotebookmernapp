import React, { useContext } from 'react'
import createContextExp from '../context/routes/notecontext';
import NotesCard from './NotesCard';

const NotesDisplay = () => {
    const contextUsing=useContext(createContextExp);
    const notes=contextUsing.state;
   
  return (
    <div className='row my-3'>
      {
      notes.map((note)=>{
       return <NotesCard key={note._id} title={note.title} description={note.description}/>
      })}
    </div>
  )
}

export default NotesDisplay
