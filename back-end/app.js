const express = require('express');
const app = express();
const fileupload = require("express-fileupload");
const bodyParser = require('body-parser');
var formidable = require('formidable');
const cors = require("cors");
const multer = require('multer');


app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.urlencoded({ extended: true }));



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files')
    }
    , filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
}
);
const upload = multer({ storage: storage });

app.use(cors());
app.post('/upload', (req, res) => {
    
    console.log(req.files.file)
    let file = req.files.file;
    let uploadPath = './files/' + file.name;
    file.mv(uploadPath, function (err) {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.send('File uploaded to ' + uploadPath);
    }
    );
}
);


app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));