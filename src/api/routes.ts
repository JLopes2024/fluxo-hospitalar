import { Router } from "express";
import {
  createPatient,
  listQueue,
  changeStatus,
} from "./patientes.controller";

export const router = Router();

router.post("/patients", createPatient);
router.get("/queue", listQueue);
router.patch("/patients/:id/status", changeStatus);
