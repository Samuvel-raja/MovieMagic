import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import Seats from '../components/Seats'

const UpdateMovie = ({data,setdata,fetchdata2}) => {
  console.log(data);
    const { id } = useParams();
    const [data1, setdata1] = useState(
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
    const navigate=useNavigate()
    const fun = async () => {
        if (data[id]) {
          let res = await data[id];
          let { title, show, seatNo,image,name,mob } = res
          setdata1({title: title, show: show, seatNo: seatNo,name:name,mob:mob});
        }
      }
    
      useEffect(() => {
        fun();
      }, [])
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // setdata([...data,{data}])
            // console.log(data)
            await axios.put(`http://localhost:5000/updatebook/${data[id]._id}`,data1).then((res)=>console.log(res.data)).catch((err)=>console.log(err));
            fetchdata2();
            navigate('/bookings')
        } catch (error) {
           
            console.log(error);
        }
    };
    

    const handleChange = (e) => {
      const { name, value } = e.target;
    
      if (name === "seatNo") {
        // Split the value into an array of individual seats
        const seatNumbers = value.split(",").filter((seat) => seat.trim() !== "");
        
        // Update the state with the array of individual seats
        setdata1((prevData) => ({
          ...prevData,
          [name]: seatNumbers
        }));
      } else {
        setdata1((prevData) => ({
          ...prevData,
          [name]: value
        }));
      }
    };
    
  
    
    
  return (
    <>
       <Navbar data={data} />
      <div className="container-fluid bookmoviecont">

        <div className="row mt-5">

          <div className="offset-md-1 col-md-6">
            <img src="https://variety.com/wp-content/uploads/2022/12/100-Greatest-Movies-Variety.jpg?w=1000&h=563&crop=1" className='movieimage' alt="" />
          </div>
          <div className="m-3 col-md-4">
            <form onSubmit={handleSubmit} method='post'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Title</label>
                <input type="text" class="form-control" name='title' value={data1.title} onChange={handleChange} id="exampleInputEmail1" />

              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Show</label>
                <input type="text" class="form-control" name='show' value={data1.show} onChange={handleChange} id="exampleInputEmail1" />

              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Seat No</label>
                <input type="text" class="form-control" name='seatNo' value={data1.seatNo} onChange={handleChange} id="exampleInputPassword1" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Name</label>
                <input type="text" class="form-control" name='name' value={data1.name} onChange={handleChange} id="exampleInputPassword1" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Mobile</label>
                <input type="text" class="form-control" name='mob' value={data1.mob} onChange={handleChange} id="exampleInputPassword1" />
              </div>


              <button onClick={handleSubmit} class="btn btn-primary" >Update</button>
             

                      
               </form>
          </div>
        <h2 className='text-center mt-5'>SELECT YOUR SEAT</h2>

          <Seats data={data1} setdata={setdata1} /> 
             
           
        </div>

      </div>
    </>
  )
}

export default UpdateMovie