import { Patient } from "./domain/patient";
import { changePatientStatus } from "./domain/change-patiente-status";

let patient: Patient = {
  id: "1",
  name: "Paciente Teste",
  status: "CHEGADA_TOTEM",
  arrivalAt: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
};

console.log("Estado inicial:", patient.status);

patient = changePatientStatus(patient, "AGUARDANDO_TRIAGEM");
console.log("Novo estado:", patient.status);

patient = changePatientStatus(patient, "EM_TRIAGEM");
console.log("Novo estado:", patient.status);

// 🚨 teste inválido (descomenta depois)
// patient = changePatientStatus(patient, "ALTA");
