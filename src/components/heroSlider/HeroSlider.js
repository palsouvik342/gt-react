import React from 'react'
import Slider1 from "../../uploads/slider1.jpg";
import Slider2 from "../../uploads/slider2.jpg";
import Slider3 from "../../uploads/slider3.jpg";
import ItemHeroSlider from './ItemHeroSlider';

export const HeroSlider = () => {
    const Dummydata = [
        {
            slider_image: Slider1,
            slidet_title: "Interior Design Agency",
            slider_content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum voluptatem voluptas aliquid praesentium sit, natus ut doloremque ipsam asperiores eius.",
            slider_url: "#",
            isActive:true

        },
        {
            slider_image: Slider2,
            slidet_title: "Innovative Architecture",
            slider_content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum voluptatem voluptas aliquid praesentium sit, natus ut doloremque ipsam asperiores eius.",
            slider_url: "#",
            isActive: false,
        },
        {
            slider_image: Slider3,
            slidet_title: "Classic and Modern",
            slider_content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum voluptatem voluptas aliquid praesentium sit, natus ut doloremque ipsam asperiores eius.",
            slider_url: "#",
            isActive:false,
        },
    ]
  return (
    <section className="hero_slider_section">
          <div id="carouselExampleFade" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                {Dummydata.map((data)=>(
                    <ItemHeroSlider data={data}/>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
      </section>
  )
}
