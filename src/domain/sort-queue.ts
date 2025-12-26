import { Patient } from "./patient";
import { riskWeight, preferentialWeight } from "./priority-weight";

export function sortQueue(patients: Patient[]): Patient[] {
  return [...patients].sort((a, b) => {
    // 1️⃣ Gravidade
    const riskA = a.riskLevel ? riskWeight[a.riskLevel] : 0;
    const riskB = b.riskLevel ? riskWeight[b.riskLevel] : 0;

    if (riskA !== riskB) return riskB - riskA;

    // 2️⃣ Preferencial
    const prefA = a.preferential
      ? preferentialWeight[a.preferential]
      : 0;

    const prefB = b.preferential
      ? preferentialWeight[b.preferential]
      : 0;

    if (prefA !== prefB) return prefB - prefA;

    // 3️⃣ Ordem de chegada
    return a.arrivalAt.getTime() - b.arrivalAt.getTime();
  });
}
