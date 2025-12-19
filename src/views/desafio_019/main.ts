import express from "express"
import type { Response, Request } from "express";
const app = express();

app.use(express.json())

app.get("/", (req: Request, res: Response) =>{
    return res.status(200).json('Opa')
})

app.listen(3000, () => {
    console.log('Opa, estou a todo vapor.')
})