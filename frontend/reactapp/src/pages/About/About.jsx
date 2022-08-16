import React from 'react'

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://preview.colorlib.com/theme/fashe/images/banner-14.jpg" alt="About" className='w-75 mt-5' />
                </div>
                <div className="col-md-6">
                    <h3 className="fs-5 mb-0">About Us</h3>
                    <h1 className="display-6 mb-2">Our story</h1>
                    <hr className='w-50' />
                    <p className="lead mb-4">Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
                    <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                    <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
