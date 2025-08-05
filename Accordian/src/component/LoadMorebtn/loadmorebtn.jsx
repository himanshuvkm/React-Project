import React, { useState, useEffect } from "react";
import "./loadmorebtn.css";
function LoadMore() {
  const [products, setProducts] = useState([]);
  const [err, setErr] = useState(null);
  const [load, setLoad] = useState(false);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchImg() {
    try {
      setLoad(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=14&skip=${
          count === 0 ? 0 : count * 14
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
      }

      setLoad(false);
    } catch (e) {
      setErr(e.message);
      setLoad(false);
    }
  }
  

  useEffect(() => {
    fetchImg();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  return (<div className="load-more-wrapper">
    <div className="title"><h1>Load More Products</h1></div>
    <div className="load-more-container">
      
      {load && <div>Loading data ! Please wait</div>}
      {err && <div className="error-msg">⚠️ Error: {err}</div>}
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div></div>
  );
}
export default LoadMore;
