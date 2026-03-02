import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ResponseError } from "../models/error_model";

export const errorMiddleware = async (error: Error, req: Request, resp: Response, next: NextFunction) => {
    if(error instanceof ZodError){
        resp.status(400).json({
            message: `Validation Error : ${JSON.stringify(error)}`
        });
    } else if(error instanceof ResponseError){
        resp.status(error.status).json({
            message: error.message
        });
    } else {
        console.info(`Error ${error.message}`);
        resp.status(500).json({
            message: "Error Occurred"
        });
    }
}