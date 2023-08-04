import React from 'react'


export default function Footer() {
  return (
    <div className='start'>
    <footer>
        <div className='footer-wrapper' style={{backgroundColor:"#C55FFC"}}>
        <h3><strong>Career</strong>Master</h3>
        <p>Advance your career with CareerMaster, the premier recruitment site connecting top talent with leading companies worldwide.</p>
<div className='social-media'>
    <a href='https://www.facebook.com/'><i class='fab fa-facebook-f'></i></a>
    <a href='https://www.twitter.com/'><i class='fab fa-twitter'></i></a>
    <a href='https://www.linkdin.com'><i class='fab fa-linkedin-in'></i></a>
    <a href='https://google.com'><i class='fab fa-google-plus-g'></i></a>

</div>
    <div className="container-date">
        <p>&copy; {new Date().getFullYear()} CareerMaster. All rights reserved.</p>
      </div>
</div>
    </footer>
      
    </div>
  )
}
