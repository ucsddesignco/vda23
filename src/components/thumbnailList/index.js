import React from 'react'

import './styles.scss'

function ThumbnailList({ thumbnails, thumbnailsPerRow = 3, forceSquare = true, justifyContent = 'space-around', imagePadding = 0 }) {
	return (
		<div
			className='dcomp-thumbnail-list-container'
			style={{
				justifyContent: justifyContent,
			}}
		>
			{Object.keys(thumbnails).map(cap => (
				<figure
					className='dcomp-thumbnail-list-thumbnail'
					style={{
						'--max-thumbnail-width': `calc(${Math.floor((100 / thumbnailsPerRow) * 100) / 100}%`,
						'--image-padding': `${imagePadding}px`,
					}}
				>
					<img
						className={'dcomp-thumbnail-list-image' + String(forceSquare && ' dcomp-thumbnail-list-image-square')}
						src={thumbnails[cap]}
						alt={`Some regularized description of ${cap}.`}
						width='100%'
					/>
					<figcaption className='dcomp-thumbnail-list-image-caption'>{cap}</figcaption>
				</figure>
			))}
		</div>
	)
}

export default ThumbnailList
