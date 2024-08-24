'use client';
import { useState } from 'react';
import Navbar from '../component/navbar/navbar.jsx';
import axios from 'axios';

export default function UpdateRoom() {
    const [room_id, setRoom_id] = useState('');
    const [newroom_name, setnewRoom_name] = useState('');
    const [newroom_type, setnewRoom_type] = useState('');
    const [newroom_price, setnewRoom_price] = useState('');
    const [newroom_status, setnewRoom_status] = useState('');
    const [newimage, setnewImage] = useState('');
    const [newdescription, setnewDescription] = useState('');
    const [message, setMessage] = useState('');

    const handleUpdateRoom = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('http://localhost:5000/roomservice/update-room', {
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
            <div>
                <h1>Employee Management This is Employee Page.</h1>
            </div>
            <h1>แก้ไขห้องพัก</h1>
            <div>
                <form onSubmit={handleUpdateRoom}>
                    <label>
                        Room ID:
                        <input
                            type="text"
                            name="room_id"
                            value={room_id}
                            onChange={(e) => setRoom_id(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Room Name:
                        <input
                            type="text"
                            name="room_name"
                            value={newroom_name}
                            onChange={(e) => setnewRoom_name(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Room Type:
                        <input
                            type="text"
                            name="room_type"
                            value={newroom_type}
                            onChange={(e) => setnewRoom_type(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Room Price:
                        <input
                            type="number"
                            name="room_price"
                            value={newroom_price}
                            onChange={(e) => setnewRoom_price(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Room Status:
                        <input
                            type="text"
                            name="room_status"
                            value={newroom_status}
                            onChange={(e) => setnewRoom_status(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Image:
                        <input
                            type="text"
                            name="image"
                            value={newimage}
                            onChange={(e) => setnewImage(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Description:
                        <input
                            type="text"
                            name="description"
                            value={newdescription}
                            onChange={(e) => setnewDescription(e.target.value)}
                        />
                    </label>
                    <button type="submit">Update Room</button>
                </form>
                {message && <p>{message}</p>} {/* Display the message */}
            </div>
        </div>
    );
}