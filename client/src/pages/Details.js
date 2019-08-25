import React, { Component } from "react";
import { detailInfo, reviews } from "../data";
import ReviewCard from '../components/ReviewCard'
import "./detail.css";

export class Details extends Component {
  render() {
    return (
      <>
        {/* { JSON.stringify(placeInfo) } */}
        <div className="header-style">
          <h1 className="display-1">{detailInfo.headerTitle}</h1>
          <h4 className="display-4">{detailInfo.headerSubTitle}</h4>
          <p>{detailInfo.description}</p>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-2">
                <i className="fa fa-facebook-f" />
              </div>
              <div className="col-2">
                <i className="fa fa-whatsapp" />
              </div>
              <div className="col-2">
                <i className="fa fa-facebook-square" />
              </div>
              <div className="col-2">
                <i className="fa fa-reddit" />
              </div>
              <div className="col-2">
                <i className="fa fa-google-plus" />
              </div>
              <div className="col-2">
                <i className="fa fa-twitter" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#aboutplace"
                role="tab"
                data-toggle="tab"
              >
                About Place
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#reviews"
                role="tab"
                data-toggle="tab"
              >Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#map" role="tab" data-toggle="tab">
                Map
              </a>
            </li>
          </ul>
          <div class="tab-content mb-5" id="nav-tabContent">
            <div
              class="tab-pane fade show active text-center mt-5"
              id="aboutplace"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <h2 className="mb-3">{detailInfo.headerTitle}</h2>
              <p>{detailInfo.description}</p>
              <img
                src={detailInfo.img}
                alt={detailInfo.headerTitle}
                className="img-thumbnail img-fluid"
              />
            </div>
            <div
              class="tab-pane fade"
              id="reviews"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
                {
                    reviews.map(el => {
                        return <ReviewCard data={el} key={el.id} />
                    })
                }
            </div>
            <div
              class="tab-pane fade mt-5"
              id="map"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <iframe
                src={detailInfo.maps}
                style={{
                  border: "0",
                  height: "28rem",
                  width: "100%",
                  frameborder: "0"
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Details;
