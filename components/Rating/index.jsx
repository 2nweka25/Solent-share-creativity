import "./Rating.css"
import React from "react";

function Rating(props) {
  const { star, star2, star3, star4, star5, minicaps, className } = props;

  return (
    <div className={`rating-Orh1xz ${className || ""}`}>
      <img className="star-UuKVA9" src={star} />
      <img className="star-Q4P12Q" src={star2} />
      <img className="star-zq32LN" src={star3} />
      <img className="star-JnemaV" src={star4} />
      <img className="star-sgUrvw" src={star5} />
      <div className="x10-sp-caps-xs-medium-UuKVA9">
        <div className="minicaps-x0GJT8 valign-text-middle">{minicaps}</div>
      </div>
    </div>
  );
}

export default Rating;
