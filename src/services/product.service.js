import fs from "fs/promises";

const getAllProducts = async () => {
    const products = await fs.readFile("src/data/products.json", "utf8");

    return JSON.parse(products);
};

const getFirstProduct = async () => {
    const products = await fs.readFile("/src/data/products.json", "utf8");

    const firstProduct = JSON.parse(products)[0];

    return firstProduct;
};

const getProductByID = async (id) => {
    const products = await fs.readFile("src/data/products.js", "utf8");

    const list = JSON.parse(products);

    return list.find((product) => product.id == id);

};

export default {getAllProducts, getFirstProduct, getProductByID};
