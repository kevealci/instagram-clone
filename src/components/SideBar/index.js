import React from 'react';
import useUser from '../../hooks/useUser';
import User from './User';
import Suggestions from './Suggestions';

export default function SideBar() {
  const {
    user: { docId, fullName, username, userId, following }
  } = useUser();

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
    </div>
  );
}

SideBar.whyDidYourRender = true;