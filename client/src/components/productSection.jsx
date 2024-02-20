import useGetData from "../hooks/dataHook";
import ProductCard from "./productCard";


function ProductSection({data, addProduct}) {

   

    return ( 
        <section className="row d-flex rounded-4 my-5  d-flex justify-content-center">
           {data && data.map((prod, index )=> {
            return <ProductCard addProduct={addProduct} prod={prod} key={index} isNew={prod.isNew} image={prod.image} name={prod.name} price={prod.price} weight={prod.weight}/>
           })}
        </section>
     );
}

export default ProductSection;