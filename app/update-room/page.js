'use client';
import { useState } from 'react';
import Navbar from '../component/Navbar.jsx';
import axios from 'axios';
import { Footer } from '../component/Footer.jsx';

export default function UpdateRoom() {
    const [room_id, setRoom_id] = useState('');
    const [newroom_name, setnewRoom_name] = useState('');
    const [newroom_type, setnewRoom_type] = useState('');
    const [newroom_price, setnewRoom_price] = useState('');
    const [newroom_status, setnewRoom_status] = useState('');
    const [newimage, setnewImage] = useState('');
    const [newdescription, setnewDescription] = useState('');
    const [message, setMessage] = useState('');

    // Function สำหรับอัพเดทห้องพัก
    const handleUpdateRoom = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('https://depa-backend-three.vercel.app/roomservice/update-room', {
                room_id: room_id,
                room_name: newroom_name,
                room_type: newroom_type,
                room_price: newroom_price,
                room_status: newroom_status,
                image: newimage,
                description: newdescription
            });

            if (response.status === 200) {
                setMessage('Room updated successfully');
            } else {
                setMessage('Room update failed');
            }
        } catch (error) {
            console.error('There was an error updating the room!', error);
            setMessage('Room update failed');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                <h1 className="font-bold">กรุณากรอกข้อมูล</h1> 
                <h1>เพื่อทำการแก้ไขรายการที่ท่านต้องการ</h1>
            </div>
           
            <div className='w-1/2 mx-auto pt-10'>
                <form onSubmit={handleUpdateRoom} className="bg-white rounded px-8 pt-6 pb-8 mb-4 shadow-2xl">
                    <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Room ID:
                        <input
                            type="text"
                            name="room_id"
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid justify-items-center'
                            value={room_id}
                            onChange={(e) => setRoom_id(e.target.value)}
                            placeholder='Enter Room ID'
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
                            value={newroom_name}
                            onChange={(e) => setnewRoom_name(e.target.value)}
                            placeholder='Enter name'
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
                            value={newroom_type}
                            onChange={(e) => setnewRoom_type(e.target.value)}
                            placeholder='Enter type'
                            required
                        />
                    </label>
                    <br />
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Room Price:
                        <input
                            type="number"
                            name="room_price"
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid justify-items-center'
                            value={newroom_price}
                            onChange={(e) => setnewRoom_price(e.target.value)}
                            placeholder='Enter price'
                            required
                        />
                    </label>
                    <br />
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Room Status:
                        <input
                            type="text"
                            name="room_status"
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid justify-items-center'
                            value={newroom_status}
                            placeholder='Available/Unavailable'
                            onChange={(e) => setnewRoom_status(e.target.value)}
                        />
                    </label>
                    <br />
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Image:
                        <input
                            type="text"
                            name="image"
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid justify-items-center'
                            value={newimage}
                            placeholder='Enter image URL'
                            onChange={(e) => setnewImage(e.target.value)}
                        />
                    </label>
                    <br />
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Description:
                        <input
                            type="text"
                            name="description"
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid justify-items-center'
                            value={newdescription}
                            placeholder='Enter description'
                            onChange={(e) => setnewDescription(e.target.value)}
                        />
                    </label>
                    <button type="submit" className=' bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline'>Update Room</button>
                    <a href='/dashboard' className='p-4 font-bold text-red-700' >Cancel</a>
                    </div>
                </form>
                {message && <p>{message}</p>} {/* Display the message */}
            </div>
            <Footer/>
        </div>
    );
}