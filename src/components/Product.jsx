import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Skeleton from "react-loading-skeleton";
import Header from "./Header";
import Footer from "./Footer";
import { addToCart } from "../slices/cartSlice";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5000/api/products/get/${id}`
      );
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/cart");
  };
  const Loading = () => {
    return (
      <>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={"http://localhost:5000/uploads/" + product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-5">{product.title}</h1>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead"> {product.description}</p>
          <NavLink to="/Cart">
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </button>
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <Header />
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Product;
