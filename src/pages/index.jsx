import React from 'react'
import Link from 'gatsby-link'
import { Transition } from 'react-transition-group'

import p1 from '../images/8.jpg';
import p2 from '../images/10.jpg';
import p3 from '../images/12.jpg';
import p4 from '../images/19.jpg';
import p5 from '../images/28.jpg';
import p6 from '../images/30.jpg';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      images: [p1, p2, p3, p4, p5, p6],
      imgIndex: 0,
      opacity: '0.6' 
    };
  }

  componentDidMount() {
    this.transitionID = setInterval(() => { this.tick() }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.transitionID);
  }

  tick() {
    this.setState({ opacity: '0' });
    setTimeout(() => {
      this.setState({
        opacity: '0.6',
        imgIndex: this.state.transitionIn ? this.state.imgIndex : (((this.state.imgIndex + 1) >= this.state.images.length) ? 0 : this.state.imgIndex + 1)
      });
    }, 300);
  }

  render() {
    return (
      <div className="full-page-container">
        <div className="full-page-image" style={{opacity: this.state.opacity}}>
          <img src={this.state.images[this.state.imgIndex]}/>
        </div>
        <div className="image-text-overlay">
          <h1 className="landing-header">Lily Campbell</h1>
          <div className="landing-pagelinks">
            <Link className="landing-link" to="/gallery/">Gallery</Link>
            <Link className="landing-link" to="/about/">About Me</Link>
            <Link className="landing-link" to="/">Contact</Link>
          </div>
          <div className="landing-socials">
            <a href="#"><i className="fa fa-instagram landing-link"></i></a>
            <a href="#"><i className="fa fa-facebook-square landing-link"></i></a>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
