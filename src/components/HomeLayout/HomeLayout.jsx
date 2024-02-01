import React, { Component } from "react";
import Header from "./Header";
import Navigate from "./Navigate";
import Content from "./Content";

// rcc => react class component
export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="d-flex">
          <div>
            <Navigate />
          </div>
          <div>
            <Content />
          </div>
        </div>
      </div>
    );
  }
}
