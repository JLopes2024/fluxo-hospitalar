import { buildQueue } from "./domain/build-queue";
import { Patient } from "./domain/patient";

const patients: Patient[] = [
  {
    id: "1",
    name: "Paciente A",
    status: "AGUARDANDO_MEDICO",
    riskLevel: "NAO_URGENTE",
    arrivalAt: new Date("2024-01-01T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Paciente B",
    status: "AGUARDANDO_MEDICO",
    riskLevel: "URGENTE",
    preferential: "IDOSO",
    arrivalAt: new Date("2024-01-01T10:05:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Paciente C",
    status: "AGUARDANDO_RETORNO_MEDICO",
    riskLevel: "URGENTE",
    arrivalAt: new Date("2024-01-01T09:50:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const queue = buildQueue(patients);

queue.forEach((p, i) =>
  console.log(`${i + 1}º - ${p.name}`)
);
