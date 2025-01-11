import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { Layout, Menu } from "antd";
import { FaClipboardList } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const JoinProduct = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  const [imageadd, setimageadd] = useState();

  let name, value;
  const handelChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setProduct({ ...product, [name]: value });
  };

  const ImageUpload = async () => {
    var formdata = new FormData();
    formdata.append("image", imageadd);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    const res = await fetch(
      "http://localhost:5000/api/image-upload",
      requestOptions
    );
    const data = await res.json();
    // console.log(data.image.filename)
    ProductData(data.image.filename);
  };
  const ProductData = async (filename) => {
    // e.preventDefault();
    const { title, price, description, category } = product;

    const res = await fetch("http://localhost:5000/api/products/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        price: price,
        description: description,
        image: filename,
        category: category,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid");
      console.log("Invalid");
    } else {
      window.alert(" Product Added successfull");
      console.log("Product Added successfull");
    }
  };
  const history = useHistory();

  return (
    <Layout>
      <div className="side">
        <Sider
          className="side-bar"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["/dashboard"]}
            onClick={({ key }) => {
              if (key === "signout") {
                // Handle signout logic here
              } else {
                history.push(key);
              }
            }}
            items={[
              {
                key: "/dashboard",
                icon: <AiOutlineDashboard className="fs-4" />,
                label: "Dashboard",
              },
              {
                key: "/dashboard/Users",
                icon: <AiOutlineUser className="fs-4" />,
                label: "Users",
              },
              {
                key: "Catalog",
                icon: <AiOutlineShoppingCart className="fs-4" />,
                label: "Catalog",
                children: [
                  {
                    key: "/dashboard/product",
                    icon: <AiOutlineShoppingCart className="fs-4" />,
                    label: "Add Product",
                  },
                  {
                    key: "/dashboard/productlist",
                    icon: <AiOutlineShoppingCart className="fs-4" />,
                    label: "Product List",
                  },
                ],
              },
              {
                key: "/dashboard/Orders",
                icon: <AiOutlineShoppingCart className="fs-4" />,
                label: "Order",
                children: [
                  {
                    key: "/dashboard/Orders",
                    icon: <AiOutlineShoppingCart className="fs-4" />,
                    label: "Orders",
                  },
                  {
                    key: "/dashboard/Orderlist",
                    icon: <FaClipboardList className="fs-4" />,
                    label: "OrderList",
                  },
                ],
              },
            ]}
          />
        </Sider>
      </div>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "2px 10px",
            padding: 20,
            minHeight: 280,
            maxHeight: "auto",
          }}
        >
          <h3 className="mb-4">Add Product</h3>
          <div>
            <form method="POST">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  className="form-control"
                  type="title"
                  id="title"
                  name="title"
                  value={product.title}
                  onChange={handelChange}
                  placeholder="Enter Title"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  price
                </label>
                <br />
                <input
                  className="form-control"
                  type="price"
                  id="price"
                  name="price"
                  value={product.price}
                  onChange={handelChange}
                  placeholder="Enter Price"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description " className="form-label">
                  Description
                </label>
                <br />
                <input
                  className="form-control"
                  type="description "
                  id="description  "
                  name="description"
                  value={product.description}
                  onChange={handelChange}
                  placeholder="Enter description "
                />
              </div>
              <div className="mb-3">
                <label htmlFor="file" className="form-label">
                  Image
                </label>
                <br />
                <input
                  className="form-control"
                  type="file"
                  id="file"
                  name="image"
                  //  value={product.image}
                  onChange={(e) => {
                    // console.log(e.target.files[0])
                    setimageadd(e.target.files[0]);
                  }}
                  placeholder="Enter image"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  category
                </label>
                <br />
                <input
                  className="form-control"
                  type="category"
                  id="category"
                  name="category"
                  value={product.category}
                  onChange={handelChange}
                  placeholder="Enter category"
                />
              </div>
              <div className="form-group form button">
                <input
                  type="button"
                  name="Addproduct"
                  id="Addproduct"
                  className="form-submit btn"
                  value="Addproduct"
                  onClick={ImageUpload}
                />
              </div>
            </form>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default JoinProduct;
