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
        console.log(note);
       return <NotesCard title={note.title} description={note.description}/>
      })}
    </div>
  )
}

export default NotesDisplay
