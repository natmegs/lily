import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../../components/Navbar/navbar.jsx'
import GalleryColumn from '../../components/Gallery/gallery-column.jsx'

import pWildlife from '../../images/8.jpg';
import pSalmon from '../../images/32.jpg';
import pBeach from '../../images/33.jpg';
import pLandscape from '../../images/36.jpg';

import p1 from '../../images/1.jpg';
import p2 from '../../images/2.jpg';
import p3 from '../../images/3.jpg';
import p4 from '../../images/4.jpg';
import p5 from '../../images/5.jpg';
import p6 from '../../images/6.jpg';
import p7 from '../../images/7.jpg';
import p8 from '../../images/8.jpg';
import p9 from '../../images/9.jpg';
import p10 from '../../images/10.jpg';
import p11 from '../../images/11.jpg';
import p12 from '../../images/12.jpg';
import p13 from '../../images/13.jpg';
import p14 from '../../images/14.jpg';
import p15 from '../../images/15.jpg';
import p16 from '../../images/16.jpg';

const col1 = [p8, p2, p3, p4]
const col2 = [p5, p6, p7]
const col3 = [p9, p10, p11, p12]
const col4 = [p13, p14, p15, p16]

class Wildlife extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        images: col1.concat(col2).concat(col3).concat(col4),
        imgIndex: 0,
        opacity: '0',
        display: 'none'
      };
    }

    expandImage(src) {
        console.log(src)
        let currentImgIndex = this.state.images.findIndex(i => i === src);
        console.log("Setting state?")
        if(currentImgIndex > -1) {
            this.setState({
                imgIndex: currentImgIndex,
                display: 'flex',
                opacity: '1'
            });
            console.log("Set state");
        } 
    }

    collapseImage() {
        this.setState({
            display: 'none',
            opacity: '0'
        });
    }

    nextImage() {
        this.setState({
            imgIndex: (this.state.imgIndex + 1 < this.state.images.length) ? this.state.imgIndex + 1 : 0
        })
    }

    prevImage() {
        this.setState({
            imgIndex: (this.state.imgIndex - 1 < 0) ? this.state.images.length - 1 : this.state.imgIndex - 1
        })
    }
  
    render() {
      return (
        <div>
          <Navbar/>
          <div className="gallery-container">
            <div className="container-wide space-between">
              <GalleryColumn images={col1} imgClick={this.expandImage.bind(this)} />
              <GalleryColumn images={col2} imgClick={this.expandImage.bind(this)} />
              <GalleryColumn images={col3} imgClick={this.expandImage.bind(this)} />
              <GalleryColumn images={col4} imgClick={this.expandImage.bind(this)} />
            </div>
          </div>
          <div className="image-modal"  style={{display: this.state.display, opacity: this.state.opacity}}>
            <div className="image-modal-overlay" onClick={this.collapseImage.bind(this)}></div>
            <img src={this.state.images[this.state.imgIndex]} alt="" />
            <div className="image-modal-prev" onClick={this.nextImage.bind(this)}><i className="fa fa-chevron-left"></i></div>
            <div className="image-modal-next" onClick={this.prevImage.bind(this)}><i className="fa fa-chevron-right"></i></div>
          </div>
        </div>
      )
    }
  }

export default Wildlife