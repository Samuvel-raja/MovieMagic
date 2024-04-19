import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/movieitem.css'
import { Link } from 'react-router-dom'

const MovieItemHome = ({ data }) => {

    return (<>
        <div className='container-fluid'>
            <h2 style={{ padding: "5px", borderRadius: "30px", backgroundColor: "black", color: "white" }}>POPULAR MOVIES</h2>
            <div className="card-deck">
                <div className="row">
                    {data && data.slice(0, 4).map((items, index) =>
                        <div className="col-md-3" key={index}>
                            <div class="card movieitem">
                                <img class="card-img-top" src={items.image} alt="No image" />
                                <div class="card-body">
                                    <h5 class="card-title">{items.title}</h5>
                                    <p class="card-text">{items.description}</p>
                                    <p class="card-text"><strong>Genre: </strong>{items.genre}</p>
                                    <p class="card-text"><strong>Popular casts: </strong>{items.cast}</p>
                                    <div className="card-footer">
                                        <Link to={`/bookmovie/${index}`}><button class="btn btn-primary">Book now</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                </div> </div></div>

        <Link style={{ textDecoration: "none", color: "black", fontSize: "medium", display: "flex", justifyContent: "center" }} to='/movies'><h3 style={{ padding: "15px", borderRadius: "30px", backgroundColor: "black", color: "white" }}>All Movies</h3></Link>
    </>

    )
}

export default MovieItemHome