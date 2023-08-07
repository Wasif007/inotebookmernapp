import React from 'react'

const Alert=(props) =>{
  console.log("Was");
    const toUpperCaseFunction=(word)=>{
 let lower=word.toLowerCase();
 return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }
  return (
    <div style={{height:'50px'}}>{
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{toUpperCaseFunction(props.alert.type)}</strong>: {props.alert.message} 
</div>}
</div>
  )
}
export default Alert