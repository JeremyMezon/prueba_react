import React, {Fragment} from 'react';
import Experiencias from './experiencias'

const App = ()=> (
  <Fragment>
    <div>
      <h1 className="display-2 text-center m-5">Hola Mundo</h1>
    </div>

    <div className="row w-75 mx-auto d-flex justify-content-center my-5">
      <Experiencias/>
      <Experiencias/>
      <Experiencias/>
      <Experiencias/>
      <Experiencias/>
      <Experiencias/>
    </div>
    
  </Fragment>
)

export default App;

/*
Reglas JSX

1. Las etiquetas deben cerrarse siempre
2. Los componentes deben tener solo una etiqueta padre
3. Cuando se llama un componente para renderizar este siempre debe empezar con mayusculas
4. Usar Fragments a la hora de usar mas de 2 elementos en un mismo componente

*/