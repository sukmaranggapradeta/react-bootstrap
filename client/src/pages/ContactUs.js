import React, { Component } from "react";
import { Link } from 'react-router-dom'
 
export class ContactUs extends Component {
  render() {
    return (
      <section className="my-2 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Our Location</strong>
            </h3>
          </div>
          <div className="row">
            <div className="col-md-7">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1yYMKqxb1XyTYIdE5yjNkzs7vWjGGzQrg"
                width="100%"
                height="415px"
                frameBorder="0"
                allowFullScreen
              />
            </div>
            <div className="col-md-5">
              <h4>
                <strong>Contact Us</strong>
              </h4>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <textarea
                  cols="30"
                  rows="3"
                  placeholder="Message"
                  className="form-control"
                />
                <Link className="btn btn-outline-primary text-uppercase mt-1">
                <i class="fa fa-telegram" aria-hidden="true">&nbsp;Send</i>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
