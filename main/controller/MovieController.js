const express = require('express');
const MovieService = require('../models/services/MovieService');
const BaseController = require('../core/BaseController');
const router = express.Router();

router.get('/', (req, res) => {
    BaseController.excute(req, res, null, null, MovieService.findAll);
});
router.post('/', (req, res) => {
    BaseController.excute(req, res, null, null, MovieService.create);
});
router.put('/', (req, res) => {
    BaseController.excute(req, res, null, null, MovieService.update);
});
router.get('/:id', (req, res) => {
    BaseController.excute(req, res, null, null, MovieService.findById);
});
router.delete('/:id', (req, res) => {
    BaseController.excute(req, res, null, null, MovieService.delete);
});

module.exports = router;