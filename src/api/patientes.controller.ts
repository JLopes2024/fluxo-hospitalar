import { Request, Response } from "express";
import { randomUUID } from "crypto";
import { Patient } from "../domain/patient";
import { changePatientStatus } from "../domain/change-patiente-status";
import { buildQueue } from "../domain/build-queue";

// Mock de "banco"
const patients: Patient[] = [];

export function createPatient(req: Request, res: Response) {
  const patient: Patient = {
    id: randomUUID(),
    name: req.body.name,
    status: "CHEGADA_TOTEM",
    arrivalAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  patients.push(patient);
  res.status(201).json(patient);
}

export function listQueue(req: Request, res: Response) {
  const queue = buildQueue(patients);
  res.json(queue);
}

export function changeStatus(req: Request, res: Response) {
  const patient = patients.find(p => p.id === req.params.id);

  if (!patient) {
    return res.status(404).json({ error: "Paciente não encontrado" });
  }

  try {
    const updated = changePatientStatus(
      patient,
      req.body.status
    );

    Object.assign(patient, updated);
    res.json(patient);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
