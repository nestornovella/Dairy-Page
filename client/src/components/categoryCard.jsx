import './../App.css';


function CategoryCard({title}) {
    return (  
        <button className={"btn btn-outline-primary col-xl-3 text-light  categoryCard rounded-4  d-flex justify-content-center align-items-center m-3"}>
            <h2 className="font-weight-bolder">{title}</h2>
        </button>
    );
}

export default CategoryCard;