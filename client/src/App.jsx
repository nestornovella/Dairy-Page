import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search';
import './App.css';
import CategorySection from './components/categorySection';
import ProductSection from './components/product/productSection';
import { useEffect, useState } from 'react';
import comestibles from"./comestibles.json"
import noComestibles from"./noComestibles.json"
import CartHandler from './components/cart/cartHandler';
import useSendData from './hooks/templateWhatsapp';


function App() {
  const [data, setData]= useState([])
  const [category, setCategory]= useState("lacteos")
  const [pedido, setPedido]= useState([])
  
  useSendData()
  
  useEffect(()=>{
    if(category === 'lacteos'){
      setData(comestibles)
    }else if(category === "perfumeria"){
      setData(noComestibles)
    }else{
      setData([...comestibles, ...noComestibles].filter(prod => prod.isNew))
    }

  },[category])

  function lacteos(){
    setCategory("lacteos")
  }

  function perfumeria(){
    setCategory("perfumeria")
  }

  function newProducts(){
    setCategory("nuevos")
  }
  function search(param){
    if(param){
      setData(() => [...comestibles, ...noComestibles].filter(prod => prod.name.toLowerCase().includes(param.toLowerCase())))
    }else{
      if(category === 'lacteos'){
        setData(comestibles)
      }else{
        setData(noComestibles)
      }
    }
  }

  function addToCart(product){
    let found = false
    pedido.forEach(prod => prod.name === product.name ? found = true : "")

    !found && 
    setPedido(prev => [...prev, product])
  }

  function deleteProductCart(name){
    setPedido(prev => [...prev].filter(prod => !prod.name.includes(name)))
  }

  return (
    
      <div className="container">
        <CartHandler  deleteProductCart={deleteProductCart} pedido={pedido}/>
        <Search callback={search}/>
        <CategorySection  current={category} newProducts={newProducts} lacteos={lacteos} perfumeria={perfumeria} />
        <ProductSection addProduct={addToCart} data={data} />
      </div>
    


  )
}

export default App
