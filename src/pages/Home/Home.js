import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header';
import Search from './Search';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Search></Search>
            <Footer></Footer>
        </div>
    );
};

export default Home;