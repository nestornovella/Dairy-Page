


function OfertaAnuncio({discount}) {
    return ( 

        <div className="row ofertContainer">
            {discount.type == 'porcent' &&
                <p>Oferta <span>Producto con {discount.disc} % descuento</span></p>
            
            }
            {
                discount.type == 'cuantity' && 
                <p>Oferta <span>lleva {discount.disc[0]} paga {discount.disc[1]}</span></p>
            }
        </div>
     );
}

export default OfertaAnuncio;