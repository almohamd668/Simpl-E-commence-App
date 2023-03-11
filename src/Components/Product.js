import { Link } from "../../node_modules/react-router-dom/dist/index";



const Product = (props) => {
  const { product,showButton } = props;
  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <h4>Price: {product.price}$</h4>
          {showButton && <Link className="btn btn-primary" to={`product-info/${product.id}`}>info</Link>}
        </div>
      </div>
    </>
  );
};

export default Product;
