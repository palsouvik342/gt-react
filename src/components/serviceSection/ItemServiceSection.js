import React from 'react'

const ItemServiceSection = ({data}) => {
  return (
    <div className="col-md-4">
        <div className="single_services wow animate__animated animate__fadeInLeft" style={{backgroundImage: `url(${data.service_bg})`}} data-wow-duration="2s" data-wow-delay="1.4s">
            <div className="single_services_icon">
                <img src={data.service_image} alt="" />
            </div>
            <div className="single_services_txt">
                <h3>{data.service_title}</h3>
                <p>{data.service_content}</p>
            </div>
            <div className="single_services_btn">
                <a href={data.service_url}>Read More</a>
            </div>
        </div>
    </div>
  )
}

export default ItemServiceSection