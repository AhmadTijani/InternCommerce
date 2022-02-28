import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getDoc, doc } from "firebase/firestore";
import fireDB from "../fireConfig";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

function ProductInfo() {
  const [product, setProduct] = useState();
  const params = useParams();
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const productDetails = await getDoc(
        doc(fireDB, "products", params.productid)
      );
      // console.log(productDetails.data());
      setProduct(productDetails.data());
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Layout>
      <div className="container">
        {/* <h1>product Info</h1> */}
        {product && (
          <div className="info">
            <h1>
              <b>{product.title}</b>
            </h1>
            <img src={product.imgURL} className="productinfo-img" />
            <hr />
            <p>{product.desc}</p>
            <div className="d-flex justify-content-end mg-3">
              <button onClick={() => addToCart(product)}>ADD TO CART</button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
export default ProductInfo;
