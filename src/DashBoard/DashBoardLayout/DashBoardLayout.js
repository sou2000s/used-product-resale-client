import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import DashBoardNav from '../DashBoardNav';

const DashBoardLayout = () => {
  
  
    return (
        <div>
            <DashBoardNav/>
        </div>
    );
};

export default DashBoardLayout;