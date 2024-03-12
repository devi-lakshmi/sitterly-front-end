import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createSitterProfile } from '../store/sitterProfiles/thunks';
import { useApi } from "../hooks/useApi";
import { addProfile } from '../store/sitterProfiles/slice';
import { selectError, selectIsLoading } from '../store/sitterProfiles/selectors';
import { useNavigate } from 'react-router-dom';

const CreateSitterProfile = () => {
  const api = useApi();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector(selectError)
  const isLoading = useSelector(selectIsLoading)

  const [sitterProfileData, setSitterProfileData] = useState({
    first_name: '',
    last_name: '',
    city: '',
    hourly_rate_euro: 0,
  });
  const handleInputChange = (event) => {
    setSitterProfileData({ ...sitterProfileData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any required fields are empty
    if (!sitterProfileData.first_name || !sitterProfileData.last_name || !sitterProfileData.city || sitterProfileData.hourly_rate_euro === '') {
      toast.error('Please fill out all required fields.');
      return;
    }

    dispatch(createSitterProfile(sitterProfileData, api))
      .then((response) => {
        toast.success('Profile created successfully!');
        navigate('/browseSitterProfiles');
        navigate('/home')
        setSitterProfileData({
          first_name: '',
          last_name: '',
          city: '',
          hourly_rate_euro: '',
        });
      })
      .catch((error) => {
        console.error('Error while creating profile:', error);
        toast.error('Create failed. Please try again.');
      });
  };

  const handleCreatePeofile = () => {
    dispatch(addProfile(sitterProfileData));
  };


  return (
    <section className='max-w-xl mx-auto p-4 bg-stone-900  mt-4 rounded shadow-md'>
      <h2 className="text-2xl  text-gray-100 font-bold mb-4">  Create Sitter Profile  </h2>
      <div className="w-full bg-stone-900 max-w-lg mt-0 p-6 px-6 py-6 rounded-lg">

        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="max-w-lg ">
          <label className="block mb-2">

            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={sitterProfileData.first_name}
              onChange={handleInputChange}
              className="form-input  border mt-1 block w-full"
            />
          </label>

          <label className="block mb-2">

            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={sitterProfileData.last_name}
              onChange={handleInputChange}
              className="form-input border mt-1 block w-full "
            />
          </label>

          <label className="block mb-2">

            <input
              type="text"
              name="city"
              placeholder="City"
              value={sitterProfileData.city}
              onChange={handleInputChange}
              className="form-input border mt-1 block w-full"
            />
          </label>

          <label className="block mb-2">

            <input
              type="number"
              name="hourly_rate_euro"
              placeholder="Hourly Rate euro"
              value={sitterProfileData.hourly_rate_euro}
              onChange={handleInputChange}
              className="form-input border mt-1 block w-full"
              min="0"
            />
          </label>

          <button
            type="submit"
            onClick={handleCreatePeofile}
            className="bg-sky-500  text-white py-2 px-4 w-full hover:bg-purple-600 rounded"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}

          </button >
        </form>
      </div>
    </section>
  );
};

export default CreateSitterProfile;
