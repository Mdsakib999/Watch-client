import React from 'react';
import Banner from './HomeComponent/Banner';
import TopBrands from './HomeComponent/Top Brands/TopBrands';
import BrowseStyle from './HomeComponent/BrowseStyle';
import UserReview from './HomeComponent/User Review/UserReview';
import HomeProduct from './HomeComponent/HomeProduct';
import WhyUs from './HomeComponent/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <TopBrands></TopBrands>

            <HomeProduct></HomeProduct>

            <WhyUs></WhyUs>

            <BrowseStyle></BrowseStyle>

            <UserReview></UserReview>
        </div>
    );
};

export default Home;