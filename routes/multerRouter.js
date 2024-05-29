const express = require("express");

const app = express();
const upload = require("../controller/multerController");

app.post("/upload", upload.single("img")
// , (req, res)=> {
// res.send("file uploaded successfully")
// }
);

app.listen(5000);