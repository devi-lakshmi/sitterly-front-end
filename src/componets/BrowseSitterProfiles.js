import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectSitterProfiles } from '../store/sitterProfiles/selectors';
import { browseSitterProfiles } from '../store/sitterProfiles/thunks';
import { useApi } from "../hooks/useApi";
import { Link, useNavigate } from 'react-router-dom';

const BrowseSitterProfiles = () => {
    const api = useApi();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const sitterProfiles = useSelector(selectSitterProfiles);
    console.log("sitterProfile" + sitterProfiles);
    const loading = useSelector(selectIsLoading);
     
    useEffect(() => {
        dispatch(browseSitterProfiles(api, 1));
    }, [dispatch, api]);

     const handleBookClick = (sitterId) => {
        // Navigate to the BookSitterProfile page with the sitterId as a parameter
       navigate(`/createBookings/${sitterId}`);
    };
return (
  <div className="bg-gray-200 p-4">
    <h2 className="text-2xl font-bold mb-4">Browse Sitter Profiles</h2>
    {loading && <p>Loading...</p>}
    <div className="flex flex-wrap -mx-4">
      {sitterProfiles.map((profile) => (
        <div key={profile.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
          <div className="bg-white p-4">
            <p className="font-bold">FirstName: {profile.first_name}</p>
            <p className="font-bold">LastName: {profile.last_name}</p>
            <p>City: {profile.city}</p>
            <p>HourlyRateeuro: {profile.hourly_rate_euro}</p>
            <button
              onClick={() => handleBookClick(profile.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Book sitter
            </button>
          </div>
        </div>
      ))}
      {/* <Link to={"/"} className="bg--500 text-white py-2 px-2 rounded">
      Go to HomePage
    </Link> */}
    </div>
      <Link to={"/"} className="bg-purple-500 text-white py-2 px-2 rounded">
      Go to HomePage
    </Link>
  </div>
);
};
export default BrowseSitterProfiles;