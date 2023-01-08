import React from 'react'
import Navbar from '../../components/navbar';
import Tools from '../../components/tools';
import Mentors from '../../components/mentors';
import Footer from '../../components/footer';
import './styles.scss'

function ProgramOverview() {
  return (
    <div>
      <Navbar />
      <Tools />
      <Mentors />
      <Footer />
    </div>
  )
}

export default ProgramOverview