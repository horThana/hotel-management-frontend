'use client';

import Navbar from '../component/Navbar.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router.js';
import { Footer } from '../component/Footer.jsx';

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
    const { navigate } = Router;
    //function สำหรับเก็บข้อมูลที่กรอกเข้ามา
    const handleChange_createRoom = (e) => {
        setFormDataRoom({
            ...formDataRoom,
            [e.target.name]: e.target.value
        });
    };

    // Function สำหรับสร้างห้องพัก
    const handleSubmit_createRoom = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/roomservice/create-room', formDataRoom);
            if (response.status === 201) {
                console.log(response.data);
                setFormDataRoom({
                    room_id: '',
                    room_name: '',
                    room_type: '',
                    room_price: '',
                    room_status: '',
                    image: '',
                    description: ''
                });
                setMessage('สร้างห้องพักสำเร็จ');
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setMessage('มีห้องพักนี้อยู่แล้ว');
            } else {
                setMessage('ไม่สามารถสร้างห้องพักได้');
            }
        }
    };

    return (
        <div>
            <Navbar />
            <div class="bg-orange-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                <h1 class="font-bold">กรุณากรอกข้อมูล</h1>
           
            <h1>เพื่อทำการสร้างรายการใหม่</h1>
            </div>
            <div className='w-1/2 mx-auto pt-10'>
                <form onSubmit={handleSubmit_createRoom} class="bg-white rounded px-8 pt-6 pb-8 mb-4 shadow-2xl">
                    <div className=''>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Room ID:
                        <input
                            type="text"
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid justify-items-center'
                            name="room_id"
                            value={formDataRoom.room_id}
                            onChange={handleChange_createRoom}
                            placeholder='Room ID'
                            required
                        />
                    </label>
                    <br />
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Room Name:
                        <input
                            type="text"
                            name="room_name"
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid justify-items-center'
                            value={formDataRoom.room_name}
                            onChange={handleChange_createRoom}
                            placeholder='Room Name'
                            required
                        />
                    </label>
                    <br />
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Room Type:
                        <input
                            type="text"
                            name="room_type"
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid justify-items-center'
                            value={formDataRoom.room_type}
                            onChange={handleChange_createRoom}
                            placeholder='Room Type'
                            required
                        />
                    </label>
                    <br />
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Price:
                        <input
                            type="number"
                            name="room_price"
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid justify-items-center'
                            value={formDataRoom.room_price}
                            onChange={handleChange_createRoom}
                            placeholder='Price'
                            required
                        />
                    </label>
                    <br />
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Status:
                        <input
                            type="text"
                            name="room_status"
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid justify-items-center'
                            value={formDataRoom.room_status}
                            onChange={handleChange_createRoom}
                            placeholder='available or unavailable'
                            required
                        />
                    </label>
                    <br />
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Image:
                        <input
                            type="text"
                            name="image"
                             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid justify-items-center'
                            value={formDataRoom.image}
                            onChange={handleChange_createRoom}
                            
                        />
                    </label>
                    <br />
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Description:
                        <input
                            type="text"
                            name="description"
                             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid justify-items-center'
                            value={formDataRoom.description}
                            onChange={handleChange_createRoom}
                        />
                    </label>
                    </div>
                    <button type="submit" className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline'>Create Room</button>
                    <a href='/dashboard' className='p-4 font-bold text-red-700' >Cancel</a>
                </form>
                {message && <p>{message}</p>} {/* Display the message */}
                
            </div>
            <Footer/>
        </div>
    );
}