'use client';
import { useState } from 'react';
import Navbar from '../component/navbar/navbar.jsx';
import axios from 'axios';

export default function DeleteRoom() {
    const [room_id, setRoom_id] = useState('');
    const [message, setMessage] = useState('');

    const handleChange_deleteRoom = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.delete(`http://localhost:5000/roomservice/delete-room/${room_id}`);

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
            <div>
                <h1>Delete Room</h1>
                <form onSubmit={handleChange_deleteRoom}>
                    <div>
                        <label>
                            Room ID:
                            <input
                                type="text"
                                value={room_id}
                                onChange={(e) => setRoom_id(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">Delete Room</button>
                </form>
                {message && <p>{message}</p>} {/* Display the message */}
            </div>
        </div>
    );
}