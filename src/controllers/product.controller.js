import productService from "../services/product.service.js";

const getAllProducts = async (req, res) => {
 // const cookie = req.headers.cookie;
 // console.log(cookie);

  //const token = cookie.split("=")[1];

  //console.log(token);

  const products = await productService.getAllProducts();

  res.json(products);
};

const getProductById = async (req, res) => {
  const id = req.params.id;

  const product = await productService.getProductById(id);

  if (!product) return res.status(404).json({ message: "Product not found." });

  res.json(product);
};

const createProduct = async (req, res) => {
  const userId=req.user._id;
  try {
    const product = await productService.createProduct(req.body, userId);

    res.json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const input = req.body;

  try {
    const product = await productService.updateProduct(id, input);

    res.json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    await productService.deleteProduct(id);

    res.json({
      message: "Product deleted successfully.",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};