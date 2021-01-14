import "./Footer.css"
import React from "react";

function Footer(props) {
  const {
    title,
    subtitle,
    subtitle2,
    subtitle3,
    subtitle4,
    inputName,
    inputType,
    inputPlaceholder,
    inputRequired,
    subtitle5,
    subtitle6,
    subtitle7,
    send,
    textLabel,
    subtitle8,
  } = props;

  return (
    <div className="footer-4eduM0">
      <div className="auto-flex3-tybepC">
        <div className="auto-flex2-bLWJvS">
          <div className="title-Acup6n border-class-1">{title}</div>
          <a href="https://www.animaapp.com" target="_blank">
            <div className="subtitle-Acup6n border-class-1 lato-bold-oasis-18px">{subtitle}</div>
          </a>
          <a href="https://www.animaapp.com" target="_blank">
            <div className="subtitle-gzbRuy border-class-1 lato-bold-oasis-18px">{subtitle2}</div>
          </a>
          <a href="https://www.animaapp.com" target="_blank">
            <div className="subtitle-iQ3M1B border-class-1 lato-bold-oasis-18px">{subtitle3}</div>
          </a>
        </div>
        <div className="auto-flex-bLWJvS">
          <div className="subtitle-tLrs6f border-class-1 lato-bold-oasis-18px">{subtitle4}</div>
          <div className="overlap-group2-tLrs6f">
            <div className="rectangle-1-1nTYKY"></div>
            <input
              className="subtitle-1nTYKY border-class-1"
              name={inputName}
              placeholder={inputPlaceholder}
              type={inputType}
              required={inputRequired}
            />
          </div>
          <div className="overlap-group3-tLrs6f">
            <a href="https://www.animaapp.com" target="_blank">
              <div className="subtitle-GxSMRH border-class-1 lato-bold-oasis-18px">{subtitle5}</div>
            </a>
            <a href="https://www.animaapp.com" target="_blank">
              <div className="subtitle-FUvGVV border-class-1 lato-bold-oasis-18px">{subtitle6}</div>
            </a>
          </div>
          <a href="https://www.animaapp.com" target="_blank">
            <div className="subtitle-SwcvWr border-class-1 lato-bold-oasis-18px">{subtitle7}</div>
          </a>
        </div>
        <a href="javascript:SubmitForm('form1')">
          <div className="frame-1-bLWJvS smart-layers-pointers ">
            <div className="send-tTN22q border-class-1">{send}</div>
          </div>
        </a>
      </div>
      <div className="auto-flex1-tybepC">
        <div className="textlabel-12Hso3 lato-bold-oasis-18px">{textLabel}</div>
        <a href="https://www.animaapp.com" target="_blank">
          <div className="subtitle-12Hso3 border-class-1 lato-bold-oasis-18px">{subtitle8}</div>
        </a>
      </div>
    </div>
  );
}

export default Footer;
