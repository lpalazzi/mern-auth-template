import express from 'express';

export const checkLoggedIn: express.RequestHandler = async (req, res, next) => {
  try {
    if (!req.session.userId) {
      res.redirect('/login');
    }
  } catch (err) {
    next(err);
  }
};
