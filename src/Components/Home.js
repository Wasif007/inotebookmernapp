import React, { useContext } from 'react'
import createContextExp from '../context/routes/notecontext';
const Home = () => {
  const contextUsing=useContext(createContextExp);
  const {notes}=contextUsing.state;
  const notesChange=contextUsing.stateChange;
  return (
    <div>
      <div className="container my-2">
      <h2>Add Notes here</h2>
      </div>
      <form>
  <div className="form-group my-1">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<div className="container my-2">
      <h2>Your Notes</h2>
      {notes.map((note)=>{
        return note.title;
      })}
      </div>
    </div>
  )
}

export default Home

