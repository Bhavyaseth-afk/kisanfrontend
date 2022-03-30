import React, { useEffect, useState } from 'react'
import axios from "axios"
function App() {
    const [kisan, setKisans] = useState([])
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          });
        async function getAllkisan() {
            try {
                const kisans = await axios.get('http://127.0.0.1:8000/api/kisan/')
                console.log(kisans.data)
                setKisans(kisans.data)
            } catch (err) {
                console.log(err)
            }
        }
        getAllkisan()
    }, [])
    return (
        <div className='App'>
            <h1>Connect react to django </h1>
            {kisan.map(item => {
                return (
                    <div>
                        <h1>{item.name}</h1>
                        <p>{item.number}</p>
                    </div>

                )
            })}
        </div>
    )
}

export default App;