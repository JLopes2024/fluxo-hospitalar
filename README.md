# 🏥 Sistema de Fluxo Hospitalar

Sistema educacional que modela o **fluxo completo de pacientes em um hospital**, desde a chegada via totem de triagem até a alta, internação ou saída antecipada.

O foco do projeto é **modelagem de domínio**, **regras de negócio explícitas** e **controle rigoroso de estados**, simulando cenários reais de atendimento hospitalar.

---

## 🎯 Objetivo do Projeto

Demonstrar domínio em:

- Modelagem de sistemas complexos
- Controle de fluxo e estados
- Regras de prioridade clínica e preferencial
- Organização de código orientada a domínio (DDD leve)
- Uso do TypeScript como ferramenta de segurança e clareza

---

## 🧠 Visão Geral do Fluxo

### 1. Chegada ao hospital
- O paciente realiza uma triagem inicial em um **totem**
- Dados básicos são coletados
- O paciente entra automaticamente na **fila de triagem**

### 2. Triagem
- Profissional define a **classificação de risco**
- O paciente é encaminhado para a recepção

### 3. Recepção
- Coleta de dados administrativos
- Confirmação de convênio
- Entrada na **fila de espera médica**

### 4. Atendimento médico
O médico pode decidir por:
- Alta imediata
- Solicitação de exame
- Solicitação de medicação
- Solicitação de exame + medicação
- Encaminhamento para internação

### 5. Exames e medicação
- O paciente só pode retornar ao médico após:
  - Finalização do exame
  - Liberação da medicação
- Retornos podem **ter prioridade** sobre novos atendimentos
- O retorno **não aparece na fila pública**, apenas na tela do médico

### 6. Saída do hospital
- Alta médica ou internação
- Validação do ticket de estacionamento
- Caso o ticket não seja validado:
  - O valor é cobrado automaticamente na fatura do convênio

---

## 🚦 Controle de Estados

O sistema utiliza um **motor central de transições**, impedindo mudanças inválidas de estado.

### Exemplos de estados do paciente:

- `CHEGADA_TOTEM`
- `AGUARDANDO_TRIAGEM`
- `EM_TRIAGEM`
- `AGUARDANDO_RECEPCAO`
- `AGUARDANDO_MEDICO`
- `EM_ATENDIMENTO`
- `EM_EXAME`
- `EM_MEDICACAO`
- `AGUARDANDO_RETORNO_MEDICO`
- `ALTA`
- `INTERNACAO`
- `SAIDA_ANTECIPADA`

Cada transição é validada por regra de negócio.

---

## 🧑‍⚕️ Prioridade e Atendimento Preferencial

A fila de atendimento considera, nesta ordem:

1. **Classificação de risco**
   - Emergente
   - Urgente
   - Pouco urgente
   - Não urgente

2. **Atendimento preferencial**
   - Gestantes
   - Idosos
   - Pessoas com deficiência (PCD)
   - Crianças

3. **Ordem de chegada**
   - Utilizada como critério de desempate

O algoritmo de ordenação garante **justiça**, **segurança clínica** e **previsibilidade**.

---

## 🧱 Estrutura do Projeto

```text
src/
 └── domain/
     ├── patient.ts
     ├── patient-status.ts
     ├── patient-transitions.ts
     ├── change-patient-status.ts
     ├── patient-history.ts
     ├── priority.ts
     ├── priority-weight.ts
     ├── queue-status.ts
     ├── sort-queue.ts
     └── build-queue.ts
