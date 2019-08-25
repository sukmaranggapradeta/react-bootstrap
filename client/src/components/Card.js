import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


export class Card extends Component {
  render() {
    return (
        <div className="col-10 col-lg-4 col-md-6 mx-auto mb-5">
          <div className="card" style={{ width: "18rem" }}>
            <img src={ this.props.data.img } className="card-img-top" alt="" />
            <div className="card-body">
            <h3 className="text-uppercase">{ this.props.data.headerTitle }</h3>
              <h5 className="card-title">{ this.props.data.headerSubTitle }</h5>
              <p className="card-text">{ this.props.data.headerText }</p>
              <Link to="/details" className="btn btn-outline-primary text-uppercase">
                More Info
              </Link>
            </div>
          </div>
        </div>
    );
  }
}

export default Card;
