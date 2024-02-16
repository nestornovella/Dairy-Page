import CategoryCard from "./categoryCard";


function CategorySection() {
    return (  
        <section className="bg-dark row mt-5 rounded-4 d-flex justify-content-around p-5">
            <CategoryCard title={"LACTEOS"}/>
            <CategoryCard title={"PERFUMERIA"}/>
        </section>
    );
}

export default CategorySection;
