import React, { useEffect, useRef, useState } from 'react';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Landing from '../../components/landing';
import ThumbnailList from '../../components/thumbnailList';
import Star from '../../assets/images/program/star.svg';
import './styles.scss';

const testImages = {
  Angy: {
    src: 'https://preview.redd.it/voiac279e2461.png?auto=webp&s=68ac149085a1bab71f1dd4d71d0a509bcc4a316e',
    href: 'https://www.youtube.com/shorts/uWhPnAQTH5E',
    alt: 'Angy guy',
  },
  'Frew Up': {
    src: 'https://i.pinimg.com/564x/5b/02/47/5b0247d140ff9659066d61fa63edc79a.jpg',
    href: 'https://www.youtube.com/shorts/uWhPnAQTH5E',
    alt: 'Mom i frew up',
  },
  Happy: {
    src: 'https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg',
    href: 'https://www.youtube.com/shorts/uWhPnAQTH5E',
    alt: 'Happy catto',
  },
  Hello: {
    src: 'https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg',
    href: 'https://www.youtube.com/shorts/uWhPnAQTH5E',
    alt: 'Hello yes hi hello',
  },
  Melvin: {
    src: 'https://preview.redd.it/r3lcc7gf64791.png?width=540&format=png&auto=webp&s=9d32ec46f884486fd59dfd01453bf5d07bf30d75',
    href: 'https://www.youtube.com/shorts/uWhPnAQTH5E',
    alt: 'Melvin',
  },
  Polite: {
    src: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg',
    href: 'https://www.youtube.com/shorts/uWhPnAQTH5E',
    alt: 'Polite gentleman',
  },
  Sadge: {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDkNL450VCdu6u6eWC7IYwb2I9WB5uT8XKnF4ZVtsOaA&usqp=CAU&ec=48665701',
    href: 'https://www.youtube.com/shorts/uWhPnAQTH5E',
    alt: ':(',
  },
  Stinky: {
    src: 'https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/smudge-the-viral-cat.jpg',
    href: 'https://www.youtube.com/shorts/uWhPnAQTH5E',
    alt: 'Real stinker right here',
  },
};

function Showcase() {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [showButton, setShowButton] = useState(false);

  const skipButtonRef = useRef();
  const thumbnailRef = useRef();
  const apprenticeRef = useRef();
  const showcaseRef = useRef();

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  const handleResize = () => {
    setWinWidth(window.innerWidth);
  };

  const handleScroll = () => {
    let thumbnailY = thumbnailRef.current?.getBoundingClientRect().top,
      apprenticeY = apprenticeRef.current?.getBoundingClientRect().top;

    if (
      thumbnailY <= -50 &&
      apprenticeY > window.innerHeight - 10 &&
      window.innerWidth <= 600
    ) {
      setShowButton(true);
    } else setShowButton(false);
  };

  const jumpToShowcase = () => {
    showcaseRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const jumpToApprentice = () => {
    apprenticeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <Landing
        description={
          'Design Co’s first ever Visual Design Apprenticeship is a 12-week long program where student designers worked on a variety of hands-on assignments focusing on visual, graphic, and brand design.'
        }
        button={
          <>
            <button
			  onClick={jumpToShowcase}
              className="view-showcase-button"
            >
              <span>View Showcase</span>
              <img src={Star} alt="star" />
            </button>
          </>
        }
      />
      <div ref={showcaseRef} className="showcase">
        <button
          ref={skipButtonRef}
          className={
            'skip-button' +
            (showButton ? ' skip-button-visible' : ' skip-button-hidden')
          }
          onClick={jumpToApprentice}
          aria-hidden={true}
        >
          <i id="arrow-down" />
        </button>
        <section className='showcase-section' ref={thumbnailRef}>
          <h2>Final Showcase</h2>
          <p>
            Throughout 12 weeks, apprentices created logos, UI screens, social
            media graphics, merch designs, and created brand identities.{' '}
          </p>
          <ThumbnailList
            thumbnails={testImages}
            thumbnailsPerRow={winWidth > 600 ? 4 : 1}
            justifyContent="space-around"
            forceSquare
            imagePadding={winWidth > 600 ? 10 : 0}
          />
        </section>
        <section ref={apprenticeRef}>
          <h2>Apprentice Experience</h2>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Showcase;
