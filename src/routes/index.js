const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

router.get('/items', itemsController.getAllItems);
router.get('/items/:id', itemsController.getItemById);
router.post('/items', itemsController.createItem);

module.exports = router;
