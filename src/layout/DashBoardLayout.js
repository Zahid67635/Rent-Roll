import React from 'react';
import DashBoard from '../pages/DashBoard/DashBoard';
import Header from '../Shared/Header';

const DashBoardLayout = () => {
    return (
        <div>
            <Header></Header>
            <DashBoard></DashBoard>
        </div>
    );
};

export default DashBoardLayout;