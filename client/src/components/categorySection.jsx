import CategoryCard from "./categoryCard";


function CategorySection({current, newProducts, lacteos, perfumeria}) {
    return (  
        <div className="row mt-4 rounded-4  ">
            <div className="col-xl-4 my-1">
            <CategoryCard current={current} callBack={lacteos} color={"#F934FF"} title={"LACTEOS"}/>
            </div>
            <div className="col-xl-4 my-1">
            <CategoryCard current={current} callBack={perfumeria} color={"#2488BA"} title={"PERFUMERIA"}/>
            </div>
            <div className="col-xl-4 my-1">
            <CategoryCard current={current} callBack={newProducts} color={"#C67A2F"} title={"NUEVOS"}/>
            </div>
        </div>
    );
}

export default CategorySection;
