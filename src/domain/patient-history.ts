import { PatientStatus } from "./patient-status";

export interface PatientHistory {
  id: string;
  patientId: string;

  fromStatus?: PatientStatus;
  toStatus: PatientStatus;

  changedBy: string;
  changedAt: Date;
  reason?: string;
}
