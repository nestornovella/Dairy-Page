import './../App.css';


function CategoryCard({ current, title, callBack, color }) {
    const isActive = current.toLowerCase() === title.toLowerCase();

    return (
        <button onClick={callBack} className={` w-100 categoryCard ${isActive ? 'active' : ''}`} style={{ backgroundColor: color }}>
            <h2 className="font-weight-bolder">{title}</h2>
        </button>
    );
}

export default CategoryCard;