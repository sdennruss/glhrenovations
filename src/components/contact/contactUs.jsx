import React from "react";

const ContactUs = () => {
  return (
    <React.Fragment>
      <div className="expand-transition"></div>
      <div className="contact-container">
        <div className="contact-columns">
          <div className="contact-left">
            <div className="contact-title">
              <h2>Let's Build!</h2>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-details">
              <p className="contact-info">
                Shoot me a message to further discuss villa availability or
                contract work.
              </p>
              <p>
                <span className="bold-contact">WhatsApp:</span> +61 426 535 166
              </p>
              <p>
                <span className="bold-contact">Email:</span> +61 426 535 166
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
