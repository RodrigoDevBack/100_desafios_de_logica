import type { Response, Request } from "express";
import type {
  Calculo_Media_De_Tres_Numeros_Input
} from "../../interfaces/desafios_01_10.ts";

export default class Manipulacao_de_Numeros_Service {
  static calculo_media_de_tres_numeros(
    req: Request<{}, any, Calculo_Media_De_Tres_Numeros_Input>,
    res: Response
  ) {
    try {
      const calc = (req.body.firstValue + req.body.secondValue + req.body.thirdValue) / 3;

      return res.status(200).json({"result": calc});
    } catch (error) {
      throw res.status(400).json("Falha inesperada:" + error);
    }
  }
}
