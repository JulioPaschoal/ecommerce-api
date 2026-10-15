import express from 'express';

import { router } from './routes/index.js';

const app = express();

router(app);

app.listen(3000, () => {
    console.log('http://localhost:3000');
});
