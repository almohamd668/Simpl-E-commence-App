import { useEffect, useState } from "react";
import Product from './Product';

const ProductsList = () => {

  const apiUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  function getData(api="") {
    let setd ;
    api === "" ? setd = setProducts :setd = setCategories;

    fetch(`${apiUrl}/${api}`)
    .then((res) => res.json())
    .then((data) => setd(data))
  }
  
  useEffect(() => {
    getData();
    getData("categories");
  }, []);


  return (
    <>
      <h2 className="text-center">Our Products</h2>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-3" key={product.id}>
            <Product product={product} showButton={true} />
             <h1>{product.id}</h1>
          </div>
          );
        } )}
      
       
      </div>
    </>
  );
};

export default ProductsList;
