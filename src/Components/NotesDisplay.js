import React, { useContext, useRef } from 'react'
import createContextExp from '../context/routes/notecontext';
import NotesCard from './NotesCard';
import AddingNoteFun from './AddingNoteFun';
import { useEffect,useState} from 'react';

const NotesDisplay = () => {
    const contextUsing=useContext(createContextExp);

    const {notes}=contextUsing;
    const {fetchingAllNotes}=contextUsing;
    //Using useState to set initial values of all fields
    const [note, setNote] = useState({etitle: "", edescription: "", etag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        //Consoling to check output
        console.log(note);
    }

    const onChange = (e)=>{
      //Values can be updated on any change in the field
        setNote({...note, [e.target.name]: e.target.value})
    }
    useEffect(() => {
      fetchingAllNotes();
      // eslint-disable-next-line
      }, []);
      const ref=useRef(null);
   const updateFunction=(note)=>{
    //Use ref to show the modal of update
    ref.current.click();
    //Setting note value from fetching the notes value using props
    setNote({etitle:note.title,edescription:note.description,etag:note.tag});
   }
  return (
   <>
   {/* Using Modal from latest version */}
   <AddingNoteFun/>
  {/* Using useRef to refer this only bootstrap thing */}
<button type="button" className="btn btn-primary d-none" ref={ref} data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit note</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
  <div className="form-group my-1">
    <label htmlFor="title">Title</label>
    {/* Using new id and name we set the unique id and setting its value to all fetched data */}
    <input type="text" className="form-control" id="etitle" value={note.etitle} name='etitle' aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <input type="text" className="form-control" id="edescription" value={note.edescription} name="edescription" onChange={onChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="tag">Tag</label>
    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange}/>
  </div>
  
</form>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
      </div>
    </div>
  </div>
</div>
   <div className="container my-2">
    <h2>Your Notes</h2>
   </div>
    
    <div className='row my-2'>
      
      {
      notes.map((note)=>{
        //Sending update function as a prop and getting note from other component
       return <NotesCard key={note._id} updateFunction={updateFunction} note={note}/>
      })}
    </div>
    </>
  )
}

export default NotesDisplay
