import express from "express";
import { router_01_10 } from "./routers/desafios_01_10/router.ts";
import cors from "cors";

const PORT = 3040;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/desafios_01_10", router_01_10)

app.listen(PORT, () => {
  console.log(`O servidor está escutando na porta ${PORT}`);
});
