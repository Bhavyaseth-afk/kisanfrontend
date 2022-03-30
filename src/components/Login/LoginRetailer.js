import React, { useState } from 'react'
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
function Login() {

    const classes = useStyles()
    const initialretailor = {
        retname: "",
        phnumber: "",
        address: "",
        list_items: "",
    }

    const [retailor, setretailor] = useState(initialretailor)
    const submihandler = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/retailer/", retailor)
        console.log(retailor)
    }
    return (
        <div className={classes.container}>
            <h1>Retailer Registration </h1>
            <form >
                <div className="form-group">

                    <input type="text" name="retname" onChange={(e) => {
                        setretailor({
                            ...retailor,
                            [e.target.name]: e.target.value
                        })
                    }} className={` ${classes.input}  form-control`} placeholder="Enter Name" />

                </div>
                <div className="form-group">
                    <input type="number" name='phnumber' onChange={(e) => {
                        setretailor({
                            ...retailor,
                            [e.target.name]: e.target.value
                        })
                    }} className={` ${classes.input}  form-control`} placeholder="Enter number" />
                </div>
                <div className="form-group">
                    <textarea type="text" name='address' onChange={(e) => {
                        setretailor({
                            ...retailor,
                            [e.target.name]: e.target.value
                        })
                    }} className={` ${classes.input}  form-control`} placeholder="Enter Addres" />
                </div>
                <div className="form-group">
                    <textarea type="text" name='list_items' onChange={(e) => {
                        setretailor({
                            ...retailor,
                            [e.target.name]: e.target.value
                        })
                    }} className={` ${classes.input}  form-control`} placeholder="Enter list items " />
                </div>
                <button type="submit" onClick={submihandler} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login