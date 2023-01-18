import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header';
import Login from '../Login/Login';
import Acordian from './Acordian';
import Search from './Search';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Search></Search>
            <Login></Login>
            <Acordian></Acordian>
            <Footer></Footer>
        </div>
    );
};

export default Home;