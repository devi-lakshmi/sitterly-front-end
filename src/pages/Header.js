
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isAuthenticated && (
          <>
            <li>
              <Link to="/createSitterProfile">Create Sitter Profile</Link>
            </li>
            <li>
              <Link to="/getSitterProfiles">Browse Sitter Profiles</Link>
            </li>
            <li>
              <Link to="/bookings">Browse Bookings</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
export default Header;