import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Home = (props) => {
    const datas = props.data.name;
    const {fname} = useParams();


  return (
    
    <>
    {/* <NavLink to='/'> */}
    <div className="containers">
      <div className="center">

        <h1>GIT HUB</h1>
      <input value={props.searchterm} type="text" placeholder='Enter Git Hub UserName ' onChange={props.change} />
      <NavLink to = '/detail'><button className='fa-solid fa-magnifying-glass' onClick={props.handleclick} style={{'color': '#6193ea'}}></button></NavLink>
      </div>
    </div>
    {/* </NavLink> */}
    </>

  )
}

export default Home
