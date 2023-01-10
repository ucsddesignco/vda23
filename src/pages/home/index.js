import React from 'react';
import Navbar from '../../components/navbar';
import Landing from '../../components/landing';
import Footer from '../../components/footer';
import WhyApply from '../../components/whyapply';
import FAQ from '../../components/faq';
import FAQNEW from '../../components/faqnew';

import './styles.scss';

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Landing />
      <WhyApply />
      <FAQNEW />
      <Footer />
    </div>
  )
}

export default Home