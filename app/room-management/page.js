'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar.jsx';
import axios from 'axios';
import { Footer } from '../component/Footer.jsx';

//แสดงรายการห้องทั้งหมดในระบบ
export default function Room_management() {
    const [rooms, setRoom] = useState([]);
  

    //ดึงข้อมูลห้องจาก API
    useEffect(() => {
        axios.get('https://depa-backend-three.vercel.app/roomservice/')
        .then(response => {
         if(response.status === 200){
             console.log(response.data);
             setRoom(response.data);
         }else{
             res.status(500).send({message: {message: "Error"}})
         }
        })
     },[])

    return (
        <div>
            <Navbar/>
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 transition duration-150 ease-in-out" role="alert">
                <h1 className="font-bold">รายการห้องทั้งหมด</h1>
            </div>
            <div className=" ">
                <table className=' w-8/12 mt-4 mx-auto shadow-2xl rounded'>
                    <thead className= "bg-blue-500 w-8/12 mt-4 mx-auto h-10  ">
                        <tr className=" px-4 my-4 text-center h-10 ">
                            <th className=''>หมายเลขห้อง</th>
                            <th>ชื่อห้อง</th>
                            <th>ประเภทห้อง</th>
                            <th>ราคาห้อง</th>
                            <th>สถานะห้อง</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='text-center  '>
                        {rooms.map((rooms , index) => {
                            return (
                                <tr key={index} className='border-collapse border my-px odd:bg-white even:bg-slate-50 '>
                                    <td>{rooms.room_id}</td>
                                    <td>{rooms.room_name}</td>
                                    <td>{rooms.room_type}</td>
                                    <td>{rooms.room_price}</td>
                                    <td>{rooms.room_status}</td>
                                    <td><img src={rooms.image} alt={rooms.description} className='h-10 w-10 rounded-full'></img></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
          
       
    );
}