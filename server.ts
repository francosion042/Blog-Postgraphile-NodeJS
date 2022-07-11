import express from 'express';
import { postgraphile } from 'postgraphile';

const app = express();

let server = app.listen(process.env.PORT || 3000 , () => {
  console.log('Server is running on port 3000');
});