import { Patient } from "./patient";
import { queueEligibleStatuses } from "./queue-status";
import { sortQueue } from "./sort-queue";

export function buildQueue(patients: Patient[]): Patient[] {
  const eligible = patients.filter((p) =>
    queueEligibleStatuses.includes(p.status)
  );

  return sortQueue(eligible);
}
