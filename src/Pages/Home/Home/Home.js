import React from 'react';
import Equipments from '../Equipments/Equipments';
import Section1 from '../Section1/Section1';

import Section4 from '../Section4/Section4';

import Section6 from '../Section6/Section6';
import Section7 from '../Section7/Section7';
import Footer from '../../Shared/Footer/Footer'
import Banner from './Banner/Banner';
import Section2 from '../Section2/Section2';
// import Section3 from '../Section3/Section3';

const Home = () => {
    return (
        <div> 

            <Banner></Banner>

            <Equipments></Equipments>
            
            <Section2></Section2>
{/* 
            <Section3></Section3> */}

            <Section1></Section1>
        
            <Section4></Section4>
       
            <Section6></Section6>

            <Section7></Section7>

            <Footer></Footer>
        </div>
    );
};

export default Home;