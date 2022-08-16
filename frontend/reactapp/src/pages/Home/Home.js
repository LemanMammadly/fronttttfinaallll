import React from 'react'
import "./Home.css"

const Home = ({prod}) => {
  return (
    <div className="home">
       <div id="carouselExampleControls" className="carousel slide homeslider" data-bs-ride="carousel">
    <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://preview.colorlib.com/theme/fashe/images/xmaster-slide-02.jpg.pagespeed.ic.A3H2aw755J.webp" className="d-block w-100 img" alt="..."/>
      <div className="text1">
            <span>Women Collection 2022</span>
            <h2>NEW ARRIVALS</h2>
            <a href="">SHOP NOW</a>
        </div>
    </div>
    <div className="carousel-item">
      <img src="https://preview.colorlib.com/theme/fashe/images/xmaster-slide-04.jpg.pagespeed.ic.S9TKdEngpr.webp" className="d-block w-100 img" alt="..."/>
      <div className="text1">
            <span>Women Collection 2022</span>
            <h2>NEW ARRIVALS</h2>
            <a href="">SHOP NOW</a>
        </div>
    </div>
    <div className="carousel-item">
      <img src="https://preview.colorlib.com/theme/fashe/images/xmaster-slide-03.jpg.pagespeed.ic.PnpLJWEHQM.webp" className="d-block w-100 img" alt="..."/>
      <div className="text1">
            <span>Women Collection 2022</span>
            <h2>NEW ARRIVALS</h2>
            <a href="">SHOP NOW</a>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  <section id='category'>
    <div className="container">
      <div className="row all justify-content-between align-items-center col-lg-4">
      <div className="left col-12">
        <div className="top img-cat">
          <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/xbanner-02.jpg.pagespeed.ic.2XKTlVyG8Q.webp" alt="" />
          <div className="textcat">
            <a href="">DRESSES</a>
          </div>
        </div>
        <div className="bottom img img-cat">
          <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/xbanner-05.jpg.pagespeed.ic.eg0Rtm7mlV.webp" alt="" />
          <div className="textcat">
            <a href="">SUNGLASSES</a>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="top img img-cat">
          <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/xbanner-03.jpg.pagespeed.ic.QCeF9H57-r.webp" alt="" />
          <div className="textcat">
            <a href="">WATCHES</a>
          </div>
        </div>
        <div className="bottom img img-cat">
          <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/xbanner-07.jpg.pagespeed.ic.n_cfVnpVEI.webp" alt="" />
          <div className="textcat">
            <a href="">FOOTERWEAR</a>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="top img img-cat">
          <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/xbanner-04.jpg.pagespeed.ic.hjhMj8Y7oY.webp" alt="" />
          <div className="textcat">
            <a href="">BAGS</a>
          </div>
        </div>
        <div className="bottom img-last img-cat">
          <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/icons/xbg-01.jpg.pagespeed.ic.VsJ0gHG6cV.webp" alt="" />
          <div className="text3">
            <h4>SIGN UP & GET 20% OFF</h4>
            <p>Be the frist to know about the latest fashion news and get exclu-sive offers</p>
            <a href="">SIGN UP</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
  <section id='featured'>
    <div className="container">
      <div className="row justify-content-between">
        <div className="top">
          <h3>FEATURED PRODUCTS</h3>
        </div>
       <div className="bottom row all col-lg-3 mb-5">
          <div className="box">
          <div className="btm-img">
            <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/xitem-02.jpg.pagespeed.ic.G7QObssXqI.webp" alt="" />
            <div className="btn">
              <a href="">ADD TO CARD</a>
            </div>
          </div>
          <div className="btm-text">
            <a href="">Herschel supply co 25l</a>
            <span>$75.00</span>
          </div>
          </div>
        </div>
        <div className="bottom row all col-lg-3">
          <div className="box">
          <div className="btm-img">
            <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/xitem-03.jpg.pagespeed.ic.P33h1Vjl0h.webp" alt="" />
            <div className="btn">
              <a href="">ADD TO CARD</a>
            </div>
          </div>
          <div className="btm-text">
            <a href="">Denim jacket blue</a>
            <span>$92.50</span>
          </div>
          </div>
        </div>
        <div className="bottom row all col-lg-3">
          <div className="box">
          <div className="btm-img">
            <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/xitem-05.jpg.pagespeed.ic.HGe1kqceEr.webp" alt="" />
            <div className="btn">
              <a href="">ADD TO CARD</a>
            </div>
          </div>
          <div className="btm-text">
            <a href="">Coach slim easton black</a>
            <span>$165.90</span>
          </div>
          </div>
        </div>
        <div className="bottom row all col-lg-3">
          <div className="box">
          <div className="btm-img">
            <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/xitem-07.jpg.pagespeed.ic.RSEvXc_QE5.webp" alt="" />
            <div className="btn">
              <a href="">ADD TO CARD</a>
            </div>
          </div>
          <div className="btm-text">
            <a href="">Frayed denim shorts</a>
            <span>$15.90</span>
          </div>
          </div>
        </div>
        <div className="bottom row all col-lg-3">
          <div className="box">
          <div className="btm-img">
            <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/xitem-14.jpg.pagespeed.ic.h8oZGh0DEZ.webp" alt="" />
            <div className="btn">
              <a href="">ADD TO CARD</a>
            </div>
          </div>
          <div className="btm-text">
            <a href="">Denim jacket blue</a>
            <span>$92.50</span>
          </div>
          </div>
        </div>
        <div className="bottom row all col-lg-3">
          <div className="box">
          <div className="btm-img">
            <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/xitem-01.jpg.pagespeed.ic.CENyWHK2ko.webp" alt="" />
            <div className="btn">
              <a href="">ADD TO CARD</a>
            </div>
          </div>
          <div className="btm-text">
            <a href="">Herschel supply co 25l</a>
            <span>$75.00</span>
          </div>
          </div>
        </div>
        <div className="bottom row all col-lg-3">
          <div className="box">
          <div className="btm-img">
            <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/xitem-06.jpg.pagespeed.ic.e7ZaBPDjeV.webp" alt="" />
            <div className="btn">
              <a href="">ADD TO CARD</a>
            </div>
          </div>
          <div className="btm-text">
            <a href="">Herschel supply co 25l</a>
            <span>$75.00</span>
          </div>
          </div>
        </div>
        <div className="bottom row all col-lg-3">
          <div className="box">
          <div className="btm-img">
            <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/xitem-08.jpg.pagespeed.ic.fpCUi2wFsB.webp" alt="" />
            <div className="btn">
              <a href="">ADD TO CARD</a>
            </div>
          </div>
          <div className="btm-text">
            <a href="">Herschel supply co 25l</a>
            <span>$75.00</span>
          </div>
          </div>
        </div>
        <div className="bottom row all col-lg-3">
          <div className="box">
          <div className="btm-img">
            <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/xitem-10.jpg.pagespeed.ic.1njKEG95CH.webp" alt="" />
            <div className="btn">
              <a href="">ADD TO CARD</a>
            </div>
          </div>
          <div className="btm-text">
            <a href="">Herschel supply co 25l</a>
            <span>$75.00</span>
          </div>
          </div>
        </div>
        <div className="bottom row all col-lg-3">
          <div className="box">
          <div className="btm-img">
            <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/xitem-12.jpg.pagespeed.ic.B243QJAJdq.webp" alt="" />
            <div className="btn">
              <a href="">ADD TO CARD</a>
            </div>
            <div className="btn">
              <a href="">ADD TO CARD</a>
            </div>
          </div>
          <div className="btm-text">
            <a href="">Herschel supply co 25l</a>
            <span>$75.00</span>
          </div>
          </div>
        </div>
        <div className="bottom row all col-lg-3">
          <div className="box">
          <div className="btm-img">
            <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/xitem-15.jpg.pagespeed.ic.FbmbYUdZTg.webp" alt="" />
            <div className="btn">
              <a href="">ADD TO CARD</a>
            </div>
          </div>
          <div className="btm-text">
            <a href="">Herschel supply co 25l</a>
            <span>$75.00</span>
          </div>
          </div>
        </div>
        <div className="bottom row all col-lg-3">
          <div className="box">
          <div className="btm-img">
            <img className='img-fluid' src="https://preview.colorlib.com/theme/fashe/images/xitem-11.jpg.pagespeed.ic.oHGL1lvkvk.webp" alt="" />
             <div className="btn">
              <a href="">ADD TO CARD</a>
            </div>
          </div>
          <div className="btm-text">
            <a href="">Herschel supply co 25l</a>
            <span>$75.00</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
</div>
  )
}

export default Home