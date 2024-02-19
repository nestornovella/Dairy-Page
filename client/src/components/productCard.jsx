import './../App.css';


function ProductCard({price, weight, name, image, isNew}) {
    return (
        <div className="col-xl-4 small col-sm-6 cardContainer" >
            {isNew &&  <img className='newImage' src="https://www.desab.com.ar/wp-content/uploads/2020/11/producto-nuevo-png-1-300x297.png" alt="" />        }
            <div className="card mb-3 "  >
                <div className="row g-0 d-flex align-items-center">
                    <div className="col-md-6">
                        <img src={image} width={250} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Imagen de caracter ilustrativo. el peso de los productos es el que se encuentra especificado</p>
                            <div className="row d-flex justify-content-center p-2">
                                <div className="col-xl-12 d-flex justify-content-around ">
                                    <div type="button" className="btn btn-primary  ">{weight}</div>
                                    <div type="button" className="btn btn-secondary ">{price}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductCard;