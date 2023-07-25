import React from 'react'
import { useContext } from 'react'
import createContextExp from '../context/routes/notecontext';
import { useEffect } from 'react';
const About = () => {
  const a= useContext(createContextExp);
  useEffect(() => {
    a.updateFunction();
    // eslint-disable-next-line
  }, []);
 
  console.log(a);
  return (
    <div>
      This is about page {a.state.name} and his age is {a.state.age}
    </div>
  )
}

export default About

