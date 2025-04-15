import exprsee from "express";
import {
  addToCart,
  removeFromCart,
  getCart,
} from "../controllers/cartController.js";

import authMiddelWare from "../Middelware/auth.js";

const cartRouter = exprsee.Router();

// cartRouter.post("/add", authMiddelWare, addToCart);
cartRouter.post("/add", authMiddelWare, addToCart);
cartRouter.post("/remove", authMiddelWare, removeFromCart);
cartRouter.post("/get", authMiddelWare, getCart);

export default cartRouter;
