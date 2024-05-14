import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './History.css';

const backend=process.env.REACT_APP_BACKEND_ID


function History() {
    const [hotelData, setHotelData] = useState([]);
    const uname = localStorage.getItem('username');
    const uemail = localStorage.getItem('useremail');

    const getdetail = async () => {
        try {
            const response = await axios.post(`${backend}/bookingdetail`, { uemail });
            console.log(response);
            setHotelData(response.data);
        } catch (error) {
            console.error("Error fetching booking details:", error);
        }
    }

    useEffect(() => {
        getdetail();
    }, []);

    const deleteItem = async (id) => { 
        try {
            const res = await axios.delete(`${backend}/bookingdelete`, { data: { id } });
            console.log(res);
            getdetail(); 
        } catch (error) {
            console.error("Error deleting booking details:", error);
        }
    }

    return (
        <>
            <div className='history'>
                {hotelData.length === 0 ? (
                    <h1>No bookings</h1>
                ) : (
                    hotelData.map((item, index) => (
                        <div key={index}>
                            <div className="card0">
                                <h1>{item.name}</h1>
                                <h3>Price: {item.price}</h3>
                            </div>
                            <button onClick={() => deleteItem(item._id)} className='button-91'>Delete</button>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default History;
