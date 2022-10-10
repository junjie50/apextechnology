const VisitUs = () => {
  return (
    <div className="Visit-Us-Container">
      <h2 className="h1-responsive font-weight-bold text-center my-4">Visit us</h2>
      <iframe  loading="lazy" allowFullScreen className="Visit-Us"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJk7-Qn9092jERyzxtciPCNWM&key=AIzaSyAjlB-33zyyHvhUzMshmHWN-pI0zXSst4s"></iframe>
    </div>
    )
}

const ContactUs = () => {
  return (
    <div className="contact-us">
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
            a matter of hours to help you.</p>

        <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" id="name" name="name" className="form-control"></input>
                                <label for="name" className="">Your name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" id="email" name="email" className="form-control"></input>
                                <label for="email" className="">Your email</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="md-form mb-0">
                                <input type="text" id="subject" name="subject" className="form-control"></input>
                                <label for="subject" className="">Subject</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-12">
                            <div className="md-form">
                                <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                <label for="message">Your message</label>
                            </div>

                        </div>
                    </div>
                </form>

                <div className="text-center text-md-left">
                    <a className="btn btn-primary" onClick="document.getElementById('contact-form').submit();">Send</a>
                </div>
                <div className="status"></div>
            </div>
            <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                    <li><i className="fas fa-map-marker-alt fa-2x"></i>
                        <p>Singapore 679135</p>
                    </li>

                    <li><i className="fas fa-phone mt-4 fa-2x"></i>
                        <p>+65 60899210</p>
                    </li>

                    <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                        <p>apextechnology@mymail.com</p>
                    </li>
                </ul>
            </div>
        </div>
      </section>
      <VisitUs />
    </div>
  )
}

export default ContactUs