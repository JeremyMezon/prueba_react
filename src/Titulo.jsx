import React from 'react';
import PropsTypes from 'prop-types';

const Titulo = (props)=> (
    <>
        <div className="col-12">
            <div className="d-flex flex-column titulo-react">
                <h2>{props.titulo}</h2>
                <h3>{props.subtitulo}</h3>
            </div>
        </div>
    </>
)

Titulo.defaultProps = {
    titulo: "Sin Titulo",
    subtitulo: ""
}

export default Titulo