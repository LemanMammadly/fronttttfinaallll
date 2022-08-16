import React from 'react'

const Contact = () => {

  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
            <div className="row mb-5">
                <div className="col-12">
                    <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                    <h1 className="display-6 text-center mb-4">Have Some <b>Questoins?</b></h1>
                    <hr className='w-25 mx-auto'/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=13sX1yizxars3Dtb7rQV6-nz0BifdCbs&ehbc=2E312F" width="640" height="480"></iframe>
                </div>
                <div className="col-md-6">
                    <form>
                    <div class="mb-3">
                    <label for="name" class="form-label">Your Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Laman Mammadli" name='name' />
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' />
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name='message' ></textarea>
                    </div>
                    <button type='submit' className='btn btn-outline-primary rounded-pill px-4'>Send Message <i className="ms-2 fa fa-paper-plane"></i> </button>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
