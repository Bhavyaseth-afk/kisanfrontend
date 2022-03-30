import React, { useEffect, useState } from 'react'
import Home from "./components/Home/Home"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Navbar from './components/Widgets/Navbar'
import Crops from './components/Crops/Crops'
import Schemes from './components/Schemes/Schemes'
import Feed from './components/Feed/Feed'
import LoginRetailer from './components/Login/LoginRetailer'
import LoginFarmer from "./components/Login/LoginFarmer"
import Choose from './components/Choose/Choose'
function App() {
<<<<<<< HEAD
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
=======
    // const [kisan, setKisans] = useState([])
    // useEffect(() => {
    //     async function getAllkisan() {
    //         try {
    //             const kisans = await axios.get('http://127.0.0.1:8000/api/kisan/')
    //             console.log(kisans.data)
    //             setKisans(kisans.data)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     getAllkisan()
    // }, [])
>>>>>>> db1c2ef16eefa0411436af3084f227d90041a02d
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Choose />} />
                    <Route exact path='/loginretailor' element={<LoginRetailer />} />
                    <Route exact path='/loginfarmer' element={<LoginFarmer />} />
                    <Route exact path='/Home' element={<Home />} />
                    <Route exact path='/crops' element={<Crops />} />
                    <Route exact path='/schemes' element={<Schemes />} />
                    <Route exact path='/feed' element={<Feed />} />
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default App;