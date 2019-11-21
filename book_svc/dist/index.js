"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 8080;
app.get('/api/v1/book/:id', function (req, res) {
    res.json({
        "book_id": req.params.id,
        "title": "An Absolutely Remarkable Thing",
        "author": "Hank Green",
        "published_date": "September 25th, 2018"
    });
});
app.listen(port, function () { return console.log("listening on port " + port); });
