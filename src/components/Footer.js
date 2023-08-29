import React from 'react'

const Footer = () => {
  return (
    <footer className="footer_section">
          <div className="container">
              <div className="row">

                  <div className="col-md-4">
                      <img src="uploads/logo.png" alt="" />
                      <div className="footer_About">
                          <p>Our team takes over everything, from an idea and concept development to realization.</p>
                      </div>
                      <div className="social_icons">
                          <div className="single_social_icon">
                              <i className="fab fa-facebook-f"></i>
                          </div>
                          <div className="single_social_icon">
                              <i className="fab fa-twitter"></i>
                          </div>
                          <div className="single_social_icon">
                              <i className="fab fa-instagram"></i>
                          </div>
                          <div className="single_social_icon">
                              <i className="fab fa-pinterest-p"></i>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-2">
                      <div className="footer_title">
                          <h5>useful links</h5>
                      </div>
                      <div className="footer_content">
                          <ul>
                              <li><i className="fas fa-chevron-right"></i> interior design</li>
                              <li><i className="fas fa-chevron-right"></i> interior design</li>
                              <li><i className="fas fa-chevron-right"></i> interior design</li>
                              <li><i className="fas fa-chevron-right"></i> interior design</li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-md-2">
                      <div className="footer_title">
                          <h5>useful links</h5>
                      </div>
                      <div className="footer_content">
                          <ul>
                              <li><i className="fas fa-chevron-right"></i> interior design</li>
                              <li><i className="fas fa-chevron-right"></i> interior design</li>
                              <li><i className="fas fa-chevron-right"></i> interior design</li>
                              <li><i className="fas fa-chevron-right"></i> interior design</li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="footer_content p-0">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.616432895534!2d88.37648777539972!3d22.630794279450424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d3b002e41dd%3A0xd32ef999d109152e!2sGTECH%20WEB%20SOLUTIONS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1693325625221!5m2!1sen!2sin" width="100%" height="180" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer