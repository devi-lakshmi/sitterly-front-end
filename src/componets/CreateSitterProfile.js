import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSitterProfile } from '../store/sitterProfiles/thunks';
import { useApi } from "../hooks/useApi";
import { useNavigate } from "react-router-dom";
import { addProfile } from '../store/sitterProfiles/slice';
const CreateSitterProfile = () => {
  const api = useApi();
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    dispatch(createSitterProfile(sitterProfileData, api));
    navigate("/");
  };
  const handleCreatePeofile = () => {
    dispatch(addProfile(sitterProfileData));
  };
  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-2xl font-bold mb-4">Create Sitter Profile</h2>

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
        >
          Submit
        </button >
      </form>
    </div>
  );
};

export default CreateSitterProfile;
