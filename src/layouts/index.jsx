import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'

import './font-awesome-4.7.0/css/font-awesome.min.css';
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Lily Campbell</title>
      <link rel="shortcut icon" href={favicon} />
      <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Raleway:300,400,700|Shadows+Into+Light|Roboto:300,400,700" rel="stylesheet"/>
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
