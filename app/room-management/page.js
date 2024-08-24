'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar.jsx';
import axios from 'axios';

//แสดงรายการห้องทั้งหมดในระบบ
export default function Room_management() {
    const [rooms, setRoom] = useState([]);
    

    //ดึงข้อมูลห้องจาก API

    useEffect(() => {
        axios.get('http://localhost:5000/roomservice')
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
            <div className="">
                <h1>รายการห้องทั้งหมด</h1>
                <table>
                    <thead>
                        <tr>
                            <th>หมายเลขห้อง</th>
                            <th>ชื่อห้อง</th>
                            <th>ประเภทห้อง</th>
                            <th>ราคาห้อง</th>
                            <th>สถานะห้อง</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((rooms , index) => {
                            return (
                                <tr key={index}>
                                    <td>{rooms.room_id}</td>
                                    <td>{rooms.room_number}</td>
                                    <td>{rooms.room_name}</td>
                                    <td>{rooms.room_type}</td>
                                    <td>{rooms.room_price}</td>
                                    <td>{rooms.room_status}</td>
                                    <td><img src={rooms.image} alt={rooms.description}></img></td>
                                </tr>
                            );
                        })}
                    </tbody>
                    {/* <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td><img src={user.avatar} alt={user.fname} /></td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.username}</td>
                </tr>
              ))}
            </tbody> */}
                </table>
                
            </div>
        </div>
    );
}