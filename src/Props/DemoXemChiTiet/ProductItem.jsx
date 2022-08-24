import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    //this.props.product
    let { product, xemChiTiet } = this.props;
    return (
      <div className="card">
        <img src={product.hinhAnh} alt="..." height={400} />
        <div className="card-body">
          <h3>{product.tenSP}</h3>
          <h3>{product.giaBan}</h3>
          <button
            className="btn btn-success"
            onClick={() => {
              xemChiTiet(product);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
