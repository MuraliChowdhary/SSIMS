const express = require("express");
const app = express();
app.use(express.json());
const userRoutes = require("./userRoutes");
const adminRoutes = require("./AdminRoutes");
const inventoryRoutes = require("./InventoryRoutes");
const orderRoutes = require("./OrderRoutes");
const SupplierRoutes = require("./SupplierRoutes");
const salesRoutes = require("./SalesRoutes");
const Notification = require("./Notification");
const products = require("./products");

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.use("/products", products);
app.use("/inventory", inventoryRoutes);
app.use("/orderRoutes", orderRoutes);
app.use("/SupplierRoutes", SupplierRoutes);
// app.use("/Analytics",AnalyticsRoutes)
app.use("/sales", salesRoutes);
app.use("/Notification", Notification);

module.exports = app;
