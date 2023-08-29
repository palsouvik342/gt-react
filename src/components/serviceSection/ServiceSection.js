import React from 'react'
import servicesBg from "../../uploads/services_bg.jpg";
import svg1 from "../../uploads/1.png";
import svg2 from "../../uploads/2.png";
import svg3 from "../../uploads/3.png";
import ItemServiceSection from './ItemServiceSection';

const ServiceSection = () => {
    const Dummydata = [
        {
            service_image: svg1,
            service_title: "Architecture",
            service_content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ex!.",
            service_url: "#",
            service_bg: servicesBg

        },
        {
            service_image: svg2,
            service_title: "Interior Design",
            service_content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ex!.",
            service_url: "#",
            service_bg: servicesBg
        },
        {
            service_image: svg3,
            service_title: "3D Modeling",
            service_content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ex!.",
            service_url: "#",
            service_bg: servicesBg
        },
    ]
  return (
    <section className="services_Section">
          <div className="section_title">
              <h5>best features</h5>
              <h2>Our services</h2>
          </div>
          <div className="container">
              <div className="row my-5">
                {Dummydata.map((data)=>(
                    <ItemServiceSection data={data}/>
                ))}
                  
                  {/* <div className="col-md-4">
                      <div className="single_services wow animate__animated animate__fadeInLeft" style={{backgroundImage: `url(${servicesBg})`}} data-wow-duration="2s" data-wow-delay="0.9s">
                          <div className="single_services_icon">
                              <svg width="80px" height="80px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                  <g id="SVGRepo_iconCarrier"> <defs></defs> <title/> <g data-name="Layer 7" id="Layer_7"> <polyline className="cls-1" points="52.17 16.1 62 22 2 22 32 4 39.18 8.31"/> <polyline className="cls-1" points="2 22 2 26 62 26 62 22"/> <rect className="cls-1" height="4" width="28" x="18" y="58"/> <rect className="cls-1" height="4" width="24" x="20" y="54"/> <polyline className="cls-1" points="20 54 2 54 2 62 18 62"/> <polyline className="cls-1" points="44 54 62 54 62 62 46 62"/> <path className="cls-1" d="M24,54V46a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8v8"/> <polyline className="cls-1" points="4 26 4 30 12 30 12 26"/> <polyline className="cls-1" points="4 54 4 50 12 50 12 54"/> <line className="cls-1" x1="6" x2="6" y1="30" y2="51"/> <line className="cls-1" x1="10" x2="10" y1="30" y2="51"/> <polyline className="cls-1" points="52 26 52 30 60 30 60 26"/> <polyline className="cls-1" points="52 54 52 50 60 50 60 54"/> <line className="cls-1" x1="54" x2="54" y1="30" y2="51"/> <line className="cls-1" x1="58" x2="58" y1="30" y2="51"/> <rect className="cls-1" height="4" width="16" x="24" y="30"/> <rect className="cls-1" height="12" width="6" x="14" y="34"/> <rect className="cls-1" height="12" width="6" x="44" y="34"/> <line className="cls-1" x1="14" x2="20" y1="40" y2="40"/> <line className="cls-1" x1="44" x2="50" y1="40" y2="40"/> <line className="cls-1" x1="32" x2="32" y1="38" y2="54"/> <path className="cls-1" d="M50,6H47a2,2,0,0,0-2,2h0a2,2,0,0,0,2,2h0a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2H44"/> <circle className="cls-1" cx="47" cy="10" r="8"/> <line className="cls-1" x1="47" x2="47" y1="6" y2="2"/> <line className="cls-1" x1="47" x2="47" y1="14" y2="18"/> </g> </g>
                              </svg>
                          </div>
                          <div className="single_services_txt">
                              <h3>Interior Design</h3>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ex!</p>
                          </div>
                          <div className="single_services_btn">
                              <a href="#">Read More</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="single_services wow animate__animated animate__fadeInLeft" style={{backgroundImage: `url(${servicesBg})`}} data-wow-duration="2s" data-wow-delay="0.6s">
                          <div className="single_services_icon">
                              <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                  <g id="SVGRepo_iconCarrier"> <path d="M22 22L2 22" stroke="#b19777" strokeWidth="1.5" strokeLinecap="round"/> <path d="M17 22V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V22" stroke="#b19777" strokeWidth="1.5"/> <path d="M20.25 11.5C20.25 11.9142 20.5858 12.25 21 12.25C21.4142 12.25 21.75 11.9142 21.75 11.5H20.25ZM20.1111 8.33706L19.6945 8.96066L19.6945 8.96066L20.1111 8.33706ZM20.6629 8.88886L20.0393 9.30554L20.0393 9.30554L20.6629 8.88886ZM21.75 15.5C21.75 15.0858 21.4142 14.75 21 14.75C20.5858 14.75 20.25 15.0858 20.25 15.5H21.75ZM17.5 8.75C18.2178 8.75 18.6998 8.75091 19.0672 8.78828C19.422 8.82438 19.586 8.8882 19.6945 8.96066L20.5278 7.71346C20.1318 7.44886 19.6925 7.34415 19.219 7.29598C18.758 7.24909 18.1866 7.25 17.5 7.25V8.75ZM21.75 11.5C21.75 10.8134 21.7509 10.242 21.704 9.78102C21.6559 9.30755 21.5511 8.86818 21.2865 8.47218L20.0393 9.30554C20.1118 9.41399 20.1756 9.57796 20.2117 9.93283C20.2491 10.3002 20.25 10.7822 20.25 11.5H21.75ZM19.6945 8.96066C19.831 9.05186 19.9481 9.16905 20.0393 9.30554L21.2865 8.47218C21.0859 8.17191 20.8281 7.91409 20.5278 7.71346L19.6945 8.96066ZM20.25 15.5V22H21.75V15.5H20.25Z" fill="#b19777"/> <path d="M3.88886 8.33706L4.30554 8.96066L4.30554 8.96066L3.88886 8.33706ZM3.33706 8.88886L3.96066 9.30554L3.96066 9.30554L3.33706 8.88886ZM3.75 20C3.75 19.5858 3.41421 19.25 3 19.25C2.58579 19.25 2.25 19.5858 2.25 20H3.75ZM2.25 16C2.25 16.4142 2.58579 16.75 3 16.75C3.41421 16.75 3.75 16.4142 3.75 16H2.25ZM6.5 7.25C5.81338 7.25 5.24196 7.24909 4.78102 7.29598C4.30755 7.34415 3.86818 7.44886 3.47218 7.71346L4.30554 8.96066C4.41399 8.8882 4.57796 8.82438 4.93283 8.78828C5.30023 8.75091 5.78216 8.75 6.5 8.75V7.25ZM3.75 11.5C3.75 10.7822 3.75091 10.3002 3.78828 9.93283C3.82438 9.57796 3.8882 9.41399 3.96066 9.30554L2.71346 8.47218C2.44886 8.86818 2.34415 9.30755 2.29598 9.78102C2.24909 10.242 2.25 10.8134 2.25 11.5H3.75ZM3.47218 7.71346C3.17191 7.91409 2.91409 8.17191 2.71346 8.47218L3.96066 9.30554C4.05186 9.16905 4.16905 9.05186 4.30554 8.96066L3.47218 7.71346ZM2.25 20V22H3.75V20H2.25ZM2.25 11.5V16H3.75V11.5H2.25Z" fill="#b19777"/> <path d="M12 22V19" stroke="#b19777" strokeWidth="1.5" strokeLinecap="round"/> <path d="M10 5H14" stroke="#b19777" strokeWidth="1.5" strokeLinecap="round"/> <path d="M10 14H10.5M14 14H12.5" stroke="#b19777" strokeWidth="1.5" strokeLinecap="round"/> <path d="M14 8H13.5M10 8H11.5" stroke="#b19777" strokeWidth="1.5" strokeLinecap="round"/> <path d="M10 11H14" stroke="#b19777" strokeWidth="1.5" strokeLinecap="round"/> </g>  
                              </svg>
                          </div>
                          <div className="single_services_txt">
                              <h3>3D Modeling</h3>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ex!</p>
                          </div>
                          <div className="single_services_btn">
                              <a href="#">Read More</a>
                          </div>
                      </div>
                  </div> */}
              </div>
          </div>
      </section>
  )
}

export default ServiceSection