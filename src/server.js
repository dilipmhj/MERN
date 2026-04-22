import express from "express";

import config from "./config/config.js";
import productRoute from "./routes/product.route.js";

const app = express();

app.get("/", (request, response) => {
    response.send("Home Page");
});

app.get("/about", (req,res) => {
    res.send("About Page");
});

app.get("/contact", (req,res) => {
    res.send("Contact Page");
});

app.post("/contact", (req,res) => {
    res.send("Contact form submitted");
});

app.use("/api/products", productRoute);

/** app.get("/products", async(req,res) => {
    const products = await fs.readFile("src/data/products.json", "utf8");

    res.json(JSON.parse(products));
});

app.get("/products/first", async(req, res) => {
    const products = await fs.readFile("src/data/products.json", "utf8");

    const firstProduct = JSON.parse(products)[0];

    res.json(firstProduct);
}); */

app.listen(config.port, () => {
    console.log('Server running at port ${config.port}...');
});