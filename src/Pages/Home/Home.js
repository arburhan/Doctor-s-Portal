import React from 'react';
import Banner from './Banner/Banner';
import Services from './Banner/Services';
import Info from './Info/Info';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
        </div>
    );
};

export default Home;