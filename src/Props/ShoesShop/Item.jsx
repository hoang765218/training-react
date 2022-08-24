import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { prod } = this.props;
    return (
      <div>
        <div className="card">
          <img src={prod.image} alt="..." height={300} />
          <div className="card-body">
            <h3 style={{ height: 75 }}>{prod.name}</h3>
            <p style={{ height: 30 }}>{prod.price} $</p>
            <button className="btn btn-dark text-white">Add to carts</button>
          </div>
        </div>
      </div>
    );
  }
}
