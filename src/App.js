import './App.css';
import Card from './Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import githubresim from './img/githubresim.gif'
import Notfound from './Notfound';
function App() {
  const [info, setInfo] = useState([])
  const [value, setValue] = useState('')
  // console.log(info==true);
  const[error, setError] = useState(false)
  // console.log(info.status);
const URL ="https://api.github.com/users/"
  const getInfo= async(query) => {
    try {
      const {data} = await axios(`https://api.github.com/users/${query}`)
      console.log(data)
      setInfo(data)
      
    } catch (error) {
      setError(true)
      console.log(error);
      console.log(error.response.status)
    }
    finally{setError(false)}
  }
  console.log(info)
  useEffect(() => {
    getInfo(value)
  },[])
  const handleSubmit = (e) => {
    e.preventDefault()
    getInfo(value)
  }
  if(error?.response?.status===404){
    return <Notfound/>
  }
   return (
    <div>
      <h1>Github User Search App</h1>
      <form onSubmit={handleSubmit} action="">
      <input value={value} onChange={(e) => setValue(e.target.value)} type="Search" />
      <button type='submit'>Search</button>  
      </form>
     {
      info?.length!==0 && <Card info={info} />
     }   
      
    </div>

  );
}

export default App;
