import { useState, useEffect } from "react";
import "./App.css";

function App() {
const[data,setData] = useState([]);
const[loading,setLoading] = useState(true);

const fetchData = async() => {
try {
  const response = await fetch("https://jsonplaceholder.org/posts")  
  const result = await response.json();
   setData(result)
   setLoading(false)
   console.log(result)
}catch(error) {setLoading(false) } }

useEffect(()=>{
 fetchData();
},[])
 
if(loading) return <p>Loading...</p>
 return(
  <div>
    <h1>
    Fetched data
    </h1>
    <ul>
      {data.map((user)=>{
        return <li key={user.id}>{user.slug}<p>{user.url}</p></li>
      })}
    </ul>
  </div>
 )

}
export default App;
