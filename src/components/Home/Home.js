import React from 'react';
import Banner from '../Banner/Banner';
import Event from '../Event/Event'
import TravelBlog from '../TravelBlog/TravelBlog';
import VideoCOmponent from '../VideoCOmponent/VideoCOmponent';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Event></Event>
            <VideoCOmponent></VideoCOmponent>
            <TravelBlog></TravelBlog>
        </div>
    );
};

export default Home;