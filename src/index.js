import express from 'express';
import { renderer } from './helpers/renderer';

const app = express();

app.use(express.static('public'));
// app.use(renderer);

app.get('*', (req, res) => {
  res.send(renderer(req, res));
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
