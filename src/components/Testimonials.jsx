import React from 'react'

export default function Testimonials(props) {
  return (
    <div className='start'>
    <div className='test'>
    
    <img src={props.imgURL} />
    <h2>{props.name}</h2>
    <h2>{props.position}</h2>
    <h3>{props.company}</h3>
    <p>{props.message}</p>

    </div>
    </div>
  )
}
