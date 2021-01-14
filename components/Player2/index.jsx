import "./Player2.css"
import {Link} from "react-router-dom"
import React from "react";

function Player2(props) {
  const {
    rectangle8,
    ellipse1,
    polygon1,
    ellipse3,
    polygon2,
    ellipse32,
    polygon22,
    dreamOn,
    rogerTerry,
    x102,
    rectangle9,
    ellipse4,
    nowPlaying,
    ellipse5,
    ellipse6,
    ellipse7,
    vector,
    vector348,
    maskGroup,
  } = props;

  return (
    <div className="player2 screen ">
      <div className="overlap-group-C61RwL">
        <div className="rectangle-8-4eduM0"></div>
        <div className="rectangle-2-4eduM0"></div>
        <img className="rectangle-8-BJQsbv" src={rectangle8} />
        <img className="ellipse-1-4eduM0" src={ellipse1} />
        <img className="polygon-1-4eduM0" src={polygon1} />
        <img className="ellipse-3-4eduM0" src={ellipse3} />
        <img className="polygon-2-4eduM0" src={polygon2} />
        <div className="rectangle-4-4eduM0"></div>
        <img className="ellipse-3-BJQsbv" src={ellipse32} />
        <img className="polygon-2-BJQsbv" src={polygon22} />
        <div className="rectangle-4-BJQsbv"></div>
        <div className="dream-on-4eduM0 valign-text-middle border-class-1">{dreamOn}</div>
        <div className="roger-terry-4eduM0 valign-text-middle border-class-1">{rogerTerry}</div>
        <div className="x102-4eduM0 border-class-1">{x102}</div>
        <div className="rectangle-5-4eduM0"></div>
        <img className="rectangle-9-4eduM0" src={rectangle9} />
        <div className="rectangle-6-4eduM0"></div>
        <img className="ellipse-4-4eduM0" src={ellipse4} />
        <div className="now-playing-4eduM0 valign-text-middle border-class-1">{nowPlaying}</div>
        <img className="ellipse-5-4eduM0" src={ellipse5} />
        <img className="ellipse-6-4eduM0" src={ellipse6} />
        <img className="ellipse-7-4eduM0" src={ellipse7} />
        <div className="arrow-right-4eduM0">
          <img className="vector-9j9QVG" src={vector} />
        </div>
        <a href="javascript:ShowOverlay('heart', 'animate-appear');">
          <div className="heart-4eduM0">
            <img className="vector-348-KrkQLj" src={vector348} />
          </div>
        </a>
      </div>
      <img className="mask-group-C61RwL" src={maskGroup} />
    </div>
  );
}

export default Player2;
