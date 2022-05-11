import React from 'react';
import Banner from './Banner/Banner';
import ExeptionalService from './ExeptionalService';
import Info from './Info/Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExeptionalService></ExeptionalService>
        </div>
    );
};

export default Home;