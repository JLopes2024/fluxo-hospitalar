import { PatientStatus } from "./patient-status";
import { RiskLevel, PreferentialType } from "./priority";

export interface Patient {
  id: string;

  // Identificação (dados fictícios)
  name: string;
  birthDate?: string;

  // Fluxo
  status: PatientStatus;
  riskLevel?: RiskLevel;

  // Preferencial
  preferential?: PreferentialType;

  // Controle de tempo
  arrivalAt: Date;
  triageAt?: Date;
  attendanceStartAt?: Date;
  attendanceEndAt?: Date;
  exitAt?: Date;

  // Estacionamento
  hasParkingTicketValidated?: boolean;

  // Auditoria
  createdAt: Date;
  updatedAt: Date;
}
