import express from "express";
import path from "path";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import expressLayouts from "express-ejs-layouts";
import routes from "./routes.js";

const app = express();
const port = 8080;
const staticPathPublic = path.resolve("public");

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static(staticPathPublic));
app.use(expressLayouts);
app.use("/", routes);

app.listen(port, ()=> {
    console.log(`>> Server is running on http://localhost:${port}`);
})