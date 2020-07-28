import React from 'react';
import PropTypes from 'prop-types';

const Experiencias = (props)=> (
    <div className="col-12 col-md-6 col-lg-4 p-3">
        <div className="card">
            <img className="card-img-top" src={props.imagen} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descripcion}</p>
                <a href={props.enlace} target="_blank" className="btn btn-primary">Mas informacion</a>
            </div>
        </div>
    </div>    
)

Experiencias.propTypes = {
    titulo: PropTypes.string,
    imagen: PropTypes.string,
    descripcion: PropTypes.string,
    enlace: PropTypes.string,
}

Experiencias.defaultProps = {
    titulo: "Sin Titulo",
    imagen: "https://visualsound.com/wp-content/uploads/2019/05/unavailable-image.jpg",
    descripcion: "Sin nada que decir",
    enlace: "#",
}

export default Experiencias;