
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useApi } from '../hooks/useApi';
import {  useParams } from 'react-router-dom';
import { createBooking } from '../store/bookings/thunks';
import { Link } from 'react-router-dom';
import { selectError, selectLoading } from '../store/bookings/selectors';

const CreateBookings = () => {
  const { sitterId } = useParams();
  const api = useApi();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const [form, setForm] = useState({
        sitter_profile_id: sitterId,
        is_cancelled: false,
        starts_at: "",
        ends_at: "",
       
  });

  const handleInputChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleBooking = (e) => {
  e.preventDefault();
  dispatch(createBooking(form, api))
    .then((response) => {
      // If the promise resolves without an error, display success toast
      toast.success('Booking successful!');
      // Optionally, clear the form data after successful booking
      setForm({
        sitter_profile_id: sitterId,
        is_cancelled: false,
        starts_at: "",
        ends_at: "",
      });
    })
    .catch((error) => {
      // If there's an error in the booking process, display error toast
      console.error('Error while booking:', error);
      toast.error('Booking failed. Please try again.');
    });
};
   return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Book a Sitter</h2>
      {error && <div className="text-red-500 mb-4"></div>}
      <form onSubmit={handleBooking}>
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
        <div className="button-container flex space-x-4 mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? 'Booking...' : 'Book Sitter'}
          </button>
          <Link to="/getSitterProfiles" className="bg-blue-200 text-black py-1 px-2 rounded-md hover:bg-purple-600">
            Go to Sitter Profile Page
          </Link>
          <Link to="/bookings" className="bg-blue-200 text-black py-1 px-2 rounded-md hover:bg-purple-600">
            Go to Your Booking Page
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateBookings;