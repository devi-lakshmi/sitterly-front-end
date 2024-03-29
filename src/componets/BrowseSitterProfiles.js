import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectSitterProfiles, selectCityFilter } from '../store/sitterProfiles/selectors';
import { browseSitterProfiles } from '../store/sitterProfiles/thunks';
import { useApi } from "../hooks/useApi";
import { useNavigate } from 'react-router-dom';
import { setCityfilter } from '../store/sitterProfiles/slice';

const BrowseSitterProfiles = () => {
  const api = useApi();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sitterProfiles = useSelector(selectSitterProfiles);
  const loading = useSelector(selectIsLoading);
  const cityFilter = useSelector(selectCityFilter) || "";
  const [currentPage, setCurrentPage] = useState(1);




  useEffect(() => {
    const pageSize = 10; // Set your desired page size
    dispatch(browseSitterProfiles(api, currentPage, pageSize, cityFilter));
  }, [dispatch, api, currentPage, cityFilter]);

  const handleBookClick = (sitterId) => {
    navigate(`/createBookings/${sitterId}`);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleFilterChange = (event) => {
    dispatch(setCityfilter(event.target.value));
    console.log(event.target.value)
  };

  return (
    <div className="bg-yellow-100  p-4">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">Browse Sitter Profiles</h2>
      <div className="mb-4">
        <input
          type="text"
          value={cityFilter}
          onChange={handleFilterChange}
          placeholder="Filter by City"
          className="border border-gray-400 rounded px-3 py-2"
        />
      </div>

      {loading && <p>Loading...</p>}
      <div className="flex flex-wrap -mx-4">
        {sitterProfiles
          .filter((profile) => !cityFilter || profile.city.toLowerCase().includes(cityFilter.toLowerCase()))
          .map((profile) => (
            <div key={profile.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
              <div className="bg-white p-4">
                <p className="font-bold">FirstName: {profile.first_name}</p>
                <p className="font-bold">LastName: {profile.last_name}</p>
                <p>City: {profile.city}</p>
                <p>HourlyRateeuro: {profile.hourly_rate_euro}</p>
                <button
                  onClick={() => handleBookClick(profile.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-lime-400"
                >
                  Book sitter
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-4">
        <button
          onClick={handleNextPage}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default BrowseSitterProfiles;