import { RiskLevel, PreferentialType } from "./priority";

export const riskWeight: Record<RiskLevel, number> = {
  EMERGENTE: 4,
  URGENTE: 3,
  POUCO_URGENTE: 2,
  NAO_URGENTE: 1,
};

export const preferentialWeight: Record<PreferentialType, number> = {
  GESTANTE: 4,
  IDOSO: 3,
  PCD: 2,
  CRIANCA: 1,
};
