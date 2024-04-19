import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import '../styles/moviespage.css'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
const MoviesPage = ({data}) => {

  // const [data, setdata] = useState([])
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     await axios.get('http://localhost:5000/allmovies').then((res) => setdata(res.data.message)).catch((e) => console.log(e))
  //   }
  //   fetchdata()
  // }, [])
  return (
    <>
     <Navbar data={data}/>
      <Header />

      <div className='container-fluid'>
        <h2 style={{padding:"5px",borderRadius:"30px",backgroundColor:"black",color:"white"}}>ALL MOVIES</h2>
        <div className="card-deck">
          <div className="row">
            {data && data.map((items, index) =>
              <div className="col-md-3">
                <div class="card movies">
                  <img class="card-img-top" src={items.image} alt="No image" />
                  <div class="card-body">
                    <h5 class="card-title">{items.title}</h5>
                    <p class="card-text">{items.description}</p>
                    <p class="card-text"><strong>Genre: </strong>{items.genre}</p>
                    <p class="card-text"><strong>Popular casts: </strong>{items.cast}</p>
                    <Link to={`/bookmovie/${index}`}><button class="btn btn-primary">Book now</button></Link>
                  </div>
                </div>
              </div>

            )}
          </div> </div></div>
          <Link className="link" style={{textDecoration:"none",color:"black",fontSize:"larger",display:"flex",justifyContent:"center"}} to='/'><h3 style={{padding:"15px",borderRadius:"30px",backgroundColor:"black",color:"white"}}>Back</h3></Link>
    </>
  )
}

export default MoviesPage