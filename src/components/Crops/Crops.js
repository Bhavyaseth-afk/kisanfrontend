import React, { useEffect, useState } from 'react'
import Navbar from '../Widgets/Navbar'
import axios from 'axios'
function Crops() {
    const getAllCrops = async () => {
        const crp = await axios.get('http://127.0.0.1:8000/api/crops/')
        setcrops(crp.data)
        console.log(crp.data)
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
                    <div>
                        <h1>{item.cropname}</h1>
                        <p>{item.description}</p>
                        <p>price:{item.price}</p>
                    </div>
                )

            })}

        </div>
    )
}

export default Crops