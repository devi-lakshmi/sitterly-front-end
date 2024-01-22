import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectSitterProfiles } from '../store/sitterProfiles/selectors';
import { browseSitterProfiles } from '../store/sitterProfiles/thunks';
import { useApi } from "../hooks/useApi";
import { Link } from 'react-router-dom';

const BrowseSitterProfiles = () => {
    const api = useApi();
    const dispatch = useDispatch();
    const sitterProfiles = useSelector(selectSitterProfiles);
    console.log("sitterProfile" + sitterProfiles);
    const loading = useSelector(selectIsLoading);
     
    useEffect(() => {
        dispatch(browseSitterProfiles(api, 1));
    }, [dispatch, api]);

    return (
        <div className="bg-gray-200 p-4">
      <h2 className="text-2xl font-bold mb-4">Browse Sitter Profiles</h2>
      {loading && <p>Loading...</p>}
      {sitterProfiles.map((profile) => (
        <div key={profile.id} className="bg-white p-4 mb-4">
          <p className="font-bold">FirstName: {profile.first_name}</p>
          <p className="font-bold">LastName: {profile.last_name}</p>
          <p>City: {profile.city}</p>
          <p>HourlyRateeuro: {profile.hourly_rate_euro}</p>
        </div>
      ))}
      <Link to={"/"} className="bg-blue-500 text-white py-2 px-4 rounded">
        Go to HomePage
      </Link>
            
       
        </div>
            )
};
export default BrowseSitterProfiles;