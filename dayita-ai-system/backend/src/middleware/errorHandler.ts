import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message,
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
        },
    });
};

export default errorHandler;