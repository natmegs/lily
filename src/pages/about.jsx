import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../components/Navbar/navbar.jsx'

import lily from '../images/lily.jpg'

const About = () => (
  <div>
    <Navbar />
    <div className="about-container">
      <div className="container space-between">
        {/* <h2 className="gallery-header">Photo Galleries</h2> */}
        <div className="about-photo">
            <img src={lily} alt="" />
        </div>
        <div className="about-text">
            <h3 className="about-header">About Me</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada aliquet turpis a vulputate. Aenean hendrerit mattis nulla, ut tincidunt velit euismod semper. Duis ultrices ex ut rhoncus ultrices. Suspendisse quis tortor elementum, mattis sapien at, dignissim lectus. Donec vitae pellentesque tortor.</p>
            <p>Nulla diam magna, vestibulum eu tempor a, porttitor vel sem. Fusce a venenatis libero. Vivamus commodo suscipit nisi vel fringilla. Morbi eget luctus ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla nec magna rhoncus, elementum ipsum vitae, ultrices ligula.</p>
        </div>
      </div>
    </div>
  </div>
)

export default About