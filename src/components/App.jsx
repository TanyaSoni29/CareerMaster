import React from 'react';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import NotFound from './Notefound';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Search from './Search';
import PostJob from './Postjob';



function App(){
 return (
    <>
    <div>
    <Router>
    <Navbar />
      <Routes>
       
        <Route path="/" element={<Home /> } />
        <Route path="/findjob" element={<Search /> } />
        <Route path="/Postjob" element={<PostJob /> } />
        <Route path="/" element={<Home /> } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="" element={<NotFound />} />
      </Routes>
    </Router>
   
 
 
 </div>
 </>
 );
}
export default App;