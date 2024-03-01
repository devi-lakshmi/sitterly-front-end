import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createSitterProfile } from '../store/sitterProfiles/thunks';
import { useApi } from "../hooks/useApi";
import { addProfile } from '../store/sitterProfiles/slice';
import { selectError, selectIsLoading } from '../store/sitterProfiles/selectors';

const CreateSitterProfile = () => {
  const api = useApi();
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
    dispatch(createSitterProfile(sitterProfileData, api))
      .then((response) => {
        toast.success('profile created sucessfully!');
        setSitterProfileData({
          first_name: '',
          last_name: '',
          city: '',
          hourly_rate_euro: 0,
        });
      })
      .catch((error) => {
        console.error('Error while create  profile:', error);
        toast.error('create failed. Please try again.');
      });
  };
  const handleCreatePeofile = () => {
    dispatch(addProfile(sitterProfileData));
  };


  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-2xl font-bold mb-4">Create Sitter Profile</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label className="block mb-2">
          First Name:
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={sitterProfileData.first_name}
            onChange={handleInputChange}
            className="form-input mt-1 block w-full"
          />
        </label>

        <label className="block mb-2">
          Last Name:
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={sitterProfileData.last_name}
            onChange={handleInputChange}
            className="form-input mt-1 block w-full"
          />
        </label>

        <label className="block mb-2">
          City:
          <input
            type="text"
            name="city"
            placeholder="City"
            value={sitterProfileData.city}
            onChange={handleInputChange}
            className="form-input mt-1 block w-full"
          />
        </label>

        <label className="block mb-2">
          Hourly Rate (Euro):
          <input
            type="number"
            step="0.01"
            name="hourly_rate_euro"
            placeholder="Hourly Rate"
            value={sitterProfileData.hourly_rate_euro}
            onChange={handleInputChange}
            className="form-input mt-1 block w-full"
          />
        </label>

        <button
          type="submit"
          onClick={handleCreatePeofile}
          className="bg-blue-500 text-white py-2 px-4 rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
          Submit
        </button >
      </form>
    </div>
  );
};

export default CreateSitterProfile;
