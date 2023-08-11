import React from 'react'

function Billing() {
  return (
    <div>
      <h2> Billing Cycle </h2>
      <div className="input-group mb-3">
        <span className="input-group-text">@</span>
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInputGroup1" placeholder="E Sim" />
          <label for="floatingInputGroup1">E Sim</label>
        </div>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">@</span>
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Cloud Billing" />
          <label for="floatingInputGroup1">Cloud Billing</label>
        </div>
      </div>

      <button type="button" className="btn btn-outline-primary">Save</button>
      <button type="button" className="btn btn-outline-danger">Cancel</button>
      
    </div>
  )
}

export default Billing
