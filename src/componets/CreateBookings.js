
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useApi } from '../hooks/useApi';
import { useNavigate, useParams } from 'react-router-dom';
import { createBooking } from '../store/bookings/thunks';

const CreateBookings = () => {
  const { sitterId } = useParams();
  const api = useApi();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
        sitter_profile_id: sitterId,
        is_cancelled: false,
        starts_at: "",
        ends_at: "",
        description: ""
  });

  const handleInputChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();
      dispatch(createBooking(form, api));
      navigate(`/`);
      
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4"> </h2>
          <p>Sitter profile id: {form.sitter_profile_id}</p>
      <label className="block mb-4">
        Start Date: 
        <input
          type="datetime-local"
          value={form.starts_at}
          onChange={handleInputChange}
          name="starts_at"
          className="mt-1 p-2 border rounded-md w-full"
        />
      </label>
      <label className="block mb-4">
        End Date: 
        <input
          type="datetime-local"
          value={form.ends_at}
          onChange={handleInputChange}
          name="ends_at"
          className="mt-1 p-2 border rounded-md w-full"
        />
          </label>
          Description:
        <label>
        <input
          type="text"
          value={form.description}
          onChange={handleInputChange}
          name="description"
          className="mt-1 p-2 border rounded-md w-full"
        />
        </label>
      <button
        onClick={handleBooking}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Book Sitter
      </button>
    </div>
  );
};

export default CreateBookings;