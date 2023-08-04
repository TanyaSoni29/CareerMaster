
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
  <nav class="navbar navbar-expand-lg fixed-top" style={{backgroundColor:"#EFDCF9"}}>
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><strong>Career</strong>Master</Link>
    <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header text-black border-bottom">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">CareerMaster</h5>
        <button type="button" class="btn-close btn-close-black shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body d-flex flex-column flex-lg-row p-1">
        <ul class="navbar-nav justify-content-center  fs-5 flex-grow-1 p-lg-0">
        <li class="nav-item mx-2">
            <Link class="nav-link"  to="/">Home</Link>
          </li>
          <li class="nav-item mx-2">
            <Link class="nav-link"  to="/postjob">Post Job</Link>
          </li>
          <li class="nav-item mx-2">
            <Link class="nav-link" to="/findjob">Find Job</Link>
          </li>
          
        </ul>
        <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center gap= 3 profile-button'></div>
      <Link to='/login' className='text-black text-decoration-none px-3 py-2'>Login</Link>
      <Link to='/register' className='text-black text-decoration-none px-3 py-2 rounded-5' style={{backgroundColor:"#C55FFC"}}>Signup</Link>
      </div>
    </div>
  </div>
</nav> 
 
  );
}

export default Navbar;
