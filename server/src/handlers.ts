import { Request, Response } from "express";
import { dataFetch, updateOrder } from "./controllers";

export const rootHandler = (_req: Request, res: Response) => {
  return res.json(dataFetch());
};

export const editHandler = (req: Request, res: Response) => {
  const { params } = req;
  const { itemId } = params;
  const response = updateOrder(Number(itemId), req.body);

  return res.json(response);
};
