import "./SolentShareCreativityMusic.css"
import {Link} from "react-router-dom"
import React from "react";

function SolentShareCreativityMusic(props) {
  const {
    home,
    musicPage,
    blogs,
    image7,
    colorsBackgroundGradient,
    title,
    search,
    background1,
    title2,
    subtitle,
    musicPage2,
    title3,
    subtitle2,
    register,
    title4,
    video,
    subtitle3,
    background2,
    title5,
    subtitle4,
    subtitle5,
    subtitle6,
    subtitle7,
    inputName,
    inputType,
    inputPlaceholder,
    inputRequired,
    subtitle8,
    subtitle9,
    subtitle10,
    send,
    textLabel,
    subtitle11,
    title6,
    subtitle12,
    image8,
  } = props;

  return (
    <div class="container-center-horizontal">
      <form className="solent-share-creativity-music screen " name="form2" action="form2" method="post">
        <div className="header-C61RwL">
          <div className="x-light-IcPKRJ">
            <div className="home-xng6eV border-class-1 smart-layers-pointers ">{home}</div>
            <Link to="/albums">
              <div className="music-page-xng6eV border-class-1 lato-normal-abbey-18px smart-layers-pointers ">
                {musicPage}
              </div>
            </Link>
            <div className="blogs-xng6eV border-class-1 lato-normal-abbey-18px smart-layers-pointers ">{blogs}</div>
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
          <img className="background1-RH0WJ5" src={background1} />
          <div className="x3rd-comp-RH0WJ5">
            <div className="text-2wBF32">
              <div className="title-w9B5sx border-class-1">{title2}</div>
              <div className="subtitle-w9B5sx border-class-1 lato-normal-abbey-18px">{subtitle}</div>
              <Link to="/albums">
                <div className="cta-w9B5sx smart-layers-pointers ">
                  <div className="rectangle-1-fjm56r"></div>
                  <Link to="/albums" onClick={window.event.stopPropagation()}>
                    <div className="music-page-fjm56r border-class-1">{musicPage2}</div>
                  </Link>
                </div>
              </Link>
            </div>
            <div className="singerimg-2wBF32">
              <iframe
                style="border: 0; pointer-events: auto;"
                id="ytplayer"
                type="text/html"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/sEhfQsurahA?rel=0&mute=1&autoplay=1"
                frameborder="0"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
              ></iframe>
            </div>
          </div>
          <div className="miss-cupcake-RH0WJ5">
            <div className="overlap-group2-KQ9K1W">
              <div className="title-vKQLEC border-class-1">{title3}</div>
              <div className="subtitle-vKQLEC border-class-1 lato-normal-abbey-18px">{subtitle2}</div>
            </div>
            <div className="cta-KQ9K1W smart-layers-pointers ">
              <div className="register-Kl7lyv border-class-1">{register}</div>
            </div>
          </div>
          <div className="title-RH0WJ5 border-class-1">{title4}</div>
          <img className="video-RH0WJ5" src={video} />
          <div className="subtitle-RH0WJ5 border-class-1">{subtitle3}</div>
        </div>
        <div className="overlap-group-C61RwL">
          <img className="background2-4eduM0" src={background2} />
          <div className="footer-4eduM0">
            <div className="auto-flex3-tybepC">
              <div className="auto-flex2-bLWJvS">
                <div className="title-Acup6n border-class-1">{title5}</div>
                <a href="https://www.animaapp.com" target="_blank">
                  <div className="subtitle-Acup6n border-class-1 lato-bold-oasis-18px">{subtitle4}</div>
                </a>
                <a href="https://www.animaapp.com" target="_blank">
                  <div className="subtitle-gzbRuy border-class-1 lato-bold-oasis-18px">{subtitle5}</div>
                </a>
                <a href="https://www.animaapp.com" target="_blank">
                  <div className="subtitle-iQ3M1B border-class-1 lato-bold-oasis-18px">{subtitle6}</div>
                </a>
              </div>
              <div className="auto-flex-bLWJvS">
                <div className="subtitle-tLrs6f border-class-1 lato-bold-oasis-18px">{subtitle7}</div>
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
                    <div className="subtitle-GxSMRH border-class-1 lato-bold-oasis-18px">{subtitle8}</div>
                  </a>
                  <a href="https://www.animaapp.com" target="_blank">
                    <div className="subtitle-FUvGVV border-class-1 lato-bold-oasis-18px">{subtitle9}</div>
                  </a>
                </div>
                <a href="https://www.animaapp.com" target="_blank">
                  <div className="subtitle-SwcvWr border-class-1 lato-bold-oasis-18px">{subtitle10}</div>
                </a>
              </div>
              <a href="javascript:SubmitForm('form2')">
                <div className="frame-1-bLWJvS smart-layers-pointers ">
                  <div className="send-tTN22q border-class-1">{send}</div>
                </div>
              </a>
            </div>
            <div className="auto-flex1-tybepC">
              <div className="textlabel-12Hso3 lato-bold-oasis-18px">{textLabel}</div>
              <a href="https://www.animaapp.com" target="_blank">
                <div className="subtitle-12Hso3 border-class-1 lato-bold-oasis-18px">{subtitle11}</div>
              </a>
            </div>
          </div>
          <div className="title-4eduM0 border-class-1">{title6}</div>
          <div className="subtitle-4eduM0 border-class-1">{subtitle12}</div>
          <img className="image-8-4eduM0" src={image8} />
        </div>
      </form>
    </div>
  );
}

export default SolentShareCreativityMusic;
