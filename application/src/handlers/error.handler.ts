import { Response, Request, NextFunction } from 'express';
import { HttpError } from '../errors/http.error';

export default function errorHandler(err: Error, request: Request, response: Response, next: NextFunction) {
    let ret: HttpError;
    if (err instanceof HttpError) {
        ret = err;
    } else {
        ret = new HttpError();
        ret.message = err.message;
        ret.status = 500;
    }
    return response.status(ret.status).json(ret);
}