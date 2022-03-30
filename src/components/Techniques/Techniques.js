import React, { useEffect, useState } from 'react'
import Navbar from '../Widgets/Navbar'
import axios from 'axios'
function Techniques() {
    const getAllTechniques = async () => {
        const crp = await axios.get('http://127.0.0.1:8000/api/farmtech/')
        setTechniques(crp.data)
        console.log(crp.data)
    }
    useEffect(() => {
        getAllTechniques()
    }, [])

    const [techniques, setTechniques] = useState([])
    return (
        <div>
            <Navbar />

            {techniques.map(item => {
                return (
                    <div>
                        <h1>{item.techname}</h1>
                        <p>{item.techdes}</p>
                        
                    </div>
                )

            })}

        </div>
    )
}

export default Techniques