import React from 'react';
import Banner from './Banner/Banner';
import ExeptionalService from './ExeptionalService';
import HomeAppoinment from './HomeAppoinment';
import Info from './Info/Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExeptionalService></ExeptionalService>
            <HomeAppoinment></HomeAppoinment>
        </div>
    );
};

export default Home;