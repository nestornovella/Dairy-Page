import './../App.css';


function CategoryCard({title, callBack, color}) {
    return (  
        <button  onClick={callBack} className=" p-4 w-100 categoryCard" style={{backgroundColor:color}}>
            <h2 className="font-weight-bolder">{title}</h2>
        </button>
    );
}

export default CategoryCard;