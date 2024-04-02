import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search';
import './App.css';
import CategorySection from './components/categorySection';
import ProductSection from './components/product/productSection';
import { useEffect, useState } from 'react';
import comestibles from "./data/comestibles.json"
import noComestibles from "./data/noComestibles.json"
import CartHandler from './components/cart/cartHandler';
import useSendData from './hooks/templateWhatsapp';
import Entrega from './components/fechaDeEntrega';
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setSeller, setSellerNumber } from './redux/actions/actions';

function App() {
  const [data, setData] = useState([])
  const [category, setCategory] = useState("lacteos")
  const [pedido, setPedido] = useState([])
  const location = useLocation()
  const queyParams = new URLSearchParams(location.search)
  const queyParams2 = new URLSearchParams(location.search)

  const seller = queyParams.get("seller") || ''
  const phoneNumber = queyParams2.get("number")
  const dispatch = useDispatch()

  console.log(seller, 'xxx')
  useSendData()

  useEffect(() => {
    dispatch(setSeller(seller))
    dispatch(setSellerNumber(phoneNumber))
  }, [])

  useEffect(() => {
    if (category === 'lacteos') {
      setData(comestibles)
    } else if (category === "perfumeria") {
      setData(noComestibles)
    } else {
      setData([...comestibles, ...noComestibles].filter(prod => prod.isNew))
    }

  }, [category])

  function lacteos() {
    setCategory("lacteos")
  }

  function perfumeria() {
    setCategory("perfumeria")
  }

  function newProducts() {
    setCategory("nuevos")
  }
  function search(param) {
    if (param) {
      setData(() => [...comestibles, ...noComestibles].filter(prod => prod.name.toLowerCase().includes(param.toLowerCase())))
    } else {
      if (category === 'lacteos') {
        setData(comestibles)
      } else {
        setData(noComestibles)
      }
    }
  }

  function addToCart(product) {
    let found = false
    pedido.forEach(prod => prod.name === product.name ? found = true : "")

    !found &&
      setPedido(prev => [...prev, product])
  }

  function deleteProductCart(name) {
    setPedido(prev => [...prev].filter(prod => !prod.name.includes(name)))
  }

  return (
    <>
      <Entrega />
      <div className="container">
        {
          seller ?
          <>
            <CartHandler deleteProductCart={deleteProductCart} pedido={pedido} />
            <Search callback={search} />
            <CategorySection current={category} newProducts={newProducts} lacteos={lacteos} perfumeria={perfumeria} />
            <ProductSection addProduct={addToCart} category={category} data={data} />
          </>
          :
          <img src="https://ouch-cdn2.icons8.com/AJmx6KGJa1nR6XZCFa2FYeRDUG4GiKDJoFoSBKd1rU8/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzE4/L2M2MTk5YjIxLTI4/MDctNDZmYS1hMTVk/LWQyZTBkNGI1NGU2/NC5zdmc.png" alt="" />

        }


      </div>
    </>


  )
}

export default App
