import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import CustomDesign from "./components/CustomDesign";
import PatternsDesign from "./components/PatternsDesign";
import Products from "./components/Products";
import Product from "./components/Product";
import DashboardLayout from "./components/DashboardLayout"; // Import the DashboardLayout component
import ContentEditor from "./components/ContentEditor/ContentEditor";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/buttons/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Switch>
          {/* Home-related routes */}
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/CustomDesign/:type" component={CustomDesign} />
          <Route exact path="/PatternsDesign" component={PatternsDesign} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/Products/:id" component={Product} />
          <Route exact path="/Contenteditor" component={ContentEditor} />
          <Route path="/dashboard" component={DashboardLayout} />
          <Route path="/login" component={Login} />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
