import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App({id, color, children}) {
  const colorFijo = color || 'yellow';
  const [valor, setValor] = useState(id);
  const [background, setBackground] = useState(colorFijo)
  useEffect(()=>{
    console.log('useEffect' + valor);
  }, [background])
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: background}}>
        <h1>{valor}</h1>
        {children}
        <p>
          Hola mundo!
        </p>
        <button onClick={() => {setValor(valor + 1)}}>Aumentar :D</button>
        <button onClick={() => {setValor(valor - 1)}}>Restar D:</button>
        <button onClick={() => {setBackground('green')}}>Cambiar color</button>
        <button onClick={() => {setBackground(colorFijo)}}>Regresa a tu color</button>
      </header>
    </div>
  );
}

export default App;
