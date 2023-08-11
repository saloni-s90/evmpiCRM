import React,{useState,useEffect} from 'react'
import axios from 'axios'


function DisplayContent() {
  const [configuration, setUser] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3002/display')
      .then(result => setUser(result.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Site ID</th>
            <th>Esim</th>
            <th>Customer Name</th>
            <th>Device id</th>
          </tr>
        </thead>

        <tbody>
          {
            configuration.map((user) => {
              return <tr>
                <td>{user.siteid}</td>
                <td>{user.esim}</td>
                <td>{user.cname}</td>
                <td>{user.device}</td>
                
              </tr>
            })
          }
        </tbody>

      </table>

    </div>
  )
}

export default DisplayContent
