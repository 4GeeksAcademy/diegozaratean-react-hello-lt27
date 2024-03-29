//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Player from "./component/player.jsx";
import Counter from "./component/counter.jsx";

//render your react application
ReactDOM.render(<Player />, document.querySelector("#app"));
