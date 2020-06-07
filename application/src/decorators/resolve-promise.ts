import { NextFunction } from 'express';
import errorHandler from '../handlers/error.handler';

export default function ResolvePromise() {
    return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
        const original = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            try {
                const result = original.apply(this, args);
                if (result instanceof Promise) await result;
                return result;
            } catch (err) {
                errorHandler(err, args[0], args[1], args[2]);
            }
        };
        return descriptor;
    };
}