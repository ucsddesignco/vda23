import React from 'react';
import Navbar from '../../components/navbar';
import Landing from '../../components/landing';
import Footer from '../../components/footer';
import './styles.scss';

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  )
}

export default Home