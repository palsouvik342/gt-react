import React from 'react'

const ItemPortfolioSection = ({data}) => {
  return (
    <div className="item">
        <div className="single_portfolio_item">
            <div className="single_portfolio_item_img">
                <img className="img-fluid" src={data.portfolio_image} alt="Portfolio" />
            </div>
            <div className="single_portfolio_item_txt text-center">
                <p>{data.portfolio_title}</p>
                <h2>{data.portfolio_caption}</h2>
            </div>
        </div>
    </div>
  )
}

export default ItemPortfolioSection