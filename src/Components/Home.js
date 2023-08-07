import React from 'react'
import NotesDisplay from './NotesDisplay';

const Home = (props) => {
  
  return (
    <>
   
   <div className="container my-2">
         <NotesDisplay settingAlert={props.settingAlert}/> 
      </div>
      </>
  )
}

export default Home

