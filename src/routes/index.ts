import express from 'express';

import { userRouter } from './users.route.js';

export const router = (app: express.Express) => {
    app.use(express.json());
    app.use(userRouter);
};
