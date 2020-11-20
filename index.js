import express from 'express';
import expressGraphql from 'express-graphql';
import Schema from './schema/Schema.js';
import mongoose from 'mongoose';
import cors from 'cors'; 

const {graphqlHTTP} = expressGraphql;

const port = 5000;

const app = express();

app.use(cors());

const dbName = 'PAGINA_DE_JUEGOS';
const user = 'adminx';
const password = 'contraseña1';
const connectionString = `mongodb+srv://${user}:${password}@cluster0.rnyot.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(console.log("connected to pagina de juegos"))
.catch(error => console.log(`[Error]: ${error}`));

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));

app.listen(port, console.log(`listening at: http://localhost:${port}/graphql`));
