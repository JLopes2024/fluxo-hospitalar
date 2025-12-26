import { Patient } from "./domain/patient";

const patient: Patient = {
  id: "1",
  name: "Paciente Teste",
  status: "CHEGADA_TOTEM",
  arrivalAt: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
};

console.log(patient);
