// import mysql2 from "mysql2";
// import express from "express";

// const connection = mysql2.createConnection({
//   host: "localhost",
//   database: "five_db",
//   user: "root",
//   password: "12345",
// });
// const app = express();
// const PORT = 8000;
// app.listen(PORT, () => {
//   console.log(`SERVER : http://localhost:${PORT}`);
//   connection.connect((err) => {
//     if (err) throw err;
//     console.log("DATABASE connected");
//   });
// });

// app.use("/all", (req, res) => {
//   const sql_query = `select * from five_table`;
//   connection.query(sql_query, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// app.use("/saveData", (req, res) => {
//   let query = `INSERT INTO five_table
//     (col_1, col_2,col_3) VALUES ?;`;
//   let values = [
//     ["Amit", "Yellow Park", "two"],
//     ["Rishi", "Park 38", "three"],
//     ["Akash", "Central st 954", "four"],
//     ["Pratik", "Road 989", "five"],
//     ["Mangesh", "Sideway", "six"],
//   ];
//   const sql_query = `insert * from five_table`;
//   connection.query(sql_query, [values], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });
