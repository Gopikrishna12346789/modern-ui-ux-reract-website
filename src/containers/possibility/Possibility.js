import React from 'react'
import './possibility.css'
import possbilityImage from '../../Assets/possibility.png'

function Possibility() {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className='gpt3__possibility-image'>
             <img src={possbilityImage} alt='possibillity'/>
      </div>
      <div className='gpt3__possibility-content'>
              <h4>Request Early Access to Get Starte</h4>
              <h1 className='gradient__text'>The possibilities are <br /> beyond your imagination</h1>
              <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
               <h4>Request Early Access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility