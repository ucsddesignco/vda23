import React from 'react';
import Navbar from '../../components/navbar';
import Landing from '../../components/landing';
import LandingLogistics from '../../components/landingLogistics';
import Footer from '../../components/footer';
import WhyApply from '../../components/whyapply';
import FAQ from '../../components/faq';
import FAQNEW from '../../components/faqnew';

import './styles.scss';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Landing
        description={
          <>
            Design Co’s first ever Visual Design Apprenticeship is a 12-week
            long program where student designers will work on a variety of
            hands-on assignments focusing on visual, graphic, and brand design.{' '}
            <br></br>
            <br></br>
            Students will learn fundamental techniques in Adobe and Figma
            through in-person lessons and will have the opportunity to
            participate in critique sessions, work sessions, and accountability
            buddy groups! This is NOT a UX-based program.
          </>
        }
      />
      <LandingLogistics />
      <WhyApply />
      <FAQNEW />
      <Footer />
    </div>
  );
}

export default Home;
