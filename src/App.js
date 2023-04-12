import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import ProgramOverview from './pages/programOverview'
import Showcase from './pages/showcase'

const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

function App() {
	return (
		<Router>
			{' '}
			<ScrollToTop />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/program-overview'
					element={<ProgramOverview />}
				/>
				<Route
					path='/showcase'
					element={<Showcase />}
				/>
			</Routes>
		</Router>
	)
}

export default App
