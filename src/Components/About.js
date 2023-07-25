import React from 'react'
import { useContext } from 'react'
import createContextExp from '../context/routes/notecontext';
const About = () => {
  const a= useContext(createContextExp);
  console.log(a);
  return (
    <div>
      This is about page {a.name}
    </div>
  )
}

export default About

