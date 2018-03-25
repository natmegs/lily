import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../../components/Navbar/navbar.jsx'
import GalleryImageLink from '../../components/Gallery/gallery-image-link'

import pWildlife from '../../images/8.jpg';
import pSalmon from '../../images/32.jpg';
import pBeach from '../../images/33.jpg';
import pLandscape from '../../images/36.jpg';

const Gallery = () => (
  <div>
    <Navbar />
    <div className="gallery-container">
      <div className="container space-between">
        {/* <h2 className="gallery-header">Photo Galleries</h2> */}
        <GalleryImageLink src={pWildlife} link="/gallery/wildlife/" title="Wildlife" />
        <GalleryImageLink src={pSalmon} link="/gallery/salmon/" title="Salmon" />
        <GalleryImageLink src={pBeach} link="/gallery/beach/" title="Beach" />
        <GalleryImageLink src={pLandscape} link="/gallery/landscape/" title="Landscape" />
      </div>
    </div>
  </div>
)

export default Gallery
