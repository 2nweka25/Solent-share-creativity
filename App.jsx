import Albums from "./components/Albums"
import SolentShareCreativityMusic from "./components/SolentShareCreativityMusic"
import Player from "./components/Player"
import Heart from "./components/Heart"
import Player2 from "./components/Player2"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import React from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="./albums">
          <Albums {...AlbumsData} />
        </Route>
        <Route path="/:path(|solent-share-creativity-music)">
          <SolentShareCreativityMusic {...solentShareCreativityMusicData} />
        </Route>
        <Route path="./player">
          <Player {...playerData} />
        </Route>
        <Route path="./heart">
          <Heart />
        </Route>
        <Route path="./player2">
          <Player2 {...player2Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const footerData = {
    title: "solent share creativity",
    subtitle: "Solent",
    subtitle2: "Our story",
    subtitle3: "Why SSE",
    subtitle4: "update straight to up your Inbox",
    inputName: "subtitle13",
    inputType: "email",
    inputPlaceholder: "Email address",
    inputRequired: false,
    subtitle5: "Privacy policy",
    subtitle6: "Cookies policy",
    subtitle7: "Terms of use",
    send: "SEND",
    textLabel: "©",
    subtitle8: "Ndesign 2020",
};

const arrowChevronbigleftData = {
    arrowChevronBigLeft: "/img/arrow---chevron-big-left@2x.svg",
};

const arrowChevronbigrightData = {
    arrowChevronBigRight: "/img/arrow---chevron-big-right@2x.svg",
};

const frame1Data = {
    rejoice: "Rejoice",
    tonyAllenHughMas: "Tony Allen, Hugh Mas...",
};

const latesttracksData = {
    latestTracksAdded: "latest tracks added",
    rectangle12: "/img/rectangle-12@2x.png",
    dreamOn: "Dream On",
    rogerTerry: "Roger Terry",
    rectangle122: "/img/rectangle-12@2x.jpg",
    chaffDust: "Chaff & Dust",
    hyonna: "HYONNA",
    rectangle123: "/img/rectangle-12-1@2x.png",
    believer: "Believer",
    imagineDragon: "Imagine Dragon",
    rectangle124: "/img/rectangle-12@2x.svg",
    arrowChevronbigleftProps: arrowChevronbigleftData,
    arrowChevronbigrightProps: arrowChevronbigrightData,
    frame1Props: frame1Data,
};

const frame12Data = {
    rejoice: "Rejoice",
    tonyAllenHughMas: "Tony Allen, Hugh Mas...",
};

const arrowChevronbigleft2Data = {
    arrowChevronBigLeft: "/img/arrow---chevron-big-left@2x.svg",
};

const arrowChevronbigright2Data = {
    arrowChevronBigRight: "/img/arrow---chevron-big-right@2x.svg",
};

const topgenresData = {
    topGenres: "Top Genres",
    rectangle12: "/img/rectangle-12-1@2x.svg",
    theSlowRush: "The Slow Rush",
    tameImpala: "Tame Impala",
    rectangle122: "/img/rectangle-12@2x.svg",
    rectangle123: "/img/rectangle-12-1@2x.jpg",
    jazz: "Jazz",
    benjaminClementine: "Benjamin Clementine",
    rectangle124: "/img/rectangle-12-2@2x.svg",
    minimal: "Minimal",
    benjaminClementine2: "Benjamin Clementine",
    frame1Props: frame12Data,
    arrowChevronbigleft2Props: arrowChevronbigleft2Data,
    arrowChevronbigright2Props: arrowChevronbigright2Data,
};

const ratingData = {
    star: "/img/star@2x.svg",
    star2: "/img/star-1@2x.svg",
    star3: "/img/star-1@2x.svg",
    star4: "/img/star-3@2x.svg",
    star5: "/img/star-4@2x.svg",
    minicaps: "12345",
};

const rating2Data = {
    star: "/img/star-5@2x.svg",
    star2: "/img/star-6@2x.svg",
    star3: "/img/star-6@2x.svg",
    star4: "/img/star-8@2x.svg",
    star5: "/img/star-9@2x.svg",
    minicaps: "12345",
};

const AlbumsData = {
    home: "Home",
    musicPage: "Music page",
    blogs: "Blogs",
    vector: "/img/vector@2x.svg",
    image7: "/img/image-7@2x.jpg",
    colorsBackgroundGradient: "/img/bg-gradient@2x.svg",
    title: "NA",
    search: "/img/search@2x.svg",
    text: "",
    title2: "Recommended for you",
    background2: "/img/background2-1@1x.svg",
    rectangle8: "/img/rectangle-8@2x.svg",
    atLeastForNow: "At Least For Now",
    benjaminClementine: "Benjamin Clementine",
    rectangle82: "/img/rectangle-8@2x.png",
    dreamOn: "Dream On",
    rogerTerry: "Roger Terry",
    rectangle13: "/img/rectangle-13@2x.svg",
    playAllShuffled: <>Play all<br/>Shuffled</>,
    vector2: "/img/vector-1@2x.svg",
    vector3: "/img/vector-2@2x.svg",
    rectangle14: "/img/rectangle-14@2x.svg",
    addAllToFavs: <>Add all<br/>to favs.</>,
    vector4: "/img/vector-3@2x.svg",
    footerProps: footerData,
    latesttracksProps: latesttracksData,
    topgenresProps: topgenresData,
    ratingProps: ratingData,
    rating2Props: rating2Data,
};

const solentShareCreativityMusicData = {
    home: "Home",
    musicPage: "Music page",
    blogs: "Blogs",
    image7: "/img/image-7@2x.jpg",
    colorsBackgroundGradient: "/img/bg-gradient@2x.svg",
    title: "NA",
    search: "/img/search@2x.svg",
    background1: "/img/background1@1x.svg",
    title2: "The musical one",
    subtitle: "If your a musical student or just love listening to music, why not listen to some songs your fellow students have produced or  add a music you made yourself.",
    musicPage2: "MUSIC PAGE",
    title3: "Share your Ideas",
    subtitle2: "We are proud to offer you a chance to share your work and recieve feedback and opportunities",
    register: "Register",
    title4: "Celebrating the little things",
    video: "/img/video@1x.jpg",
    subtitle3: <>We believe in celebrating the little things, working hard and supporting one another. We work on creating a caring community through sharing. <br/><br/>We are committed to building a social environment where we can all learn,<br/>grow and be our best selves.</>,
    background2: "/img/background2@1x.svg",
    title5: "solent share creativity",
    subtitle4: "Solent",
    subtitle5: "Our story",
    subtitle6: "Why SSE",
    subtitle7: "update straight to up your Inbox",
    inputName: "subtitle131",
    inputType: "email",
    inputPlaceholder: "Email address",
    inputRequired: false,
    subtitle8: "Privacy policy",
    subtitle9: "Cookies policy",
    subtitle10: "Terms of use",
    send: "SEND",
    textLabel: "©",
    subtitle11: "Ndesign 2020",
    title6: "Read/Add a story or Blog",
    subtitle12: "If your a musical student or just love listening to music, why not listen to some songs your fellow students have produced or  add a music you made yourself.",
    image8: "/img/image-8@1x.jpg",
};

const playerData = {
    rectangle8: "/img/rectangle-8-1@1x.svg",
    ellipse1: "/img/ellipse-1@2x.svg",
    polygon1: "/img/polygon-1@2x.svg",
    ellipse3: "/img/ellipse-3@2x.svg",
    polygon2: "/img/polygon-2@2x.svg",
    ellipse32: "/img/ellipse-3-1@2x.svg",
    polygon22: "/img/polygon-2-1@2x.svg",
    borderline: "Borderline",
    tameImpala: "Tame Impala",
    x102: "1:02",
    rectangle9: "/img/rectangle-9@2x.svg",
    ellipse4: "/img/ellipse-4@2x.svg",
    nowPlaying: "Now playing",
    ellipse5: "/img/ellipse-5@2x.svg",
    ellipse6: "/img/ellipse-5@2x.svg",
    ellipse7: "/img/ellipse-5@2x.svg",
    vector: "/img/vector-4@2x.svg",
    vector348: "/img/vector-348@2x.svg",
    maskGroup: "/img/mask-group@1x.svg",
};

const player2Data = {
    rectangle8: "/img/rectangle-8@1x.png",
    ellipse1: "/img/ellipse-1@2x.svg",
    polygon1: "/img/polygon-1@2x.svg",
    ellipse3: "/img/ellipse-3@2x.svg",
    polygon2: "/img/polygon-2@2x.svg",
    ellipse32: "/img/ellipse-3-1@2x.svg",
    polygon22: "/img/polygon-2-1@2x.svg",
    dreamOn: "Dream On",
    rogerTerry: "Roger Terry",
    x102: "1:02",
    rectangle9: "/img/rectangle-9@2x.svg",
    ellipse4: "/img/ellipse-4@2x.svg",
    nowPlaying: "Now playing",
    ellipse5: "/img/ellipse-5@2x.svg",
    ellipse6: "/img/ellipse-5@2x.svg",
    ellipse7: "/img/ellipse-5@2x.svg",
    vector: "/img/vector@2x.svg",
    vector348: "/img/vector-348@2x.svg",
    maskGroup: "/img/mask-group@1x.svg",
};

