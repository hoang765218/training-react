import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = (e) => {
    alert("Hello Cybersoft");
  };
  showMess = (name) => {
    alert(`Hello ${name}`);
  };
  render() {
    return (
      <div className="container">
        <button
          id="btnClick"
          onClick={(e) => {
            alert("Hello cybersoft");
          }}
        >
          Click me
        </button>
        <button
          className="btn btn-primary ml-2"
          onClick={this.handleClick} // Gần giống nhau sẽ chạy luôn khi gọi hàm mặc dù chưa click
        >
          Click
        </button>
        <hr />
        <h3>Handle click params</h3>
        <button
          onClick={(e) => {
            //Gọi các hàm khác thực thi khi click
            this.showMess("Quân mentor !!!");
          }}
        >
          Show mess
        </button>

        <button
          className="btn btn-primary ml-2"
          onClick={this.showMess.bind(this, "Mentor Quân !!!")} // Gần giống nhau , nhưng . bind sẽ giúp hàm đó chỉ hoạt động khi click dù gọi hàm
        >
          Click
        </button>
      </div>
    );
  }
}
