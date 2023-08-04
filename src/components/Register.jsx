import React from 'react'

export default function Register() {
  return (
    <div className='start'>
    <div class="container mt-5">
  <h1>Register</h1>

  <div class="row" style={{marginTop:"20px"}}>
    <div class="col-sm-8">
      <div class="card">
        <div class="card-body">

         
          <form>
            <div class="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" class="form-control" style={{marginTop:"20px"}} name="username" />
            </div>
            <div class="form-group" style={{marginTop:"20px"}}>
              <label htmlFor="password">Password</label>
              <input type="password" class="form-control" style={{marginTop:"20px"}} name="password" />
            </div>
            <button type="submit" class="btn btn-dark" style={{marginTop:"20px"}}>Register</button>
          </form>

        </div>
      </div>
    </div>

    

  </div>
</div>
</div>
  )
}
