import React from "react";
import "./style.css";

function Home(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Home;
