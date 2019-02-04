const express = require('express');
const PageService = require('../models/services/PageService');
const BaseController = require('../core/BaseController');
const router = express.Router();

router.get('/', (req, res) => {
    BaseController.excute(req, res, null, null, PageService.findAll);
});
router.post('/', (req, res) => {
    BaseController.excute(req, res, null, null, PageService.create);
});
router.put('/', (req, res) => {
    BaseController.excute(req, res, null, null, PageService.update);
});
router.get('/:id', (req, res) => {
    BaseController.excute(req, res, null, null, PageService.findById);
});
router.delete('/:id', (req, res) => {
    BaseController.excute(req, res, null, null, PageService.delete);
});

module.exports = router;