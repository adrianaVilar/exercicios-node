import { Router } from "express";

import imgController from "../controllers/ImgController";

const router = new Router();

router.post("/", imgController.store);

export default router;
