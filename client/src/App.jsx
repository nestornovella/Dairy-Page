import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search';
import './App.css';
import CategorySection from './components/categorySection';
import ProductSection from './components/productSection';
import Navbar from './components/nav';
import { useEffect, useState } from 'react';
import comestibles from"./comestibles.json"
import noComestibles from"./noComestibles.json"


function App() {
  const [data, setData]= useState([])
  const [category, setCategory]= useState("lacteos")


  useEffect(()=>{
    if(category === 'lacteos'){
      setData(comestibles)
    }else{
      setData(noComestibles)
    }

  },[category])

  function lacteos(){
    setCategory("lacteos")
  }

  function perfumeria(){
    setCategory("perfumeria")
  }

  return (
    <div>
      <div className="container">
        <Search />
        <CategorySection lacteos={lacteos} perfumeria={perfumeria} />
        <ProductSection data={data} />
      </div>
    </div>


  )
}

export default App
