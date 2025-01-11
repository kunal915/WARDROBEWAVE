const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
require("dotenv").config();

connectDb();

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/uploads/", express.static("uploads"));
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productsRoutes"));
app.use("/api/contents", require("./routes/contentRoutes"));
app.use("/api/image-upload", require("./routes/image.route"));
app.use("/api/avatar-upload", require("./routes/AvatareRoutes"));
app.use(`/api/orders`, require("./routes/orderRoutes"));

app.listen(port, () => {
  console.log(`server running on the port ${port}`);
});
