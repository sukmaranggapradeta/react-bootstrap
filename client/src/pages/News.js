import React, { Component } from "react";
import NewCard from "../components/NewCard";
import { news } from "../data.js";

export class News extends Component {
  render() {
    return (
      <div>
        {news.map(el => {
          return <NewCard item={el} key={el.id} />;
        })}
      </div>
    );
  }
}

export default News;
