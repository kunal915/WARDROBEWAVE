// Create a new file: DashboardLayout.js

import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../components/adminpanel/Dashboard";
import ProductList from "../components/adminpanel/product/ProductList";
import JoinProduct from "../components/adminpanel/product/JoinProduct";
import OrderList from "../components/adminpanel/product/OrderList";
import UsersList from "../components/adminpanel/product/UsersList";
import Orders from "./adminpanel/product/Orders";

const DashboardLayout = () => {
  return (
    <>
      {/* Your dashboard-related routes */}
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/productlist" component={ProductList} />
        <Route exact path="/dashboard/product" component={JoinProduct} />
        <Route exact path="/dashboard/orderlist" component={OrderList} />
        <Route exact path="/dashboard/users" component={UsersList} />
        <Route exact path="/dashboard/Orders" component={Orders} /> 
        <Route exact path="/dashboard/OrderList" component={OrderList} /> 

      </Switch>
    </>
  );
};

export default DashboardLayout;
