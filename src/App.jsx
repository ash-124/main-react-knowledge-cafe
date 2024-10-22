import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data));
  },[])
 
  return (
    <>
      <h1 className="text-4xl font-bold p-20">Knowledge Cafe</h1>
    </>
  );
}

export default App;
