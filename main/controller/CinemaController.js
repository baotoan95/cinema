const express = require('express');
const CinemaService = require('../models/services/CinemaService');
const BaseController = require('../core/BaseController');
const router = express.Router();

router.get('/', (req, res) => {
    BaseController.excute(req, res, null, null, CinemaService.findAll);
});
router.post('/', (req, res) => {
    BaseController.excute(req, res, null, null, CinemaService.create);
});
router.put('/', (req, res) => {
    BaseController.excute(req, res, null, null, CinemaService.update);
});
router.get('/:id', (req, res) => {
    BaseController.excute(req, res, null, null, CinemaService.findById);
});
router.delete('/:id', (req, res) => {
    BaseController.excute(req, res, null, null, CinemaService.delete);
});

module.exports = router;