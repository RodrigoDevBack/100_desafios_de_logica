import type { Response, Request } from "express";
import type {
  AverageOfThreeNumbersInput,
  convertScaleInput,
  verifyEvenOddInput,
} from "../../interfaces/desafios_01_10.ts";

export default class Manipulacao_de_Numeros_Service {
  static averageOfThreeNumbers(
    req: Request<{}, any, AverageOfThreeNumbersInput>,
    res: Response
  ) {
    try {
      const calc =
        (req.body.firstValue + req.body.secondValue + req.body.thirdValue) / 3;

      return res.status(200).json({ result: calc });
    } catch (error) {
      throw res.status(400).json("Falha inesperada:" + error);
    }
  }

  static verifyEvenOdd(
    req: Request<{}, any, verifyEvenOddInput>,
    res: Response
  ) {
    try {
      const calc: boolean = req.body.value % 2 === 0 ? true : false;

      const result: string = calc
        ? `O valor ${req.body.value} é PAR`
        : `O valor ${req.body.value} é Ímpar`;

      return res.status(200).json({ result: result });
    } catch (error) {
      throw res.status(400).json("Falha inesperada: " + error);
    }
  }

  static convertScale(req: Request<{}, any, convertScaleInput>, res: Response) {
    try {
      const calcResponse: number = req.body.value * 1.8 + 32;

      return res.status(200).json({ result: calcResponse });
    } catch (error) {
      throw res.status(400).json("Falha inesperada: " + error);
    }
  }
}
