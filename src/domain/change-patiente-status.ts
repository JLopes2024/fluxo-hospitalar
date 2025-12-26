import { Patient } from "./patient";
import { PatientStatus } from "./patient-status";
import { allowedTransitions } from "./patient-transitions";

export function changePatientStatus(
  patient: Patient,
  nextStatus: PatientStatus
): Patient {
  const allowed = allowedTransitions[patient.status];

  if (!allowed.includes(nextStatus)) {
    throw new Error(
      `Transição inválida: ${patient.status} → ${nextStatus}`
    );
  }

  return {
    ...patient,
    status: nextStatus,
    updatedAt: new Date(),
  };
}
