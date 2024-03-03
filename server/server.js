const express = require("express");
const cors = require("cors");
const { networkInterfaces } = require("os");

const app = express();
const PORT = 4100;

const HOST = process.env.NODE_ENV === "production" ? getLocalExternalIp() : "127.0.0.1";

const getLocalExternalIp = () => {
    const settings= [].concat.apply([], Object.values(networkInterfaces()));
    return settings.filter((details) => details.family === "IPv4" && !details.internal).pop().address;
}; 

app.use(cors({
    origin: [
        "http://localhost:4100",
    ]
}));

app.use(express.static("public"));

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
