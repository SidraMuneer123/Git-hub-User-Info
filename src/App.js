import React, { useState } from 'react'
import Detail from './Detail';
import {Route , Routes} from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Home from './Home';


const App = () => {
  const [searchterm , setSearchTerm] = useState('');
  const[data,setData]=useState('')
  const handleclick = async()=>{
    try{
      const res = await fetch(`https://api.github.com/users/${searchterm}`);
      const response =  await res.json();
      console.log(response);
      setData(response)
    }
    catch(error){
      console.error('U got an  error' , error);

    }

  }
  const change = (event)=>{
    setSearchTerm(event.target.value)

  }
  return (
    <>

<Routes>
<Route exact path='/' element = {<Home searchterm = {searchterm} change = {change} handleclick = {handleclick} data = {data}/>}></Route>
      {/* <i class="fa-solid fa-magnifying-glass" style={{'color': '#6193ea'}}></i> */}
<Route exact path='/detail' element={<Detail userdata = {data} />} /> 
    </Routes>
{/* <NavLink to='/'>Home</NavLink> */}
      {/* // <Detail userdata = {data} /> */}

    </>
  )
}

export default App
