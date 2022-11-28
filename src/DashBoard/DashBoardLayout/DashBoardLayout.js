import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { AuthContext } from '../../Contexts/AuthProvider';
import DashBoardNav from '../DashBoardNav';

const DashBoardLayout = () => {
  
  
    return (
        <div>
            <DashBoardNav/>
            <Outlet></Outlet>
            <div className='md:mt-[34%] mt-[89%]'>
            <Footer/>
            </div>
        </div>
    );
};

export default DashBoardLayout;