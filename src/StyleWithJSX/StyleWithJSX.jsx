import React, { Component } from "react";
// import "../index.css";
import style from "./StyleWithJSX.module.css";

export default class StyleWithJSX extends Component {
  render() {
    return (
      <div className="container">
        <h3>StyleWithJSX</h3>
        <p className="text-red">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          itaque quae. Molestiae ipsam fuga explicabo sed, vitae suscipit porro
          commodi expedita voluptas voluptatem architecto repellendus ex officia
          cupiditate earum maiores?
        </p>
        <h3 className={`p-2 bg-dark text-light ${style["text-blue"]}`}>
          hello frontend 28
        </h3>
        <hr />
        <p
          style={{
            color: "red",
            background: `url(https://picsum.photos/500/500)`,
            height: 500,
          }}
        >
          {" "}
          Hello cybersoft !!!
        </p>
      </div>
    );
  }
}
