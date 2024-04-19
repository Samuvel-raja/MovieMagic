import React, { useEffect, useState } from 'react'
import Seat from '../components/Seat'
const Seats = ({data,setdata}) => {


     const handleClick = (keyq) => {
      setdata({...data,seatNo:[...data.seatNo,keyq]})
    }
  

  return (
    <>
      <div className="row mb-4">
        <div className="offset-md-1 col-md-5 d-flex">

        <Seat  handleClick={handleClick}  keyq={1} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={2} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={3} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={4} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={5} data={data} setdata={setdata}/>
        </div>
        <div className="offset-md-1 col-md-5 d-flex">
        <Seat  handleClick={handleClick}   keyq={6} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={7} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={8} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={9} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={10} data={data} setdata={setdata}/>
        </div>
        <div className="offset-md-1 col-md-5 d-flex">
        <Seat  handleClick={handleClick}   keyq={11} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={12} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={13} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={14} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={15} data={data} setdata={setdata}/>
        </div>
        <div className="offset-md-1 col-md-5 d-flex">
        <Seat  handleClick={handleClick}   keyq={16} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={17} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={18} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={19} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={20} data={data} setdata={setdata}/>
      
        </div>
        <div className="offset-md-1 col-md-5 d-flex">
        <Seat  handleClick={handleClick}   keyq={21} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={22} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={23} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={24} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={25} data={data} setdata={setdata}/>
      
        </div>
        <div className="offset-md-1 col-md-5 d-flex">
        <Seat  handleClick={handleClick}   keyq={26} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={27} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={28} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={29} data={data} setdata={setdata}/>
        <Seat  handleClick={handleClick}   keyq={30} data={data} setdata={setdata}/>
      
        </div>
      </div></>
  )
}

export default Seats