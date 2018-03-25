import React from 'react'
import Link from 'gatsby-link'

export default ({src, title, link}) => {
    return (
        <div className="gallery-image-link-container">
        <Link to={link}>
                <img src={src} alt="" />
                <div className="gallery-image-link-overlay">
                    <h4 className="overlay-title">{title}</h4>
                </div>
        </Link>
        </div>
    )
}