import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/bookmovie.css'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Seats from '../components/Seats'
const BookMovie = ({ data1 }) => {
  const { id } = useParams();
  const [data, setdata] = useState(
    {
      title: "",
      discription: "",
      image: "",
      show: "",
      name:"",
      mob:"",
      seatNo: [],
    }
  )

  const fun = async () => {
    if (data1[id]) {
      let res = await data1[id];
      let { title, description, image } = res
      setdata({...data,title: title, discription: description, image: image});
       
    }
  }

  useEffect(() => {
    fun();
  }, [])



  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(data)
      const datapost = await axios.post('http://localhost:5000/moviebook/', data)
      navigate('/bookings')
    } catch (err) {
      console.log(err.response.data);
    }
  }





  const handleChange = (e) => {
  
      setdata({ ...data, [e.target.name]: e.target.value });
    
  };


  return (
    <>
      <Navbar data={data} />
      <div className="container-fluid bookmoviecont">

        <div className="row mt-5">

          <div className="offset-md-1 col-md-6">
            <img src={data.image?data.image:"https://compote.slate.com/images/721112a8-1fa9-4a48-8eeb-0c4f29e0d8f6.jpeg?crop=1554%2C1036%2Cx2%2Cy0"} className='movieimage' alt="" />
          </div>
          <div className="m-3 col-md-4">
            <form onSubmit={handleSubmit} method='post'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Title</label>
                <input type="text" class="form-control" name='title' value={data.title} onChange={handleChange} id="exampleInputEmail1" />

              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Show</label>
                <input type="text" class="form-control" name='show' value={data.show} onChange={handleChange} id="exampleInputEmail1" />

              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Seat No</label>
                <input type="text" class="form-control" name='seatNo' value={data.seatNo} onChange={handleChange} id="exampleInputPassword1" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Name</label>
                <input type="text" class="form-control" name='name' value={data.name} onChange={handleChange} id="exampleInputPassword1" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Mobile</label>
                <input type="text" class="form-control" name='mob' value={data.mob} onChange={handleChange} id="exampleInputPassword1" />
              </div>


              <button type="submit" class="btn btn-primary" >Submit</button>
             

                      
               </form>
          </div>
        <h2 className='text-center mt-5'>SELECT YOUR SEAT</h2>

          <Seats data={data} setdata={setdata} /> 
             
           
        </div>

      </div>
    </>
  )
}

export default BookMovie