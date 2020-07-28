import React, {Fragment} from 'react';
import Experiencias from './experiencias'
import Titulo from './Titulo';
import Formulario from './Formulario';

const cartas = [
  {
    "titulo": "Metal Gear Solid V",
    "imagen": "https://store-images.s-microsoft.com/image/apps.5012.65806558541457305.a0ff0982-eced-4bfd-bb78-5ba7a73376c4.069fcd98-6d14-48a3-82a3-074b07fb3acb?mode=scale&q=90&h=1080&w=1920",
    "descripcion": "Infiltracion",
    "enlace": "https://www.egifter.com/giftcards"
  },
  {
    "titulo": "Grand Theft Auto V",
    "imagen": "https://www.alfabetajuega.com/wp-content/uploads/2019/11/Grand-Theft-Auto-V.jpg",
    "descripcion": "Just Do it",
    "enlace": "https://www.egifter.com/giftcards"
  },
  {
    "titulo": "Red Dead Redemption 2",
    "imagen": "https://www.gamersrd.com/wp-content/uploads/2018/04/Red-Dead-Redemption-2-Rockstar-games-GamersRD.jpg",
    "descripcion": "Aprovecha las mejores aplicaciones para android",
    "enlace": "https://www.egifter.com/giftcards"
  }
]

const App = ()=> (
  <Fragment>
    <Titulo 
      titulo = "Componentes Presentacionales"
      subtitulo = "Tarjetas"
    />

    <div className="row w-75 mx-auto d-flex justify-content-center my-5">
      {
        cartas.map(
          carta => <Experiencias 
            titulo = {carta.titulo}
            imagen = {carta.imagen}
            descripcion = {carta.descripcion}
            enlace = {carta.enlace}
          />
        )
      }
    </div>

    <Titulo 
      titulo = "Componentes de Clases"
      subtitulo = "Formulario"
    />

    <Formulario />
    
  </Fragment >
)

export default App;

/*
Reglas JSX

1. Las etiquetas deben cerrarse siempre
2. Los componentes deben tener solo una etiqueta padre
3. Cuando se llama un componente para renderizar este siempre debe empezar con mayusculas
4. Usar Fragments a la hora de usar mas de 2 elementos en un mismo componente

*/