import React, { useState } from 'react'

const Seat = ({handleClick,keyq,data,setdata}) => {
    const [color,setcolor]=useState(false)
    const clicked=()=>
    {
        if(color==true )
        {
            const rem=data.seatNo.filter((data)=>
                data!=keyq)
            setdata({...data,seatNo:rem})
            console.log(data)
            setcolor(!color);
        }
        else{
            handleClick(keyq);
            setcolor(!color);
        }
       
        
    }
    return (
        <>


            <div style={{ borderTopRightRadius: '30px', borderTopLeftRadius: "30px",  width: "100px", height: "100px", margin: "5px",cursor:"pointer",backgroundColor:(color)?"red":"black"}} onClick={()=>clicked()}></div>


        </>
    )
}

export default Seat