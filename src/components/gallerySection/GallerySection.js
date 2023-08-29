import React from 'react'
import Portfolio from "../../uploads/portfolio1.jpg"
// fancybox
import ItemGallerySection from './ItemGallerySection'

const GallerySection = () => {
    const Dummydata = [
        {
            gallery_image: Portfolio,

        },
        {
            gallery_image: Portfolio,

        },
        {
            gallery_image: Portfolio,

        },
        {
            gallery_image: Portfolio,

        },
        {
            gallery_image: Portfolio,

        },
        {
            gallery_image: Portfolio,

        },
    ]
  return (
    <section className="gallery_section">
          <div className="section_title">
              <h5 >show case</h5>
              <h2>Our Gallery</h2>
          </div>
          <div className="container-fluid">
              <div className="row">
                  {Dummydata.map((data) => (
                    <ItemGallerySection data={data} />
                  ))}
                  
              </div>
          </div>
      </section>
  )
}

export default GallerySection