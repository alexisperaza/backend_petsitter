import { Router } from "express";
import { methods as petSittersController } from "../controllers/petsitters.controller";

const router = Router();

router.get("/", petSittersController.getPetsitters);
router.get("/:id", petSittersController.getPetsitter);
router.delete("/:id", petSittersController.deletePetsitter);
router.put("/:id", petSittersController.updatePetsitter);
router.post('/', petSittersController.addPetsitter);


export default router;