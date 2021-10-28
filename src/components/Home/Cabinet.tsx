import React from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import './Cabinet.css';
import { SideBar } from '../SideBar/SideBar';
import { useLocation } from 'react-router-dom';
import { AddBoard } from '../AddBoard/AddBoard';
import { Boards } from '../Boards/Boards';
import { DashBoard } from '../DashBoard/DashBoard';

function Cabinet() {
  const location = useLocation();
  return (
    <div className="wrapperBgrnd">
      <div className="nav">
        <NavigationBar auth={true} />
      </div>
      <div className="content">
        <div className="nav sideBar">
          <SideBar />
        </div>
        {location.pathname === '/home' && <DashBoard />}
        {location.pathname === '/home/boards' && <Boards />}
        {location.pathname === '/home/addboard' && <AddBoard />}
      </div>
    </div>
  );
}

export default Cabinet;
