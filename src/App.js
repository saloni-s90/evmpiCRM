import './App.css';
import RenderPages from './Pages/RenderPages';

import React,{ useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import logo from './images/logo.jpeg'

function App() {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#1E90FF");

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])

  return (
    <>
    {
      loading ?
 <HashLoader
        color={color}
        loading={loading}
        size={150}    
      />
      
      :
<RenderPages />
    }
    
    </>
  );
}

export default App;
