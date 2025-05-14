import { Request, Response } from 'express';

export abstract class BaseController {
  protected sendSuccess(res: Response, data: any, statusCode: number = 200): Response {
    return res.status(statusCode).json({
      success: true,
      data
    });
  }

  protected sendError(res: Response, error: Error, statusCode: number = 400): Response {
    return res.status(statusCode).json({
      success: false,
      error: error.message
    });
  }

  protected getRequestData(req: Request): any {
    return {
      body: req.body,
      params: req.params,
      query: req.query
    };
  }
} 