import React, { useEffect, useState } from 'react'
import Navbar from '../Widgets/Navbar'
import axios from 'axios'
import JSONDATA from "./crops.json"
function Crops() {
    const getAllCrops = async () => {
        // const crp = await axios.get('http://127.0.0.1:8000/api/crops/')
        setcrops(JSONDATA)
        // console.log(crp.data)
    }
    useEffect(() => {
        getAllCrops()
    }, [])

    const [crops, setcrops] = useState([])
    return (
        <div>
            <Navbar />

            {crops.map(item => {
                return (
                    <div style={{
                        border :"2px solid  red"
                    }}>
                        <h1>{item.name}</h1>
                        <img src={item.image} />
                        <p>{item.description}</p>
                        <p>season = {item.season}</p>

                        <p>price:{item.price}</p>
                    </div>
                )

            })}

        </div>
    )
}

export default Crops