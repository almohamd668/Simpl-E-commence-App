import { Link } from "../../node_modules/react-router-dom/dist/index";

import "./Product.css"

const Product = (props) => {
  const { product,showButton } = props;
  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top card-img" alt={product.title} />
        <div className="card-body">
          <h4 className="card-title">{product.title}</h4>
         
          <h5>Price: {product.price}$</h5>
          {showButton ? <Link className="btn btn-primary" to={`product-info/${product.id}`}>info</Link>:<p className="card-title">{product.description}</p> }
        </div>
      </div>
    </>
  );
};

export default Product;
