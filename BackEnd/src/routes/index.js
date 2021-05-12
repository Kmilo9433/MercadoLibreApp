import { Router } from "express";
import { getAllProducts, getProductById } from "../controllers";

const router = Router();

router.get("/api/items", getAllProducts);
router.get("/api/items/:id", getProductById);

export default router;
