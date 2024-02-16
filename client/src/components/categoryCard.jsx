import './../App.css';


function CategoryCard({title, callBack}) {
    return (  
        <button onClick={callBack} className={"btn btn-outline-primary col-xl-3  categoryCard rounded-4  d-flex justify-content-center align-items-center m-3"}>
            <h2 className="font-weight-bolder">{title}</h2>
        </button>
    );
}

export default CategoryCard;