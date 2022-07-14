import { Router } from "express";
import userController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Rotas que complemantam o CRUD, mas no mundo real não usaria
// router.get("/", loginRequired, userController.index);
// router.get("/:id", userController.show);
// router.put("/:id", userController.update); -> Dessa forma qlqr usuario poderia atualizar
// router.delete("/:id", userController.delete); -> Dessa forma qlqr user poderia deletar

router.post("/", userController.store); // Esse não precisa de login, pq o usuario precisa acessar para criar conta
router.put("/", loginRequired, userController.update); // Precisa de login
router.delete("/", loginRequired, userController.delete); // Precisa de login

export default router;
