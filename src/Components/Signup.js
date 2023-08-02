import React, { useContext, useState } from 'react'
import createContextExp from '../context/routes/notecontext';

const Signup = () => {
  //useContext used to fetch all details regarding login like auth token
  const context=useContext(createContextExp);
  const {signingUpFunction}=context;
  //Using State to setNote and passing it to function and setting forms field value
  const [note, setNote] = useState({name:"",email: "", password: "",cpassword:""})

  

  const onChange = (e)=>{
      setNote({...note, [e.target.name]: e.target.value})
  }

  //On submit of form handling
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    signingUpFunction(note.name,note.email,note.password);
    setNote({name:"",email: "", password: "",cpassword:""});

  }
  return (
    <form onSubmit={onSubmitHandler}>
       <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="name" name='name' onChange={onChange} value={note.name} aria-describedby="emailHelp" placeholder="Enter Name"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="email" name='email' onChange={onChange} value={note.email} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="password"  required minLength={5} name='password' onChange={onChange} value={note.password} placeholder="Password"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" required minLength={5} name='cpassword' onChange={onChange} value={note.cpassword} placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
  )
}

export default Signup
