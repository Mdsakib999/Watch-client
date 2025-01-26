import React from 'react';
import Banner from './HomeComponent/Banner';
import TopBrands from './HomeComponent/Top Brands/TopBrands';
import BrowseStyle from './HomeComponent/BrowseStyle';
import UserReview from './HomeComponent/User Review/UserReview';
import HomeProduct from './HomeComponent/HomeProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <TopBrands></TopBrands>

            <HomeProduct></HomeProduct>

            <BrowseStyle></BrowseStyle>

            <UserReview></UserReview>
        </div>
    );
};

export default Home;