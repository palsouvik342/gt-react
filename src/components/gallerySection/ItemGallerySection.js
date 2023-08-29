import React from 'react'
import ReactFancyBox from 'react-fancybox'

const ItemGallerySection = ({data}) => {
  return (
    <div className="col-md-4">
        <div className="single_gallery_img wow animate__animated animate__zoomIn">
            <ReactFancyBox thumbnail={data.gallery_image} image={data.gallery_image}/>
        </div>
    </div>
  )
}

export default ItemGallerySection