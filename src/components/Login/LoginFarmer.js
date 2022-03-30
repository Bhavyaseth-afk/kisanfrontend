import React, { useState, useEffect } from 'react'
import { makeStyles } from "@mui/styles"
import axios from "axios"
const useStyles = makeStyles({
    container: {
        width: "40vw",

        position: "relative",
        left: "50%",
        top: "50vh",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(250, 250, 200, 0.25)",
        boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
        padding: "5px",
        overflow: "hidden",
        borderRadius: "10px",
        alignItems: " center",
        justifyContent: " center",
        textAlign: "center"

    },
    input: {
        marginBottom: "10px",
        width: "50%",
        position: "relative",
        left: "50%",
        transform: "translate(-50%, 0%)",
    }

})
function LoginFarmer() {
    const classes = useStyles()
    const initialfarmer = {
        name: "",
        number: "",
    }

    const [farmer, setfarmer] = useState(initialfarmer)
    const submihandler = (e) => {
        e.preventDefault()

        axios.post("http://127.0.0.1:8000/api/farmer/", farmer)

        console.log(farmer)
    }
    return (
        <div className={classes.container}>
            <h1> Farmer Registration </h1>
            <form >
                <div className="form-group">

                    <input type="text" name="name" className={` ${classes.input}  form-control`} onChange={(e) => {
                        setfarmer({
                            ...farmer,
                            [e.target.name]: e.target.value
                        })
                    }} placeholder="Enter Name" />

                </div>
                <div className="form-group">
                    <input type="number" name='number' className={` ${classes.input}  form-control`} onChange={(e) => {
                        setfarmer({
                            ...farmer,
                            [e.target.name]: e.target.value
                        })
                    }} placeholder="Enter number" />
                </div>

                <button type="submit" onClick={submihandler} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default LoginFarmer