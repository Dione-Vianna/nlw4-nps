import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  return res.json({ massage: '#rumoaoproximonivel' });
});

app.listen(3333, () => console.log('🚀 Server is running'));
