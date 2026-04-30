import express from "express";
import productController from "../controllers/product.controller.js";
import logger from "../middlewares/logger.js";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ROLE_ADMIN, ROLE_MERCHANT} from "../constants/roles.js"
import validate from "../middlewares/validator.js";
import { productShcema } from "../libs/schemas/product.shcema.js";

const router = express.Router();

router.get("/", productController.getAllProducts);

// Dynamic route (:param)
router.get("/:id", productController.getProductById);

router.post("/", auth, roleBasedAuth(ROLE_MERCHANT),validate(productShcema), productController.createProduct);

router.put("/:id", auth, roleBasedAuth(ROLE_MERCHANT), productController.updateProduct);

router.delete("/:id", auth, roleBasedAuth(ROLE_ADMIN), productController.deleteProduct);

export default router;