import { useState } from 'react';
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';

import photo1 from '../assets/photos/photo-6.jpg';
import photo2 from '../assets/photos/photo-7.jpg';
import photo3 from '../assets/photos/photo-8.jpg';


function HomePageSection() {

    return (
        <div className='homepageSection'>
            <div className='featuredImages'>
                <div className='mainHomeImage photoContainer'>
                    <img src={photo1} alt='' className='homepagePhoto' />
                </div>
                <div className='secondaryHomeImageLeft photoContainer'>
                    <img src={photo2} alt='' className='homepagePhoto' />
                </div>
                <div className='secondaryHomeImageRight photoContainer'>
                    <img src={photo3} alt='' className='homepagePhoto' />
                </div>
            </div>
        </div>
    )
}



function HomePage() {
    return (
        <div className='homepageContainer'>
            <Header />
            <HomePageSection />
            <Footer />
        </div>
    )
}

export {HomePage};
