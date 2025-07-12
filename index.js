require('dotenv').config();
const express = require('express');

const app = express();
const fileUpload = require('express-fileupload');
app.use(
    fileUpload({
        extend: true,
    })
);

app.use(express.static(__dirname));
app.use(express.json());
const path = require('path');
const ethers = require('ethers');

var port = 3000;

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTACT_ADDRESS = process.env.CONTRACT_ADDRESS;

