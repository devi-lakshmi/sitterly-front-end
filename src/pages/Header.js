
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated }) => {
  return (
    <nav>
      <ul>

        {isAuthenticated && (
          <>
            <div className="flex space-x-4 sm:flex-row" >
              <li>
                <Link to="/"></Link>
              </li>
              <li>
                <Link className="hover:text-purple-500" to="/createSitterProfile">CreateSitterProfile</Link>
              </li>
              <li>
                <Link className="hover:text-purple-600" to="/getSitterProfiles">BrowseSitterProfiles</Link>
              </li>
              <li>
                <Link className="hover:text-purple-600" to="/bookings">BrowseBookings</Link>
              </li>
            </div>
          </>
        )}

      </ul>

    </nav>
  );
};
export default Header;