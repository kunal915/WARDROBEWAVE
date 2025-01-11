import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const Products = (props) => {
  const [data, setData] = useState([]);
  const [filter, setfilter] = useState([data]);
  const [loading, setLoading] = useState([false]);
  let componentMounted = true;

  useEffect(() => {
    const getproducts = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/products/get");
      if (componentMounted) {
        setData(await response.clone().json());
        setfilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getproducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  useEffect(() => {
    if (props.filtertype != undefined || props.filtertype != null) {
      filterProduct(props.filtertype);
    }
  });
  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setfilter(updateList);
  };
  const ShowProducts = () => {
    return (
      <>
        {filter.map((Product) => {
          return (
            <>
              <div class=" col-md-3  mb-4">
                <div class="shadow-lg p- text-center h-100  " key={Product.id}>
                  <img
                    src={"http://localhost:5000/uploads/" + Product.image}
                    style={{ width: "50%" }}
                    class="card-img-top "
                    alt={Product.title}
                    height="250px"
                  />
                  <h4 class=" card-title mb-0 my-3">
                    {Product.title.substring(0, 12)}
                  </h4>
                  <p className="card-text">${Product.price}</p>
                  <NavLink
                    to={`/Products/${Product._id}`}
                    class="btn mb-2"
                    style={{
                      width: "10em",
                      backgroundColor: "#1a73e8",
                      color: "white",
                    }}
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </>
  );
};
export default Products;
