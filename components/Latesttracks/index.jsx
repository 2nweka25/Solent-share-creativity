import ArrowChevronbigleft from "../ArrowChevronbigleft"
import ArrowChevronbigright from "../ArrowChevronbigright"
import Frame1 from "../Frame1"
import "./Latesttracks.css"
import React from "react";

function Latesttracks(props) {
  const {
    latestTracksAdded,
    rectangle12,
    dreamOn,
    rogerTerry,
    rectangle122,
    chaffDust,
    hyonna,
    rectangle123,
    believer,
    imagineDragon,
    rectangle124,
    arrowChevronbigleftProps,
    arrowChevronbigrightProps,
    frame1Props,
  } = props;

  return (
    <div className="latest-tracks-4eduM0">
      <div className="latest-tracks-added-3qpAIQ valign-text-middle border-class-1">{latestTracksAdded}</div>
      <div className="auto-flex6-3qpAIQ">
        <div className="frame-10-Fh7nUm smart-layers-pointers ">
          <img className="rectangle-12-ahIjTr" src={rectangle12} />
          <div className="frame-1-ahIjTr">
            <div className="dream-on-XXlQXL border-class-1 wendyone-normal-white-20px">{dreamOn}</div>
            <div className="roger-terry-XXlQXL border-class-1 wendyone-normal-stack-14px">{rogerTerry}</div>
          </div>
        </div>
        <div className="auto-flex5-Fh7nUm">
          <div className="frame-10-tIrUBe smart-layers-pointers ">
            <img className="rectangle-12-iIYd5q" src={rectangle122} />
            <div className="frame-1-iIYd5q">
              <div className="chaff-dust-OYcg2P border-class-1 wendyone-normal-white-20px">{chaffDust}</div>
              <div className="hyonna-OYcg2P border-class-1 wendyone-normal-stack-14px">{hyonna}</div>
            </div>
          </div>
          <ArrowChevronbigleft arrowChevronBigLeft={arrowChevronbigleftProps.arrowChevronBigLeft} />
        </div>
        <div className="auto-flex4-Fh7nUm">
          <div className="frame-10-IxGhfg smart-layers-pointers ">
            <img className="rectangle-12-wz3uof" src={rectangle123} />
            <div className="frame-1-wz3uof">
              <div className="believer-FxRuPw border-class-1 wendyone-normal-white-20px">{believer}</div>
              <div className="imagine-dragon-FxRuPw border-class-1 wendyone-normal-stack-14px">{imagineDragon}</div>
            </div>
          </div>
          <ArrowChevronbigright arrowChevronBigRight={arrowChevronbigrightProps.arrowChevronBigRight} />
        </div>
        <div className="frame-11-Fh7nUm smart-layers-pointers ">
          <img className="rectangle-12-B7WdcB" src={rectangle124} />
          <Frame1 rejoice={frame1Props.rejoice} tonyAllenHughMas={frame1Props.tonyAllenHughMas} />
        </div>
      </div>
    </div>
  );
}

export default Latesttracks;
