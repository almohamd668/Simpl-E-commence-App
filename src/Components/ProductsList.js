import { useEffect, useState } from "react";
import Product from "./Product";

const ProductsList = () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  function getData(api = "") {
    let setD;
    api === "categories" ? (setD = setCategories) : (setD = setProducts);

    fetch(`${apiUrl}/${api}`)
      .then((res) => res.json())
      .then((data) => setD(data));
  }

  useEffect(() => {
    getData();
    getData("categories");
  }, []);

  return (
    <>
      <h2 className="text-center">Our Products</h2>
      <button
        onClick={() => {
          getData()
        }}
        className="btn btn-primary m-3"
      >
        All
      </button>
      {categories.map((cat) => {
        return (
          <button
            key={cat}
            onClick={() => {
              getData(`category/${cat}`);
            }}
            className="btn btn-primary m-3"
          >
            {cat}
          </button>
        );
      })}

      <div className="row mb-5">
        {products.map((product) => {
          return (
            <div className="col-3" key={product.id}>
              <Product product={product} showButton={true} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsList;
