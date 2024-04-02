import { useSelector } from "react-redux";
import ProductCard from "./productCard";
import sellersList from '../../data/vendedores.json'

function ProductSection({data, addProduct, category}) {

   const seller = useSelector( store => store.seller)
   const sellerSelected = sellersList.filter(e => e.name == seller) || []
   


   let porcent =  0

   if(sellerSelected.length){
      porcent = category.includes("lacteos") ? sellerSelected[0].comestiblePorcent : sellerSelected[0].noComestiblePorcent
   }


   
   
   

    return ( 
        <section className="row d-flex rounded-4 my-5  d-flex justify-content-center">
           {data && data.map((prod, index )=> {
            return <ProductCard addProduct={addProduct} prod={{...prod, price:"$ " + ((prod.price.slice(1).trim() * porcent ) / 100 + parseInt(prod.price.slice(1).trim()))}} key={index} isNew={prod.isNew} image={prod.image} name={prod.name} 
            price={"$ " + ((prod.price.slice(1).trim() * porcent ) / 100 + parseInt(prod.price.slice(1).trim())) } weight={prod.weight}/>
           })}
        </section>
     );
}

export default ProductSection;