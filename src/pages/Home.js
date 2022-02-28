import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { collection, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
import { productsData } from "../Data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const [products, setProducts] = useState([]);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const users = await getDocs(collection(fireDB, "products"));
      const productsArray = [];
      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        productsArray.push(obj);
      });
      setProducts(productsArray);
    } catch (error) {
      console.log(error);
    }
  }

  //To add products to FireBase
  // function addProductsData() {
  //   productsData.map(async (product) => {
  //     try {
  //       await addDoc(collection(fireDB, "products"), product);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });
  // }
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-4">
                <div className="m-2 p-1 product">
                  <div className="product-con">
                    <div className="text-center">
                      <img
                        src={product.imgURL}
                        alt=""
                        className="product-img"
                      />
                    </div>
                    <p>{product.title}</p>
                    <h5>{product.price}</h5>
                  </div>
                  <div className="product-actions">
                    <div className="d-flex">
                      <button onClick={() => addToCart(product)}>
                        Add To Cart
                      </button>
                      <button
                        onClick={() => {
                          navigate(`/productinfo/${product.id}`);
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <button onClick={addProductsData}> Add Product</button> */}
    </Layout>
  );
}

export default Home;
