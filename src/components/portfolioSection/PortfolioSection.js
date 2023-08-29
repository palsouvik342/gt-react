import React from 'react'
// owl carousel package
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css'
import Portfolio from "../../uploads/portfolio1.jpg"
import ItemPortfolioSection from './ItemPortfolioSection';

const PortfolioSection = () => {
    const Dummydata = [
        {
            portfolio_image: Portfolio,
            portfolio_title: "Inspirig New Space",
            portfolio_caption: "Art & Illustration",

        },
        {
            portfolio_image: Portfolio,
            portfolio_title: "Inspirig New Space",
            portfolio_caption: "Art & Illustration",

        },
        {
            portfolio_image: Portfolio,
            portfolio_title: "Inspirig New Space",
            portfolio_caption: "Art & Illustration",

        },
        {
            portfolio_image: Portfolio,
            portfolio_title: "Inspirig New Space",
            portfolio_caption: "Art & Illustration",

        },
        {
            portfolio_image: Portfolio,
            portfolio_title: "Inspirig New Space",
            portfolio_caption: "Art & Illustration",

        },
        {
            portfolio_image: Portfolio,
            portfolio_title: "Inspirig New Space",
            portfolio_caption: "Art & Illustration",

        },
    ]
  return (
    <section className="our_portfolio">
          <div className="section_title">
              <h5 >best features</h5>
              <h2 className="text-white">Our services</h2>
          </div>
          <div className="portfolio_slider">
              <OwlCarousel options={{
                  items: 2, 
                  center: true,
                  loop: true, 
                  margin: 10, 
                  responsive:{
                    600:{
                        items:2
                    }
                }
                }}>
                    {Dummydata.map((data)=>(
                        <ItemPortfolioSection data={data} />
                    ))}
              </OwlCarousel>
          </div>
      </section>
  )
}

export default PortfolioSection