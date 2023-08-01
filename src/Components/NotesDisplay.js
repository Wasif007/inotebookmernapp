import React, { useContext, useRef } from 'react'
import createContextExp from '../context/routes/notecontext';
import NotesCard from './NotesCard';
import AddingNoteFun from './AddingNoteFun';
import { useEffect,useState} from 'react';

const NotesDisplay = () => {
    const contextUsing=useContext(createContextExp);

    const {notes}=contextUsing;
    const {fetchingAllNotes}=contextUsing;
    const {updateNote}=contextUsing;
    //Using useState to set initial values of all fields
    const [note, setNote] = useState({eid:"",etitle: "", edescription: "", etag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        //New Ref to close when update button is clicked
        closeRef.current.click();
        
        //Sending note details to context update method
        updateNote(note.eid,note.etitle,note.edescription,note.etag);
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
      const closeRef=useRef(null);
   const updateFunction=(note)=>{
    //Use ref to show the modal of update
    ref.current.click();
    //Setting note value from fetching the notes value using props
    setNote({eid:note._id,etitle:note.title,edescription:note.description,etag:note.tag});
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
        {/* When ever update button is clicked refer it to close button to close the modal */}
        <button ref={closeRef} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" disabled={note.etag.length<5 || note.edescription.length<5 || note.etitle.length<5} className="btn btn-primary" onClick={handleClick}>Update Note</button>
      </div>
    </div>
  </div>
</div>
   <div className="container my-2">
    <h2>Your Notes</h2>
   </div>
    {/* Display No Notes when notes are null */}
   <div className="container">
          {notes.length===0 && "No Notes to be displayed"}
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
