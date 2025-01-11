import React, { useState, useEffect } from "react";
import { Table } from "antd";

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

const columns = [
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "title",
    dataIndex: "title",
  },
  {
    title: "price",
    dataIndex: "price",
  },
  {
    title: "description",
    dataIndex: "description",
  },
  {
    title: "image",
    dataIndex: "image",
  },
  {
    title: "category",
    dataIndex: "category",
  },
];

const OrderList = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:5000/api/products/get")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
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
          <Table columns={columns} dataSource={data} />
        </Layout>
      </Layout>
    </div>
  );
};

export default OrderList;
