import Footer from "../Footer"
import Latesttracks from "../Latesttracks"
import Topgenres from "../Topgenres"
import Rating from "../Rating"
import "./Albums.css"
import {Link} from "react-router-dom"
import React from "react";

function Albums(props) {
  const {
    home,
    musicPage,
    blogs,
    vector,
    image7,
    colorsBackgroundGradient,
    title,
    search,
    text,
    title2,
    background2,
    rectangle8,
    atLeastForNow,
    benjaminClementine,
    rectangle82,
    dreamOn,
    rogerTerry,
    rectangle13,
    playAllShuffled,
    vector2,
    vector3,
    rectangle14,
    addAllToFavs,
    vector4,
    footerProps,
    latesttracksProps,
    topgenresProps,
    ratingProps,
    rating2Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <form className="albums screen " name="form1" action="form1" method="post">
        <div className="header-C61RwL">
          <div className="x-light-IcPKRJ">
            <Link to="/solent-share-creativity-music">
              <div className="home-xng6eV border-class-1 lato-normal-abbey-18px smart-layers-pointers ">{home}</div>
            </Link>
            <div className="music-page-xng6eV border-class-1 smart-layers-pointers ">{musicPage}</div>
            <div className="blogs-xng6eV border-class-1 lato-normal-abbey-18px smart-layers-pointers ">{blogs}</div>
            <div className="cilplus-xng6eV">
              <img className="vector-SVnJYg" src={vector} />
            </div>
          </div>
          <img className="image-7-IcPKRJ" src={image7} />
          <div className="misc-avatar40x40-ab-IcPKRJ">
            <div
              className="colors-bac-d-gradient-VXNvua"
              style={{ backgroundImage: `url(${colorsBackgroundGradient})` }}
            ></div>
            <div className="x20-sp-title-medium-VXNvua">
              <div className="title-4uYf9V valign-text-middle">{title}</div>
            </div>
          </div>
          <img className="search-IcPKRJ" src={search} />
        </div>
        <div className="overlap-group1-C61RwL">
          <div className="text-RH0WJ5 valign-text-middle border-class-1">{text}</div>
          <div className="title-RH0WJ5 border-class-1">{title2}</div>
        </div>
        <div className="overlap-group-C61RwL">
          <img className="background2-4eduM0" src={background2} />
          <Footer {...footerProps} />
          <Latesttracks {...latesttracksProps} />
          <Topgenres {...topgenresProps} />
          <Link to="/player">
            <div className="frame-10-4eduM0">
              <div className="overlap-group4-Orh1xz">
                <img className="rectangle-8-llZiop" src={rectangle8} />
                <div className="frame-3-llZiop">
                  <div className="at-least-for-now-yyDtVX border-class-1">{atLeastForNow}</div>
                  <div className="benjamin-clementine-yyDtVX border-class-1">{benjaminClementine}</div>
                </div>
              </div>
              <Rating
                star={ratingProps.star}
                star2={ratingProps.star2}
                star3={ratingProps.star3}
                star4={ratingProps.star4}
                star5={ratingProps.star5}
                minicaps={ratingProps.minicaps}
              />
            </div>
          </Link>
          <div className="frame-8-4eduM0">
            <div className="overlap-group5-NyxS9z">
              <img className="rectangle-8-gR69Qu" src={rectangle82} />
              <div className="frame-3-gR69Qu">
                <div className="dream-on-ztr1Ek border-class-1">{dreamOn}</div>
                <div className="roger-terry-ztr1Ek border-class-1">{rogerTerry}</div>
              </div>
            </div>
            <Rating
              star={rating2Props.star}
              star2={rating2Props.star2}
              star3={rating2Props.star3}
              star4={rating2Props.star4}
              star5={rating2Props.star5}
              minicaps={rating2Props.minicaps}
              className="rating-NyxS9z"
            />
          </div>
          <div className="group-1253-4eduM0 smart-layers-pointers ">
            <img className="rectangle-13-RmKyEf" src={rectangle13} />
            <div className="play-all-shuffled-RmKyEf valign-text-middle border-class-1">{playAllShuffled}</div>
            <div className="x102-shuffle-1-RmKyEf">
              <img className="vector-a2xx1T" src={vector2} />
              <img className="vector-JTw8zN" src={vector3} />
            </div>
          </div>
          <div className="group-1253-BJQsbv smart-layers-pointers ">
            <img className="rectangle-14-AIJoEv" src={rectangle14} />
            <div className="add-all-to-favs-AIJoEv valign-text-middle border-class-1">{addAllToFavs}</div>
            <div className="x002-add-button-1-AIJoEv">
              <img className="vector-xzuXZA" src={vector4} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Albums;
