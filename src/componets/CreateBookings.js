
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useApi } from '../hooks/useApi';
import { useNavigate, useParams } from 'react-router-dom';
import { createBooking } from '../store/bookings/thunks';
import { Link } from 'react-router-dom';

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

   
const handleBooking = async (e) => {
  e.preventDefault();

  try {
    dispatch(createBooking(form, api));
    toast.success('Booking successful!');
  } catch (error) {
    console.error('Error while booking:', error);
    toast.error('Booking failed. Please try again.');
  }
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
        className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
      >
        Book Sitter
      </button>
      <br/>
   <div>
   <Link to={"/getSitterProfiles"} className="bg-blue-500 text-white py-1 px-2 rounded">
      Go to sitterProfile
    </Link>
  </div>
  </div>
  );
};

export default CreateBookings;