const express = require('express');
const ShowTimeService = require('../models/services/ShowTimeService');
const BaseController = require('../core/BaseController');
const router = express.Router();

router.get('/', (req, res) => {
    BaseController.excute(req, res, null, null, ShowTimeService.findAll);
});
router.post('/', (req, res) => {
    BaseController.excute(req, res, null, null, ShowTimeService.create);
});
router.put('/', (req, res) => {
    BaseController.excute(req, res, null, null, ShowTimeService.update);
});
router.get('/:id', (req, res) => {
    BaseController.excute(req, res, null, null, ShowTimeService.findById);
});
router.delete('/:id', (req, res) => {
    BaseController.excute(req, res, null, null, ShowTimeService.delete);
});

module.exports = router;