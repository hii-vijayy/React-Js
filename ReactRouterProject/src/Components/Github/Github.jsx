import React from 'react';
import { useLoaderData } from 'react-router-dom';
import '/Users/vijaykumar/Programming/React-Js/ReactRouterProject/src/App.css';

function Github() {

    // this method below is used for fetching things form from other sources like 'website' and 'Api'

    // const [data, setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hii-vijayy')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])


  const data = useLoaderData();

  return (
    <>
      <hr />
      <div className="container">
        <div className="githubMain">
          <div id="me">
            <img src={data.avatar_url} alt="" />
            <p>{data.name}</p>
          </div>
          <div id="details">
            <h2>{data.bio}</h2>
            <div id="other">
              <p><strong>Location:</strong> {data.location}</p>
              <p><strong>Email:</strong> vijayk2412001@gmail.com</p>
              <p><strong>Public Repositories:</strong> {data.public_repos}</p>
              <p><strong>Following:</strong> {data.following}</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Github;


// here we are making a function to get user info form huthub and then returnin the info in json format
export const GithubUserInfo = async () => {
  const response = await fetch('https://api.github.com/users/hii-vijayy');
  return response.json();
}
