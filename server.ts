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
            ignoreRBAC: false,
            ownerConnectionString: process.env.OWNER_DATABASE_URL,
            pgDefaultRole: process.env.DATABASE_DEFAULT_ROLE,
            jwtPgTypeIdentifier: process.env.DATABASE_JWT_PG_TYPE_IDENTIFIER,
            jwtSecret: process.env.DATABASE_JWT_SECRET,
            appendPlugins: [require('@graphile-contrib/pg-simplify-inflector')],
        })
)

app.listen(process.env.PORT || 3000 , () => {
  console.log('Server is running on port 3000');
});