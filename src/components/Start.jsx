import React from 'react'
import { Link } from 'react-router-dom';

export default function Start() {
  return (
    <div className='start'>
    <div class="grid-container">
    <div class="grid-item">
    <h1 style={{marginLeft:"40px"}}>Unlock Your Potential: Land Your Dream Job at These Irresistible Companies! </h1> 
    <p style={{marginLeft:"40px"}}>At CareerMaster, we believe in connecting extraordinary talent with exceptional opportunities. Our mission is to bridge the gap between top-tier professionals and the companies of their dreams. As a leading recruitment agency, we are committed to transforming careers and businesses through perfect matches.</p>
    <Link to='/register' className='text-black text-decoration-none px-3 py-2 rounded-5' style={{backgroundColor:"#C55FFC", marginLeft:"40px"}}>Let's Start</Link>
    </div>
  <div class="grid-item"><img id="img" src="https://media.istockphoto.com/id/1465568487/photo/colleagues-watching-something-on-laptop-while-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=ZsUmsBtCh9Ta8mnG1blSp6V0EqGclwqRNUQUz9Jft2w=" alt="start.png" /></div> 
</div>
</div>
  );
}
