
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useApi } from '../hooks/useApi';
import { useParams } from 'react-router-dom';
import { createBooking } from '../store/bookings/thunks';
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
    if (!form.starts_at || !form.ends_at === '') {
      toast.error('Please fill out all required fields.');
      return;
    }
    dispatch(createBooking(form, api))
      .then((response) => {
        toast.success('Booking successful!');
        setForm({
          sitter_profile_id: sitterId,
          is_cancelled: false,
          starts_at: "",
          ends_at: "",
        });
      })
      .catch((error) => {
        console.error('Error while booking:', error);
        toast.error('Booking failed. Please try again.');
      });
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-stone-900 rounded shadow-md">
      <h2 className="text-2xl text-gray-100 font-bold mb-4">Book a Sitter</h2>
      {error && <div className="text-red-500 mb-4"></div>}
      <form onSubmit={handleBooking}>
        <label className="block mb-4 text-gray-100">
          Start Date:
          <input
            type="datetime-local"
            value={form.starts_at}
            onChange={handleInputChange}
            name="starts_at"
            className="mt-1 p-2 border rounded-md  text-stone-900 w-full"
          />
        </label>
        <label className="block mb-4 text-gray-100">
          End Date:
          <input
            type="datetime-local"
            value={form.ends_at}
            onChange={handleInputChange}
            name="ends_at"
            className="mt-1 p-2 border text-stone-900 rounded-md w-full"
          />
        </label>
        <div className="button-container flex space-x-4 mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white w-full px-2 py-1 rounded-md hover:bg-purple-600"
            disabled={isLoading}
          >
            {isLoading ? 'Booking...' : 'Book Sitter'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBookings;