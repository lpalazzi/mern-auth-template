import { UnauthorizedError } from 'api/errors';
import express from 'express';

export const checkLoggedIn: express.RequestHandler = async (req, res, next) => {
  try {
    if (!req.session.userId) {
      throw new UnauthorizedError('User is not logged in');
    }
    next();
  } catch (err) {
    next(err);
  }
};
