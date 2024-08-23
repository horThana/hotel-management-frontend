'use client';
import { useState } from 'react';
import Navbar from '../component/navbar/navbar.jsx';
import axios from 'axios';

export default function upDateRoom() {
    const [roomId, setRoomId] = useState('');
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
        const { name, value } = e.target;

        // If _id is changed, update roomId state
        if (name === '_id') {
            setRoomId(value);
        }
        setFormDataRoom({
            ...formDataRoom,
            [name]: value
        });
    };

    const handleSubmit_createRoom = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await axios.put(`http://localhost:5000/roomservice/update-room/${roomId}`, formDataRoom);
            if (response.status === 200) {
                console.log('Room updated successfully');
                setMessage('Room updated successfully');
            } else {
                setMessage('Room update failed');
            }
        } catch (error) {
            console.log(error + " ไม่สามารถอัปเดตห้องได้");
            setMessage('Room update failed');
        }
    };

    return (
        <div>
            <Navbar />
            <div>
                <h1>Employee Management This is Employee Page.</h1>
            </div>
            <h1>แก้ไขห้องพัก</h1>
            <div>
                <form onSubmit={handleSubmit_createRoom}>
                    <label>
                        Room ID:
                        <input
                            type="text"
                            name="room_id"
                            value={formDataRoom.room_id}
                            onChange={handleChange_createRoom}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Room Name:
                        <input
                            type="text"
                            name="room_name"
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
                    <button type="submit">Update Room</button>
                </form>
                {message && <p>{message}</p>} {/* Display the message */}
            </div>
        </div>
    );
}