import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinments from './AvailableAppoinments';

const ApoinmentPage = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner selected={selected} setSelected={setSelected}></AppoinmentBanner>
            <AvailableAppoinments selected={selected}></AvailableAppoinments>
            <Footer></Footer>
        </div>
    );
};

export default ApoinmentPage;