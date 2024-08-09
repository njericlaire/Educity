import React from 'react'
import './Gallery.css'
import gallery1 from '../../assets/edusity_assets/gallery-1.png'
import gallery2 from '../../assets/edusity_assets/gallery-2.png'
import gallery3 from '../../assets/edusity_assets/gallery-3.png'
import gallery4 from '../../assets/edusity_assets/gallery-4.png'
import white_arrow from '../../assets/edusity_assets/white-arrow.png'

const Gallery = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery1} alt=''/>
            <img src={gallery2} alt=''/>
            <img src={gallery3} alt=''/>
            <img src={gallery4} alt=''/>
        </div>
        <button className='btn btn-dark'>See more here <img src={white_arrow} alt=''/></button>
      
    </div>
  )
}

export default Gallery
