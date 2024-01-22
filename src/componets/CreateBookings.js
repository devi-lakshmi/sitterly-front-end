import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useApi } from '../hooks/useApi';
import { useNavigate } from 'react-router-dom';
import { createBooking } from '../store/bookings/thunks';


const CreateBookings = () => {
  
   const api = useApi();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    sitter_profile_id:"",
    starts_at: "",
     ends_at : "",
});
const handleInputChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleBooking = (e) => {
    // Add additional logic/validation as needed
    e.preventDefault();
    dispatch(createBooking(form, api));
    
  };
      // Additional booking details
   
  return (
    <div>
         <h2>Welcome Booking Form</h2>
          <label>Start Date: <input type="date" value={form.starts_at} onChange={handleInputChange} name="starts_at" /></label>
      <label>End Date: <input type="date" value={form.ends_at} onChange={handleInputChange} name="ends_at" /></label>
      <button onClick={handleBooking}>Book Sitter</button>
    </div>
  );
};

export default CreateBookings;