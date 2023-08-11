import React, { useState } from 'react'
import './Configuration.css'
import { PiIdentificationBadgeFill } from "react-icons/pi"
import { BiSolidUserCircle } from "react-icons/bi"
import { TbDeviceComputerCamera } from "react-icons/tb"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Configuration() {
  const [siteid, setSiteId] = useState()
  const [esim, setEsim] = useState()
  const [cname, setName] = useState()
  const [device, setDevice] = useState()

  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3002/config/", {siteid,esim,cname,device})
      .then(
        result => {
          console.log(result)
          navigate('/display')
        })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <form>
      <h1>Configuration</h1>
      
        <div className="input-group mb-3">
          <span className="input-group-text"><PiIdentificationBadgeFill /></span>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Site ID"
              onChange={(e) => setSiteId(e.target.value)}
            />
            <label htmlFor="floatingInputGroup1">Site ID</label>
          </div>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text"><PiIdentificationBadgeFill /></span>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputGroup1" placeholder="E Sim"
              onChange={(e) => setEsim(e.target.value)}
            />
            <label htmlFor="floatingInputGroup1">E Sim</label>
          </div>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text"><BiSolidUserCircle /></span>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Customer Name"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="floatingInputGroup1">Customer Name</label>
          </div>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text"><TbDeviceComputerCamera /></span>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Device ID"
              onChange={(e) => setDevice(e.target.value)}
            />
            <label htmlFor="floatingInputGroup1">Device ID</label>
          </div>
        </div>

      
          <button type="button" className="btn btn-outline-primary" onClick={Submit}>Save</button>

  
      </form>
    </div>
  )
}

export default Configuration
