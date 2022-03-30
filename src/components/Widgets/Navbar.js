import React from 'react'
import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'/home'}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'/crops'}>Crops</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'/schemes'} >schemes</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page"to={'/feed'}>feed</Link>
                            </li>
                            




                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
