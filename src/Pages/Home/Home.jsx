import React from 'react';
import Banner from './HomeComponent/Banner';
import TopBrands from './HomeComponent/Top Brands/TopBrands';
import BrowseStyle from './HomeComponent/BrowseStyle';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <TopBrands></TopBrands>

            <BrowseStyle></BrowseStyle>
        </div>
    );
};

export default Home;