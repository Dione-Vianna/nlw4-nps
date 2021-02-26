import 'reflect-metadata';
import express from 'express';

import './database';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.get('/users', (req, res) => {
  return res.json({ massage: '#rumoaoproximonivel, #jornadainfinita' });
});

app.listen(3333, () => console.log('🚀 Server is running'));
