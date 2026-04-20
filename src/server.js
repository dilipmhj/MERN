import express from "express";

const app = express();

app.get("/", (request, response) => {
    response.send("Home Page");
});

app.get("/about", (req,res) => {
    res.send("About Page");
});

app.get("/contact", (req,res) => {
    res.send("Contact Panpge");
});

app.post("/contact", (req,res) => {
    res.send("Contact form submitted");
});

app.listen(8000, () => {
    console.log("Server running...");
});