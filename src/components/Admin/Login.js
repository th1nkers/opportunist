import React from 'react'

const Login = () => {
  return (
    <div className='d-flex justify-content-center mt-5'>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Admin ID</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <button type='button' className='btn' >Contact developer for help.</button>
        <button type="submit" class="btn btn-dark">Submit</button>
      </form>
    </div>
  )
}

export default Login