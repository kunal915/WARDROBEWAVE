import React, { useState, useEffect } from "react";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { Layout, Menu } from "antd";
import { FaClipboardList } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const { Header, Sider } = Layout;

const ProductList = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch("http://localhost:5000/api/products/get")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
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
              defaultSelectedKeys={[""]}
              onClick={({ key }) => {
                if (key === "signout") {
                  // Handle signout logic here
                } else {
                  history.push(key);
                }
              }}
              items={[
                {
                  key: "",
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
          <div style={{ margin: "4em" }}>
            <h1>User Data</h1>
            <div class="tbl-header">
              <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Category</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="tbl-content">
              <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  {data.map((data) => (
                    <tr key={data.id}>
                      <td>{data.title}</td>
                      <td>{data.price}</td>
                      <td>{data.description}</td>
                      <td>{data.image}</td>
                      <td>{data.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>{" "}
        </Layout>
      </Layout>
    </div>
  );
};

export default ProductList;
