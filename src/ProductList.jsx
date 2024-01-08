import React, { useEffect, useState } from "react";

import "./ProductList.css";

export default function ProductList() {
  const [productData, setProductData] = useState([]);

  // using array of dependency we stops infinite loop in useEffect hooks
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://s3.amazonaws.com/open-to-cors/assignment.json")
      .then((response) => response.json())
      .then((data) => {
        // Convert object to array of key-value pairs
        const result = Object.entries(data["products"]);

        // Map the array of key-value pairs to an array of objects
        const products = Object.values(result).map((product) => ({
          subcategory: product[1].subcategory,
          title: product[1].title,
          price: product[1].price,
          popularity: product[1].popularity,
        }));
        const sortedData = products.sort((a, b) => b.popularity - a.popularity);
        // console.log(sortedData);
        // Update state with fetched data
        setProductData(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="container">
      {productData.map((product) => (
        <div key={product.title}>
          {/* <p>Subcategory: {product.subcategory}</p> */}
          <p>Title: {product.title}</p>
          <p>Price: {product.price}</p>
          <p>Popularity: {product.popularity}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
