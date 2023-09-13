import React from 'react'

const Detail = (props) => {
  return (
    <>
        <div className="cont">
            <div className="mid">
            <div className="box">


            <div className="box1">
                 <img className='image' src={props.userdata.avatar_url} alt="" />
                 <h4>{props.userdata.name}</h4>
            </div>
            <div className="box2">
              <h5>Repositries</h5>
              <h2>{props.userdata.public_repos}</h2>
            </div>
            <div className="box3">
            <h5>Followers</h5>
              <h2>{props.userdata.followers}</h2>
            </div>
            <div className="box4">
            <h5>Following</h5>
              <h2>{props.userdata.following}</h2>
            </div>
            </div>
            <div className="info">
              <p>Type : {props.userdata.type}</p>
              <p>Company : {props.userdata.company}</p>
              <p>Blog : {props.userdata.blog}</p>
              <p>Location : {props.userdata.location}</p>
              <p>Email : {!props.userdata.email  == null ? <p>null</p>: props.userdata.email }</p>
              <p>Job Status : {props.userdata.hireable}</p>
              <div className="bio">

              <p>Bio : {props.userdata.bio}</p>
              </div>
              <p>Twitter UserName : {props.userdata.twitter_username}</p>
              <p>Profile Created at : {props.userdata.created_at}</p>
              <p>Profile Updated at : {props.userdata.updated_at}</p>
            </div>


            </div>
        </div>
    </>
  )
}

export default Detail



















// import React from 'react'

// const Detail = (props) => {
//     const obj = Object.entries(props.userdata);

//   return (
//     <div>
//     <img src={props.userdata.avatar_url} alt="" />
//       {obj.map(([key, value]) => (
//   <li key={key}>
//     {key}: {value}
//   </li>
//       ))}
      
//     </div>
//   )
// }

// export default Detail
