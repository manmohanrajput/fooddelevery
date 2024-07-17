import React, { useState } from 'react'
import './Home.css';
import Header from '../../component/Header'
import Explormenu from '../../component/Explormenu';
function Home() {

  const[category,setCategory]=useState("All")

  return (
    <div>
      <Header/>
      <Explormenu category={category} setCategory={setCategory}/>

    </div>
  )
}

export default Home;