// App.jsx
import React, { useState } from 'react';

import MasonryGrid from "../components/MasonryGrid";
import FilterButtons from "../components/FilterButtons";
import mumandyou from '../assets/images/projects/mumandyou.jpg'
import mumandyou_us from '../assets/images/projects/mumandyou-us.jpg'
import captainzack from '../assets/images/projects/captainzack.jpg'
import themap from '../assets/images/projects/themap.jpg'
import fieldassist from '../assets/images/projects/fieldassist.jpg'
import Twelve_flags from '../assets/images/projects/12flags.jpg'
import thepixen from '../assets/images/projects/thepixen.jpg'
import eonclinics from '../assets/images/projects/eonclinics.jpg'
import musclefuel from '../assets/images/projects/musclefuel.jpg'
import Britannia_Marine from '../assets/images/projects/BritanniaMarine.jpg'
import pnfit from '../assets/images/projects/pnfit.jpg'
import purefruittechnologies from '../assets/images/projects/purefruittechnologies.jpg'
import nationalach from '../assets/images/projects/nationalach.jpg'
import zeopto from '../assets/images/projects/zeopto.jpg'
import sensbodycare from '../assets/images/projects/sensbodycare.jpg'
import pettofoods from '../assets/images/projects/pettofoods.jpg'
import goodmatch from '../assets/images/projects/goodmatch.jpg'
import lensexperts from '../assets/images/projects/lensexperts.jpg'
import pureceuticalsskincare from '../assets/images/projects/pureceuticalsskincare.jpg'
import unscratchthesurface from '../assets/images/projects/unscratchthesurface.jpg'
import ricebeltofficials from '../assets/images/projects/ricebeltofficials.jpg'
const Works = () => {
  const initialItems = [
    { title: 'Mum & You', subtitle: 'UK based E-Commerce', image: 'projects/mumandyou.jpg', category: 'Design', category: 'Magento',  url: 'https://mumandyou.com/' },
    { title: 'Mum & You', subtitle: 'US based E-Commerce', image: 'projects/mumandyou-us.jpg', category: 'Design', category: 'Shopify', url: 'https://mumandyou-us.com/'},
    { title: 'Captain Zack',  subtitle: 'Pet Care E-Commerce', image: 'projects/captainzack.jpg', category: 'Design', category: 'Shopify', url: 'https://captainzack.in/'},
    { title: 'The Map',  subtitle: 'News Website', image: 'projects/themap.jpg', category: 'Design', category: 'Wordpress', url: 'https://themap.news/'},
	{ title: 'Field Assist',  subtitle: 'Sales and Distribution Software Platform', image: 'projects/fieldassist.jpg', category: 'Design', category: 'Wordpress', url: 'https://www.fieldassist.com/'},
    { title: '12 Flags', subtitle: 'Fund Raising for business', image: 'projects/12flags.jpg', category: 'Wordpress', category: 'Design', url: 'https://12flags.com/'},
    { title: 'The Pixen',  subtitle: 'Photographer', image: 'projects/thepixen.jpg', category: 'Wordpress', category: 'Design', url: 'http://thepixen.com/'},
    { title: 'EON Clinics',  subtitle: 'Dental Implants', image: 'projects/eonclinics.jpg', category: 'Wordpress', category: 'Design', url: 'https://www.eonclinics.com/'},
	{ title: 'Muscle Fuel',  subtitle: 'Workout Supplement E-Commerce', image: 'projects/musclefuel.jpg', category: 'Design', category: 'Wordpress', url: '#'},
	
    { title: 'Britannia Marine', subtitle: 'Ship parts and equipment', image: 'projects/BritanniaMarine.jpg', category: 'Design', category: 'Wordpress', url: '#'},
    { title: 'Pro Nutrition & Fitness',  subtitle: 'Health Nutritions & Fitness Supplements Store', image: 'projects/pnfit.jpg', category: 'Design', category: 'Design', url: 'https://pnfit.com/'},
    { title: 'Pure Fruit Technologies',  subtitle: 'Mangoxan Mangosteen Fruit Juice Online', image: 'projects/purefruittechnologies.jpg', category: 'Design', url: 'https://www.purefruittechnologies.com/'},
    { title: 'National ACH',  subtitle: 'Echecks and Credit Card Payments Processing', image: 'projects/nationalach.jpg', category: 'Design', category: 'Wordpress', url: 'https://nationalach.com/'},
	{ title: 'Zeopto',  subtitle: 'Digital Transformation Drive-Rise with SAP', image: 'projects/zeopto.jpg', category: 'Design', category: 'Wordpress', url: 'https://www.zeopto.com/'},

    { title: 'Sens Bodycare', subtitle: 'Bodycare Products', image: 'projects/sensbodycare.jpg', category: 'Design', category: 'Shopify', url: 'https://sensbodycare.com/'},
    { title: 'Petto Smart Nutrition',  subtitle: 'Pet Care Foods E-Commerce', image: 'projects/pettofoods.jpg', category: 'Design', category: 'Shopify', url: 'https://pettofoods.com/'},
    { title: 'Good Match',  subtitle: 'Italy based E-Commerce', image: 'projects/goodmatch.jpg', category: 'Magento', url: 'https://www.goodmatch.it/'},
    { title: 'Lens Experts',  subtitle: 'Contacts Lenses E-Commerce', image: 'projects/lensexperts.jpg', category: 'Design', category: 'Magento', url: 'https://lensexperts.com/'},
	{ title: 'PureCeuticals Skin Care',  subtitle: 'Natural Skincare Products', image: 'projects/pureceuticalsskincare.jpg', category: 'Design', category: 'Wordpress', url: 'https://pureceuticalsskincare.com/'},
    { title: 'Unscratch The Surface',  subtitle: 'Large Window & Door Resurfacing', image: 'projects/unscratchthesurface.jpg', category: 'Design', category: 'Wordpress', url: 'https://unscratchthesurface.com/'},
	{ title: 'Katy Ricebelt',  subtitle: 'Sports Officials', image: 'projects/ricebeltofficials.jpg', category: 'Design', category: 'Wordpress', url: 'https://ricebeltofficials.com/'},
    // Add more items with different categories
  ];

  const initialCategories = ['Design', 'Wordpress', 'Shopify', 'Magento'];
  const [items, setItems] = useState(initialItems);
  const [categories, setCategories] = useState(initialCategories);

  const handleFilter = (category) => {
    if (category === 'all') {
      setItems(initialItems);
    } else {
      const filteredItems = initialItems.filter((item) => item.category === category);
      setItems(filteredItems);
    }
  };

  return (
   <section id="portfolio" className="projects-area">
    <div className="container">
	 <div className="row justify-content-center">
                <div className="col-xl-12">
                    <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                        <span className="sub-title mb-15">Latest Works</span>
                        <h2>View My Latest <span>Works</span></h2>
                    </div>
                </div>
            </div>
      <FilterButtons categories={categories} handleFilter={handleFilter} />
      <MasonryGrid items={items} />
    </div>
	</section>
  );
};

export default Works;
