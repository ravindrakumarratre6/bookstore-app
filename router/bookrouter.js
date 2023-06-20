const express = require('express');
const router = express.Router();
const books = require('../model/dbbooks');
const { deletebooks,getbook,updatebook ,createbook,getbooks} = require('../controller/bookcontroller');

router.route("/").get(getbooks).post(createbook);

router.route("/:id").get(getbook).put(updatebook).delete(deletebooks);


module.exports = router;
