import React, { useContext, useState } from 'react'
import createContextExp from '../context/routes/notecontext';
const AddingNoteFun = () => {
    const context = useContext(createContextExp);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""});
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div>
      <div className="container my-2">
      <h2>Add Notes here</h2>
      </div>
      <form>
  <div className="form-group my-1">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" id="title" name='title' value={note.title} minLength={5} required aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <input type="text" className="form-control" id="description" minLength={5} value={note.description} required name="description" onChange={onChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="tag">Tag</label>
    <input type="text" className="form-control" id="tag" minLength={5} required value={note.tag} name="tag" onChange={onChange}/>
  </div>
  
  <button type="submit" disabled={note.title.length<5 || note.description.length<5 || note.tag.length<5} className="btn btn-primary" onClick={handleClick}>Add a Note</button>
</form>

    </div>
  )
}

export default AddingNoteFun
