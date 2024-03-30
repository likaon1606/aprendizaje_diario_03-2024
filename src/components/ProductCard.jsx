import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product">
      <div
        className="left"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className="right">
        <h5>{product.name}</h5>
        <p>{product.description}</p>
        <p>
          <span className="span">Categoría: </span>
          {product.category}
        </p>
        <p>
          <span className="span">Precio: </span>${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
