import React from 'react'
import Link from 'gatsby-link'

// export default ({images, imgClick}) => {
//     return (
//         <div className="column">
//             {images.map(img => {
//                 return (
//                     <div className="gallery-image" onClick="this.clickImage.bind(this, img)">
//                         <img src={img} alt=""/>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

class GalleryColumn extends React.Component {
    constructor(props) {
      super(props);
    }

    clickImage(src) {
        this.props.imgClick(`${src}`);
    }
  
    render() {
      return (
        <div className="column">
            {this.props.images.map(img => {
                return (
                    <div className="gallery-image" onClick={this.clickImage.bind(this, img)} key={img}>
                        <img src={img} alt=""/>
                    </div>
                )
            })}
        </div>
    )
    }
  }

export default GalleryColumn