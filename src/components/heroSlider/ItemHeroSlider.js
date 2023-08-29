import React from 'react'
const ItemHeroSlider = (props) => {
  return (
    <div className={`carousel-item ${props.data.isActive ? 'active' : ''}`}>
        <div className="custom_carousel_item custom_carousel_item1" style={{backgroundImage: `url(${props.data.slider_image})`}}>
            <div className="carousel_overlay"></div>
            <h2 className="wow animate__animated animate__fadeInDown">{props.data.slidet_title}</h2>
            <p className="wow animate__animated animate__fadeIn">{props.data.slider_content}</p>
            <a href={props.data.slider_url} className="wow animate__animated animate__fadeInUp">discover more</a>
        </div>
    </div>
  )
}

export default ItemHeroSlider