import { Router } from "express";
import professorController from "../controllers/ProfessorController";

const router = new Router();

router.post("/", professorController.store);
router.delete("/:id", professorController.delete);
router.put("/:id", professorController.update);
router.get("/", professorController.index);

export default router;
