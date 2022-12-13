import './App.css';
import Card from './Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [info, setInfo] = useState([])
const URL ="https://api.github.com/users/"
  const getInfo= async(query) => {
    try {
      const {data} = await axios(`https://api.github.com/users/${query}`)
      console.log(data)
      setInfo(data)
      
    } catch (error) {
      console.log(error);
    }
  }
  console.log(info)
  useEffect(() => {
    getInfo('BirolALkan')
  },[])
   return (
    <div>
      <h1>Github User Search App</h1>
      <input type="Search" />
      <button>Search</button>
      <Card info={info} />
    
    </div>

  );
}

export default App;
