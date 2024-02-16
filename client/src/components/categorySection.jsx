import CategoryCard from "./categoryCard";


function CategorySection({lacteos, perfumeria}) {
    return (  
        <section className=" row mt-5 rounded-4 d-flex justify-content-around p-5">
            <CategoryCard callBack={lacteos} title={"LACTEOS"}/>
            <CategoryCard callBack={perfumeria} title={"PERFUMERIA"}/>
        </section>
    );
}

export default CategorySection;
