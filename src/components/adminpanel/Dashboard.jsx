import React, { useState, useEffect } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { Layout, Menu, theme } from "antd";
import { FaClipboardList } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const history = useHistory();
  useEffect(() => {
    fetch("http://localhost:5000/api/products/get")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/api/users/getuser")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);
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
            background: colorBgContainer,
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
          <div
            style={{
              background: "rgb(22,119,255)",
              boxShadow: " 0px 0px 8px 1px rgba(0, 0, 0, 0.09)",
              borderRadius: "10px",
              padding: "0.7em",
              height: "5em",
            }}
          >
            <h1 style={{ color: "white" }}>Dashboard</h1>
          </div>
          <div className="d-flex">
            <div className="grid-card">
              <h4>Products</h4>
              <h2>{products.length}</h2>
            </div>
            <div className="grid-card">
              <h4>Users</h4>
              <h2>{users.length}</h2>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
