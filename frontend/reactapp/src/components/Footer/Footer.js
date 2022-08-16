import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="top row justify-content-between align-items-center">
                    <div className="touch col-lg-4">
                        <h4>GET IN TOUCH</h4>
                       <div className="row all-links">
                       <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                        <div>
                            <a href="/"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="/"><i class="fa-brands fa-instagram"></i></a>
                            <a href="/"><i class="fa-brands fa-pinterest-p"></i></a>
                            <a href="/"><i class="fa-brands fa-snapchat"></i></a>
                            <a href="/"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                       </div>
                    </div>
                    <div className="categories col-lg-1">
                        <h4>CATEGORIES</h4>
                        <div className="row all-links">
                            <a href="/">Men</a>
                            <a href="/">Women</a>
                            <a href="/">Dresses</a>
                            <a href="/">Sunglasses</a>
                        </div>
                    </div>
                    <div className="links col-lg-1">
                            <h4>LINKS</h4>
                            <div className="all-links row">
                            <a href="/">Search</a>
                            <a href="/">About Us</a>
                            <a href="/">Contact Us</a>
                            <a href="/">Returns</a>
                            </div>
                    </div>
                    <div className="help all-links col-lg-1">
                      <h4>HELPS</h4>
                      <div className="row all-links">
                        <a href="/">Track Order</a>
                        <a href="/">Returns</a>
                        <a href="/">Shipping</a>
                        <a href="/">FAQs</a>
                      </div>
                    </div>
                    <div className="newsletter col-lg-3">
                     <h4>NEWSLETTER</h4>
                     <div className="row all-links">
                        <input type="text" placeholder='email@example.com' />
                        <button className='btnn'>SUBSCRIBE</button>
                     </div>
                    </div>
                </div>
                <div className="bottom text-center">
                    <div className="img">
                        <img src="https://preview.colorlib.com/theme/fashe/images/icons/xpaypal.png.pagespeed.ic.5IRC94FTgA.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/fashe/images/icons/xvisa.png.pagespeed.ic.JL9CL229f9.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/fashe/images/icons/xmastercard.png.pagespeed.ic.TeTk-UB0H_.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/fashe/images/icons/xexpress.png.pagespeed.ic.BytsYpfna2.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/fashe/images/icons/xdiscover.png.pagespeed.ic.CT7I1GD_bQ.webp" alt="" />
                    </div>
                    <div className="text">
                    Copyright © 2022 Colorlib. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer