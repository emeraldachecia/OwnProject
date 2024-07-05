import express from "express";
import { home_page } from "./controllers/home-controller.js";

const router = express.Router();

router.get("/home-page", home_page);

export default router;