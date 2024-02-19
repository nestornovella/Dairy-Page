import useGetData from "../hooks/dataHook";
import ProductCard from "./productCard";


function ProductSection({data}) {

   

    return ( 
        <section className="row d-flex rounded-4 my-5 p-3 d-flex justify-content-center">
           {data && data.map((prod, index )=> {
            return <ProductCard key={index} isNew={prod.isNew} image={prod.image} name={prod.name} price={prod.price} weight={prod.weight}/>
           })}
        </section>
     );
}

export default ProductSection;