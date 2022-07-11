import express from 'express';
import 'dotenv/config';
import { postgraphile } from 'postgraphile';

const app = express();

app.use(
    postgraphile(
        process.env.DATABASE_URL, 
        process.env.DATABASE_SCHEMA, 
        {
            watchPg: true,
            graphiql: true,
            enhanceGraphiql: true,
        })
)

app.listen(process.env.PORT || 3000 , () => {
  console.log('Server is running on port 3000');
});