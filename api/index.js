import express from "express";
import bodyParser from "body-parser";
import { sendMail } from "./utils/mail.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const api = express();
const port = 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

api.use(bodyParser.json());
api.use(
    bodyParser.urlencoded({
        extended: true,
    })
);





api.get("/email", (req, res) => {
    res.send('funciona');
});

api.post("/email", (req, res) => {
    const { email, firstName } = req.body;
    if (!email || !firstName)
        return res.send({
            success: false,
        });
    sendMail(email, firstName, "");
    res.send({
        success: true,
    });
});

module.exports = api;