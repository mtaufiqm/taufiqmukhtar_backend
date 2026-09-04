import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ResponseError } from "../models/error_model";
import { Prisma } from "../generated/prisma/client";

export const errorMiddleware = async (error: Error, req: Request, resp: Response, next: NextFunction) => {
    console.info(`Error : ${JSON.stringify(error)}`);
    if(error instanceof ZodError){
        resp.status(400).json({
            message: `Validation Error : ${JSON.stringify(error)}`
        });
    } else if(error instanceof ResponseError){
        resp.status(error.status).json({
            message: error.message
        });
    } else if (error instanceof Prisma.PrismaClientKnownRequestError){
        if(error.code === "P2002"){
            resp.status(400).json({
                message: "Terjadi Kesalahan. Unique Data Sudah Ada"
            });
            return;
        } else if(error.code === "P2007"){
            resp.status(400).json({
                message: "Terjadi Kesalahan Validasi Data."
            });
            return;
        } else {
            resp.status(400).json({
                message: `Terjadi Kesalahan`
            });
            return;
        }
    } else {
        resp.status(500).json({
            message: "Error Occurred"
        });
    }
}