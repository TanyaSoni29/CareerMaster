import React from 'react'


export default function HowCard(props) {
  return (
    <div className='card-step'>
    <div className='step'>
    <div><img src={props.img} alt='step.png' /></div>
    <h3>{props.heading}</h3>
    <p>{props.para}</p>
    </div>
</div>
  )
}


