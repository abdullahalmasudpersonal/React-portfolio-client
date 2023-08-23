import React from 'react';
import './ConnectUs.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faMobileAndroidAlt } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';
library.add(fab)

const ConnectUs = () => {
  return (
    <div id='connect-us' className='connect-us pb-5'>
      <div className='container pt-3'>
        <h3 className='text-center pt-5 about-about-headline mb-5 mt-5'>CONNECT</h3>

        <div class="row pt-5">
          <div class="col-md-4 mb-5">
            <div class="">
              <div class="">

                <div className='d-flex align-items-center m-2 mb-3 addressIconAnimation'>
                  <a style={{ borderRadius: '50%', padding: '9px 15px' }} className=" btn btn-outline-light btn-floating m-1 me-3" href="#!" role="button"><FontAwesomeIcon icon={faLocationDot} /></a>
                  <div>
                    <h5>Location</h5>
                    <p>Jatrabari, Dhaka. 1204</p>
                  </div>
                </div>

                <div className='d-flex align-items-center m-2 mb-3 addressIconAnimation'>
                  <a style={{ borderRadius: '50%', padding: '9px 13px' }} className=" btn btn-outline-light btn-floating m-1 me-3" href="#!" role="button"><FontAwesomeIcon icon={faEnvelope} /></a>
                  <div>
                    <h5>Email</h5>
                    <p>abdullahalmasud772gmail.com</p>
                  </div>
                </div>

                <div className='d-flex align-items-center m-2 mb-3 addressIconAnimation'>
                  <a style={{ borderRadius: '50%', padding: '10px 15px' }} className=" btn btn-outline-light btn-floating m-1 me-3" href="#!" role="button"><FontAwesomeIcon icon={faMobileAndroidAlt} /></a>
                  <div>
                    <h5>Phone</h5>
                    <p>+880 1726457771</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="col-md-8 mb-5">
            <div class="">
              <div class="">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ConnectUs;