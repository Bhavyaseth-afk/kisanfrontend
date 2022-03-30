import React from 'react'
import { makeStyles } from "@mui/styles"
import { Link, useNavigate } from 'react-router-dom';


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
    },
    button: {
        fontSize: "1.5em"
    }

})
function Choose() {
    const navigate = useNavigate();
    const classes = useStyles()
    const redirectFarmer = () => {
        navigate('/loginfamer');

    }
    const redirectRetailor = () => {
        navigate('/loginreatailor');
    }
    return (
        <div className={classes.container}>
            <h1>Login / Register as </h1>
            <form>
                <div class={`btn-group ${classes.button}`} role="group" aria-label="Basic example">
                    <Link to='/loginfarmer'>
                        <button className={` btn btn-secondary ${classes.button}`} onCLick={(e) => redirectFarmer()} type="button" >Farmer </button>
                    </Link>
                    <Link to='/loginretailor'>
                        <button className={` btn btn-secondary ${classes.button}`} onCLick={(e) => redirectFarmer()} type="button" >Retailer </button>
                    </Link>
                </div>
            </form >
        </div >
    )
}

export default Choose