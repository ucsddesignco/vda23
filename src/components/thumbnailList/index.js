import React from 'react'
import uuid from 'react-uuid'

import './styles.scss'

// function ConditionalWrapper({ condition, ComponentWrapper, elementWrapper, props, children }) {
// 	return condition ? (
// 		ComponentWrapper ? (
// 			<ComponentWrapper
// 				children={children}
// 				{...props}
// 			/>
// 		) : (
// 			React.createElement(elementWrapper, props, children)
// 		)
// 	) : (
// 		<>{children}</>
// 	)
// }

function ThumbnailList({ thumbnails, thumbnailsPerRow = 3, forceSquare = true, justifyContent = 'space-around', imagePadding = 0 }) {
	return (
		<div
			className='dcomp-thumbnail-list-container'
			style={{
				justifyContent: justifyContent,
			}}
		>
			{Object.keys(thumbnails).map(cap =>
				React.createElement(
					// element name
					typeof thumbnails[cap]?.href === 'string' ? 'a' : 'figure',
					// props
					{
						className: 'dcomp-thumbnail-list-thumbnail',
						href: typeof thumbnails[cap]?.href === 'string' ? thumbnails[cap].href : undefined,
						target: typeof thumbnails[cap]?.href === 'string' ? '_blank' : undefined,
						rel: typeof thumbnails[cap]?.href === 'string' ? 'noreferrer' : undefined,
						style: {
							'--max-thumbnail-width': `calc(${Math.floor((100 / thumbnailsPerRow) * 100) / 100}%`,
							'--image-padding': `${imagePadding}px`,
						},
						key: uuid(),
					},
					// children
					<>
						<img
							className={'dcomp-thumbnail-list-image' + String(forceSquare && ' dcomp-thumbnail-list-image-square')}
							src={thumbnails[cap].src}
							alt={thumbnails[cap].alt}
							width='100%'
						/>
						<figcaption className='dcomp-thumbnail-list-image-caption'>{cap}</figcaption>
					</>,
				),
			)}
		</div>
	)
}

export default ThumbnailList
