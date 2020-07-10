import React, {useState, useEffect} from 'react';
import Card from './../Card/Card';
import axios from 'axios';


const CardManager = () =>{
    const [data, setData] = useState([]);
    const [palabra, setPalabra] = useState('');
    const API_KEY = 'rKARPpZeSPScJgRSdB3nSesLqT7xEcKA';
    const pintarCartas = () => {
        return data.map((item) => <Card key={item.id} src={item.images.downsized_large.url}></Card>);
    }
    useEffect(()=>{
        getGifs();
    }, [palabra, indiceActual])
    
    const getGifs= () => {
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${palabra}&limit=${peticionesPorPagina}&lang=es&offset=${indiceActual}`)
        .then(({data, status}) =>{
            setData(data.data);
        });
    }

    return (
        <div>
        <input type='text' placeholder='Busca tu GIF' onChange={(event) => {
            setPalabra(event.target.value);
        }}/>
        <br></br>{palabra}
        
        {pintarCartas()}
        </div>
    );
};

export default CardManager;