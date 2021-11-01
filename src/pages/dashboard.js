import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import TimeLine from '../components/Timeline.js';
import useUser from '../hooks/useUser';
import LoggedInUserContext from '../context/logged-in-user';

export default function Dashboard({ user: loggedInUser }) {
  const { user } = useUser(loggedInUser.uid);
  useEffect(() => {
    document.title = 'Instagram';
  }, []);
  return (
    <LoggedInUserContext.Provider value={{ user }}>
      <div className="bg-gray-background">
        <Header />
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
          <TimeLine />
          <SideBar />
        </div>
      </div>
    </LoggedInUserContext.Provider>
  );
}

Dashboard.propTypes = {
  user: PropTypes.object
};
