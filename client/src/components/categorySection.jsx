import CategoryCard from "./categoryCard";


function CategorySection({current, newProducts, lacteos, perfumeria}) {
    return (  
        <div className="row mt-3 rounded-4 ">
            <div className="col-xl-4 my-1">
            <CategoryCard current={current} callBack={lacteos} color={"#89cff0"} title={"LACTEOS"}/>
            </div>
            <div className="col-xl-4 my-1">
            <CategoryCard current={current} callBack={perfumeria} color={"#86b6f4"} title={"PERFUMERIA"}/>
            </div>
            <div className="col-xl-4 my-1">
            <CategoryCard current={current} callBack={newProducts} color={"#ff6961"} title={"NUEVOS"}/>
            </div>
        </div>
    );
}

export default CategorySection;
