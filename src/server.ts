import express from 'express';

const app = express();

app.get('/', (req, res) => {});

app.listen(999, () => console.log('🚀  Server is running'));
