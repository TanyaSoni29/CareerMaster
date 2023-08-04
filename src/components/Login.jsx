import React from 'react'

export default function Login() {
  return (
    <div className='start'>
    <div className="container mt-5">
  <h1>Login</h1>

  <div className="row" style={{marginTop:"20px"}}>
    <div className="col-sm-8">
      <div className="card">
        <div className="card-body">

          
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" style={{marginTop:"20px"}} name="username" />
            </div>
            <div className="form-group" style={{marginTop:"20px"}}>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" style={{marginTop:"20px"}} name="password" />
            </div>
            <button type="submit" className="btn btn-dark" style={{marginTop:"20px"}}>Login</button>
          </form>

        </div>
      </div>
    </div>

    

  </div>
</div>
</div>
  )
}
