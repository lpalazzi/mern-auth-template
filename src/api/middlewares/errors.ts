import express from 'express';

export const errorResponder: express.ErrorRequestHandler = async (
  err,
  req,
  res,
  next
) => {
  try {
    res.header('Content-Type', 'application/json');
    res.status(err.statusCode || 500).json({
      message: err.message || 'Internal server error',
      statusCode: err.statusCode || 500,
      stack: err.stack,
    });
  } catch (err) {
    next(err);
  }
};
