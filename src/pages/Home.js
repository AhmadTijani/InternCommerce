import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { collection, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
import { productsData } from "../Data";

function Home() {
  const [products, setProducts] = useState([]);

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
                      <button>Add To Cart</button>
                      <button>View</button>
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
