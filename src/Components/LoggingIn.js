import React, { useContext,useState } from 'react'
import createContextExp from '../context/routes/notecontext'
const LoggingIn = (props) => {
  //useContext used to fetch all details regarding login like auth token
  const context=useContext(createContextExp);
  const {loggingInFunc}=context;
  //Using State to setNote and passing it to function and setting forms field value
  const [note, setNote] = useState({email: "", password: ""})

  

  const onChange = (e)=>{
      setNote({...note, [e.target.name]: e.target.value})
  }

  //On submit of form handling
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    loggingInFunc(note.email,note.password);
    setNote({email: "", password: ""});

  }
  return (
    <form onSubmit={onSubmitHandler}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="email" name='email' onChange={onChange} value={note.email} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={note.password} placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
  )
}

export default LoggingIn
