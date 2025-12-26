import { app } from "./api/server";

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`🚀 API rodando na porta ${PORT}`);
});
