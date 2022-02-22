const db = require("../db/db.json"); 
const path = require("path"); 
const fs = require("fs");
const { application } = require("express");

module.exports = function (app) {
    app.get("/api/notes", (req, res) => {
        fs.readFile("./db/db.json", (err, notesAdd) => {
            if (err) throw err; 
            res.json(JSON.parse(notesAdd));
        })
    });
};