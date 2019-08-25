import React, { Component } from "react";
import { placeInfo } from "../data";
import Card from "../components/Card";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {placeInfo.map(el => {
              return <Card data={el} key={el.id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
