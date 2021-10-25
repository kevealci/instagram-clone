import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import TimeLine from '../components/TimeLine';

export default function Dashboard() {
  useEffect(() => {
    document.title = 'Instagram';
  }, []);
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid">
        <TimeLine />
        <SideBar />
      </div>
    </div>
  );
}
