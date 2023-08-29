import React from 'react'

const ContactSection = () => {
  return (
    <section className="contact_section">
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <div className="g_map">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.616432895534!2d88.37648777539972!3d22.630794279450424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d3b002e41dd%3A0xd32ef999d109152e!2sGTECH%20WEB%20SOLUTIONS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1693325625221!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="contact_form p-4">
                          <form>
                              <div className="single-form-row">
                                  <input type="text" placeholder="Name"/>
                              </div>
                              <div className="single-form-row">
                                  <input type="email" placeholder="Email"/>
                              </div>
                              <div className="single-form-row">
                                  <textarea rows="6" placeholder="Message"></textarea>
                              </div>
                              <div className="single-form-row">
                                  <button className="form_submit_btn">send message</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default ContactSection