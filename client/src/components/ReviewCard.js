import React, { Component } from "react";

export class ReviewCard extends Component {
  render() {
    return (
      <div className="media mt-5">
        <img src={ this.props.data.avatar } style={{ width: "40px" }} alt={ this.props.data.name } className="mr-3" />
        <div className="media-body">
          <h5 className="mt-0">{ this.props.data.name }</h5>
          <p>{ this.props.data.comment }</p>
        </div>
      </div>
    );
  }
}

export default ReviewCard;
