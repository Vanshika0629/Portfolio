import React from 'react'
import Desc from "./Desc.jsx";
import Qualification from './Qualification.jsx';
import Projects from './Projects.jsx';

export default function Dash() {
  return (
    <div class="container-fluid py-2">
        <Desc/>
        <Qualification/>
        <Projects/>
    </div>
  )
}
