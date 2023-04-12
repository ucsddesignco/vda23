import React, { useEffect, useRef, useState } from 'react'
import { ThumbnailList } from '@arth-shukla/dco-mponents'

import Landing from '../../components/landing'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

import './styles.scss'

const TestImages = {
	Angy: 'https://preview.redd.it/voiac279e2461.png?auto=webp&s=68ac149085a1bab71f1dd4d71d0a509bcc4a316e',
	'Frew Up': 'https://i.pinimg.com/564x/5b/02/47/5b0247d140ff9659066d61fa63edc79a.jpg',
	Happy: 'https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg',
	Hello: 'https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg',
	Melvin: 'https://preview.redd.it/r3lcc7gf64791.png?width=540&format=png&auto=webp&s=9d32ec46f884486fd59dfd01453bf5d07bf30d75',
	Polite: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg',
	Sadge: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDkNL450VCdu6u6eWC7IYwb2I9WB5uT8XKnF4ZVtsOaA&usqp=CAU&ec=48665701',
	Stinky: 'https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/smudge-the-viral-cat.jpg',
}

function Showcase() {
	const [winWidth, setWinWidth] = useState(window.innerWidth)
	const [showButton, setShowButton] = useState(false)

	const skipButtonRef = useRef()
	const thumbnailRef = useRef()
	const apprenticeRef = useRef()

	useEffect(() => {
		window.addEventListener('resize', handleResize, { passive: true })
		window.addEventListener('scroll', handleScroll, { passive: true })
	}, [])

	const handleResize = () => {
		setWinWidth(window.innerWidth)
	}

	const handleScroll = () => {
		let thumbnailY = thumbnailRef.current?.getBoundingClientRect().top,
			apprenticeY = apprenticeRef.current?.getBoundingClientRect().top

		console.log(thumbnailY <= 10 && apprenticeY > window.innerHeight - 10)
		console.log(thumbnailY, apprenticeY, window.innerHeight)

		if (thumbnailY <= -50 && apprenticeY > window.innerHeight - 10 && window.innerWidth <= 600) {
			setShowButton(true)
		} else setShowButton(false)
	}

	const jumpToApprentice = () => {
		apprenticeRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div className='showcase'>
			<Navbar />
			<button
				ref={skipButtonRef}
				className={'skip-button' + (showButton ? ' skip-button-visible' : ' skip-button-hidden')}
				onClick={jumpToApprentice}
				aria-hidden={true}
			>
				<i id='arrow-down' />
			</button>
			<section ref={thumbnailRef}>
				<h1>Final Showcase</h1>
				<p>Throughout 12 weeks, apprentices created logos, UI screens, social media graphics, merch designs, and created brand identities. </p>
				<ThumbnailList
					thumbnails={TestImages}
					thumbnailsPerRow={winWidth > 600 ? 4 : 1}
					justifyContent='space-around'
					forceSquare
					imagePadding={winWidth > 600 ? 10 : 0}
				/>
			</section>
			<section ref={apprenticeRef}>
				<h1>Apprentice Experience</h1>
			</section>
			<Footer />
		</div>
	)
}

export default Showcase
