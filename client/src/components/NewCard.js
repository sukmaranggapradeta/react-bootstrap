import React, { Component } from "react";
import { Link } from 'react-router-dom'

export class NewCard extends Component {
  render() {
    return (
      <div className="card container mt-2 mb-3 p-5">
        <div className="card-body">
          <h5 className="card-title">{this.props.item.newsTitle}</h5>
          <p className="card-text"> {this.props.item.newsText}</p>
        <Link className="card-link">Read More >></Link>
        </div>
      </div>
    );
  }
}

export default NewCard;
