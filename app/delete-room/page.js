'use client';
import { useState } from 'react';
import Navbar from '../component/Navbar.jsx';
import axios from 'axios';
import { Footer } from '../component/Footer.jsx';

export default function DeleteRoom() {
    const [room_id, setRoom_id] = useState('');
    const [message, setMessage] = useState('');


    //สร้าง function สำหรับลบห้องพัก
    const handleChange_deleteRoom = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.delete(`https://depa-backend-three.vercel.app/roomservice/delete-room/${room_id}`);

            if (response.status === 200) {
                console.log(response.data);
                setMessage('Room deleted successfully');
            } else {
                setMessage('Failed to delete room');
            }
        } catch (error) {
            console.error('Error deleting room:', error);
            setMessage('Failed to delete room');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="bg-orange-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                <h1 className="font-bold">ลบข้อมูล</h1>
                <h1>กรุณาใส่เลขห้องที่ท่านต้องการลบ</h1>
            </div>
            <div className='w-1/2 mx-auto pt-10 text-center text-red-700 pb-4'>
                <form onSubmit={handleChange_deleteRoom} className="bg-white rounded px-8 pt-6 pb-8 mb-4 shadow-2xl">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Room ID:
                            <input
                                type="text"
                                value={room_id}
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid justify-items-center'
                                onChange={(e) => setRoom_id(e.target.value)}
                                placeholder='Delete Room ID'
                                required
                            />
                        </label>
                    </div>
                    <button type="submit" className=' bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline'>Delete Room</button>
                </form>
                {message && <p>{message}</p>} {/* Display the message */}
            </div>
            <Footer/>
        </div>
    );
}