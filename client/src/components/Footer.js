import React from 'react'
import '../App.css';

const Footer = () => {
    return (
        <div>
           <div>
        {/*====================  footer area ====================*/}
        <div className="footer-area dark-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-content-wrapper section-space--inner--100">
                  <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-12">
                      {/* footer intro wrapper */}
                      <div className="footer-intro-wrapper">
                        <div className="footer-logo">
                          <a href={`${process.env.PUBLIC_URL}/home-two`}>
                            <div className="logoHead">
                              <img
                                src="/assets/img/logo/logonew.png"
                                alt=""
                                className="sticky-logo img-fluid"
                              />
                              <h3>KnowHow</h3>
                            </div>
                          </a>
                        </div>
                        <div className="footer-desc">
                          Lorem ipsum dolor sit amet consect adipisici elit, sed
                          do eiusmod tempor incididuk ut labore et dolore magna
                          aliqua Ut enim
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                      {/* footer widget */}
                   
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                   
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                      {/* footer widget */}
                      <div className="footer-widget mb-0">
                        <h4 className="footer-widget__title">CONTACT US</h4>
                        <div className="footer-widget__content">
                          <p className="address">
                            Rue 14 janvier Monastir 5000
                          </p>
                          <ul className="contact-details">
                            <li>
                              <span>Phone:</span>25 026 324
                            </li>
                            <li>
                              <span>Fax:</span>73 44 77 62
                            </li>
                            <li>
                              <span>Email:</span>Classi@gmail.com
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright-wrapper">
            <div className="footer-copyright text-center">
              Copyright © 2021. All right reserved
            </div>
          </div>
        </div>
     
      </div>  
        </div>
    )
}

export default Footer
