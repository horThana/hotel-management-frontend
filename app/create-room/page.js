'use client';

import Navbar from '../component/navbar/navbar.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function createRoom() {
  
    const [formDataRoom, setFormDataRoom] = useState({
        room_id: '',
        room_name: '',
        room_type: '',
        room_price: '',
        room_status: '',
        image: '',
        description: ''
    });

    const [message, setMessage] = useState('');

    const handleChange_createRoom = (e) => {
        setFormDataRoom({
          ...formDataRoom,
          [e.target.name]: e.target.value
        });
    };

    //ฟังก์ชันสำหรับสร้างห้องเพิ่ม
    const handleSubmit_createRoom =  (e) => {
    
      // Simulate an API call with mock data
    axios.post('http://localhost:5000/roomservice/create-room', formDataRoom)
      .then(response => {
        if(response.status === 201){
            console.log(response.data);
            setFormDataRoom(response.data);
            
        }else{
            res.status(500).send({message: {message: "Error"}})
        }
      })
         .catch(error => {
          console.log(error + "ไม่สามารถเพิ่มห้องได้");
         },[]);
  };

    // const handleSubmit_createRoom = async (e) => {
    //     e.preventDefault();
    //       axios.post('http://localhost:5000/roomservice/create-room', formDataRoom)
    //       .then(response => {
    //         if(response.status === 201){
    //           console.log('Room created successfully');
    //           setFormDataRoom({
    //             room_id: '',
    //             room_name: '',
    //             room_type: '',
    //             room_price: '',
    //             room_status: '',
    //             image: '',
    //             description: ''
    //           });
    //           }else{
    //             setMessage('Room created failed');
    //           }
    //         })
    //         .catch(error => {
    //           console.log(error + "ไม่สามารถเพิ่มห้องได้");
    //         });
    //       }
    // }

  // const handleSubmit_createRoom = async (e) => {
  //   e.preventDefault();
  //     axios.post('http://localhost:5000/roomservice/create-room', formDataRoom)
  //     .then(response => {
  //       if(response.status === 201){
  //         console.log('Room created successfully');
  //         setFormDataRoom({
  //           room_id: '',
  //           room_name: '',
  //           room_type: '',
  //           room_price: '',
  //           room_status: '',
  //           image: '',
  //           description: ''
  //         });
  //         }else{
  //           setMessage('Room created failed');
  //         }
  //       })
  //       .catch(error => {
  //         console.log(error + "ไม่สามารถเพิ่มห้องได้");
  //       });
  //     };


  return (
    <div>
      <Navbar/>
      <div>
        <h1>Employee Management This is Employee Page.</h1>
      </div>
      <h1>เพิ่มห้องพัก</h1>
      <div>
        
        <form action="/create-room" onSubmit={handleSubmit_createRoom} method='post'>
                    <label>
                        Room ID:
                        <input
                            type="text"
                            name="room_id"
                            value={formDataRoom.room_id}
                            onChange={handleChange_createRoom}
                            required = {true}
                        />
                    </label>
                    <br />
                    <label>
                        Room Name:
                        <input
                            type="text"
                            name= "room_name"
                            value={formDataRoom.room_name}
                            onChange={handleChange_createRoom}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Room Type:
                        <input
                            type="text"
                            name="room_type"
                            value={formDataRoom.room_type}
                            onChange={handleChange_createRoom}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Room Price:
                        <input
                            type="number"
                            name="room_price"
                            value={formDataRoom.room_price}
                            onChange={handleChange_createRoom}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Room Status:
                        <input
                            type="text"
                            name="room_status"
                            value={formDataRoom.room_status}
                            onChange={handleChange_createRoom}
                            required = {false}
                            
                        />
                    </label>
                    <br />
                    <label>
                        Image:
                        <input
                            type="text"
                            name="image"
                            value={formDataRoom.image}
                            onChange={handleChange_createRoom}
                            
                        />
                    </label>
                    <br />
                    <label>
                        Description:
                        <input
                            type="text"
                            name="description"
                            value={formDataRoom.description}
                            onChange={handleChange_createRoom}
                          
                        />
                    </label>
                    <button type="submit">Create Room</button>
        </form>
        {message && <p>{message}</p>} {/* Display the message */}
      </div>
    </div>
    
  );
}
