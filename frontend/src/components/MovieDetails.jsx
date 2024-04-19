import React, { useEffect } from 'react'
import '../styles/moviedetail.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MovieDetails = ({ data , fetchdata2}) => {

    useEffect(()=>
    {
     fetchdata2();
    },[])
    return (<>
         <Navbar data={data}/>
        <div className='container-fluid'>
            <h2 style={{ padding: "2px", borderRadius: "30px", backgroundColor: "black", color: "white" }}>ALL BOOKINGS</h2>
            <div className="card-deck">
                <div className="row">
                    {data && data.map((items, index) =>
                        <div className="col-md-3" key={index}>
                            <div class="card bookdetail">

                                <div class="card-body">
                                    <h5 class="card-title">Movie : {items.title}</h5>
                                    <p class="card-text"><strong>Show : </strong>{items.show}</p>
                                    <p class="card-text"><strong>Seats : </strong>{items.seatNo.join(',')}</p>
                                    <p class="card-text"><strong>Name : </strong>{items.name}</p>
                                    <p class="card-text"><strong>Mobile : </strong>{items.mob}</p>
                                    <Link to={`/updatemovie/${index}`} className="btn btn-success">Update</Link>
                                </div>
                            </div>
                        </div>

                    )}
                </div> </div></div>
    </>
    )
}

export default MovieDetails