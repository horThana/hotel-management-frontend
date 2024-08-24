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

    // Function to create a new room
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
            <div>
                <h1>Employee Management This is Employee Page.</h1>
            </div>
            <h1>Create Room</h1>
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
                    <button type="submit">Create Room</button>
                </form>
                {message && <p>{message}</p>} {/* Display the message */}
            </div>
        </div>
    );
}