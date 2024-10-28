import React from 'react'

function Contact(props) {
  return (
    <div className='container'>
        <h1 className='mt-5 mb-5' style={{ backgroundColor: props.mode === 'light' ? 'white' : '#313238', color: props.mode === 'light' ? 'black' : 'white' }}>Register Here</h1>
      <form className="row g-3" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#313238', color: props.mode === 'light' ? 'black' : 'white' }} >
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"  style={{ backgroundColor: props.mode === 'light' ? 'white' : '#313238', color: props.mode === 'light' ? 'black' : 'white' }}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#313238', color: props.mode === 'light' ? 'black' : 'white' }}/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#313238', color: props.mode === 'light' ? 'black' : 'white' }}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#313238', color: props.mode === 'light' ? 'black' : 'white' }}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select"  style={{ backgroundColor: props.mode === 'light' ? 'white' : '#313238', color: props.mode === 'light' ? 'black' : 'white' }}>
      <option selected>Choose one...</option>
      <option>Punjab</option>
      <option>Sindh</option>
      <option>KPK</option>
      <option>Balochistan</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#313238', color: props.mode === 'light' ? 'black' : 'white' }}/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#313238', color: props.mode === 'light' ? 'black' : 'white' }}/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
    </div>
  )
}

export default Contact
