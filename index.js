import express from 'express';
import expressGraphql from 'express-graphql';
import Schema from './schema/Schema.js';
import mongoose from 'mongoose';
import cors from 'cors'; 
import multer from 'multer';
import path from 'path';
import fileUpload from 'express-fileupload';


const {graphqlHTTP} = expressGraphql;

const port = 5000;

const __dirname = path.resolve(path.dirname(''));

var picSchema= new mongoose.Schema({
    picpath:String
})

var picModel = mongoose.model('picsdemo',picSchema);

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
var upload = multer({storage:storage})

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
app.use(express.static('public'))
app.use(cors())
app.use(fileUpload());

app.post('/upload', (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }

    const myFile = req.files.file;

    // Use the mv() method to place the file somewhere on your server
    myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "XD" });
        }
        return res.send({ file: myFile.name, path: `/${myFile.name}`, ty: myFile.type });
    });
})

app.listen(port, console.log(`listening at: http://localhost:${port}/graphql`));
