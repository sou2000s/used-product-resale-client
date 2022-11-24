import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import DashBoardNav from '../DashBoardNav';

const DashBoardLayout = () => {
  
  
    return (
        <div>
            <DashBoardNav/>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoardLayout;