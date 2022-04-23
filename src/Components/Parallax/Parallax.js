import React from 'react'
import Header3 from '../../Container/Header3/Header3';
import './parallax.css';

function Parallax() {
  return (
    <>
    <div className="parallax1">
        <Header3 />
        {/* <img src={Photo} alt="photo" /> */}
    </div>
    <div className="parallax-text">
        <span>Logexpo!</span>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit</p> 
    </div>
    <div className="parallax2">

    </div>
    </>
  )
}

export default Parallax