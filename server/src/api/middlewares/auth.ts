import mongoose from 'mongoose';
import express from 'express';
import { container } from 'tsyringe';
import { UserService } from 'services';
import { UnauthorizedError, InternalServerError } from 'api/errors';

export const checkLoggedIn: express.RequestHandler = async (req, res, next) => {
  try {
    if (!req.session.userId) {
      throw new UnauthorizedError('User is not logged in');
    }
    if (!mongoose.isValidObjectId(req.session.userId)) {
      throw new InternalServerError('Stored userId is not a valid ObjectId');
    }
    next();
  } catch (err) {
    next(err);
  }
};

export const checkAdmin: express.RequestHandler = async (req, res, next) => {
  try {
    const userService = container.resolve(UserService);
    const userId = new mongoose.Types.ObjectId(req.session.userId);
    const userIsAdmin = await userService.isUserAdmin(userId);
    if (!userIsAdmin) {
      throw new UnauthorizedError('Access restricted to admins');
    }
    next();
  } catch (err) {
    next(err);
  }
};
