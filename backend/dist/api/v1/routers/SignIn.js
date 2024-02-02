"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/signin', (req, res) => {
    res.status(200).json("You are Signed In !");
});
exports.default = router;
