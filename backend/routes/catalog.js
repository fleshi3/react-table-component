const express = require('express');
const router = express.Router();

// import controller modules
const book_controller = require('../controllers/bookController');
const author_controller = require('../controllers/authorController');
const book_instance_controller = require('../controllers/bookInstanceController');
const genre_controller = require('../controllers/genreController');

// BOOK ROUTES //

// GET catalog home page
router.get('/', book_controller.index);

module.exports = router;
