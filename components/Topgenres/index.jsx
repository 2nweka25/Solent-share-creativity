import Frame1 from "../Frame1"
import ArrowChevronbigleft2 from "../ArrowChevronbigleft2"
import ArrowChevronbigright2 from "../ArrowChevronbigright2"
import "./Topgenres.css"
import React from "react";

function Topgenres(props) {
  const {
    topGenres,
    rectangle12,
    theSlowRush,
    tameImpala,
    rectangle122,
    rectangle123,
    jazz,
    benjaminClementine,
    rectangle124,
    minimal,
    benjaminClementine2,
    frame1Props,
    arrowChevronbigleft2Props,
    arrowChevronbigright2Props,
  } = props;

  return (
    <div className="top-genres-4eduM0">
      <div className="auto-flex8-0UhoSn">
        <div className="auto-flex7-MVIQEK">
          <div className="top-genres-W9gGPL valign-text-middle border-class-1">{topGenres}</div>
          <div className="frame-2-W9gGPL smart-layers-pointers ">
            <img className="rectangle-12-HAfyqM" src={rectangle12} />
            <div className="frame-1-HAfyqM">
              <div className="the-slow-rush-CR6QBY border-class-1 wendyone-normal-white-20px">{theSlowRush}</div>
              <div className="tame-impala-CR6QBY border-class-1 wendyone-normal-stack-14px">{tameImpala}</div>
            </div>
          </div>
        </div>
        <div className="frame-5-MVIQEK smart-layers-pointers ">
          <img className="rectangle-12-spFrKx" src={rectangle122} />
          <Frame1
            rejoice={frame1Props.rejoice}
            tonyAllenHughMas={frame1Props.tonyAllenHughMas}
            className="frame-1-spFrKx"
          />
        </div>
        <div className="frame-7-MVIQEK smart-layers-pointers ">
          <img className="rectangle-12-wkQhJn" src={rectangle123} />
          <div className="frame-1-wkQhJn">
            <div className="jazz-TxM8VD border-class-1 wendyone-normal-white-20px">{jazz}</div>
            <div className="benjamin-clementine-TxM8VD border-class-1 wendyone-normal-stack-14px">
              {benjaminClementine}
            </div>
          </div>
        </div>
        <div className="frame-6-MVIQEK smart-layers-pointers ">
          <img className="rectangle-12-3qiD0e" src={rectangle124} />
          <div className="frame-1-3qiD0e">
            <div className="minimal-fzavzt border-class-1 wendyone-normal-white-20px">{minimal}</div>
            <div className="benjamin-clementine-fzavzt border-class-1 wendyone-normal-stack-14px">
              {benjaminClementine2}
            </div>
          </div>
        </div>
      </div>
      <div className="auto-flex9-0UhoSn">
        <ArrowChevronbigleft2 arrowChevronBigLeft={arrowChevronbigleft2Props.arrowChevronBigLeft} />
        <ArrowChevronbigright2 arrowChevronBigRight={arrowChevronbigright2Props.arrowChevronBigRight} />
      </div>
    </div>
  );
}

export default Topgenres;
