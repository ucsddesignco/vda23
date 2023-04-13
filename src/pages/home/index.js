import React from 'react';
import Navbar from '../../components/navbar';
import Landing from '../../components/landing';
import Footer from '../../components/footer';
import WhyApply from '../../components/whyapply';
import FAQ from '../../components/faq';
import FAQNEW from '../../components/faqnew';
import Experience from '../../components/experience';

import './styles.scss';

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Landing />
      <WhyApply />
      <Experience />
      <FAQNEW />
      <Footer />
    </div>
  )
}

export default Home