import Manipulacao_de_Numeros_Service from "../../services/desafios_01_10/service.ts";
import express from "express";

export const router_01_10 = express.Router();

router_01_10.post("/001", Manipulacao_de_Numeros_Service.averageOfThreeNumbers);

router_01_10.post("/002", Manipulacao_de_Numeros_Service.verifyEvenOdd);
