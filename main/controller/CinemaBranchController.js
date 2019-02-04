const express = require('express');
const CinemaBranchService = require('../models/services/CinemaBranchService');
const BaseController = require('../core/BaseController');
const router = express.Router();

router.get('/', (req, res) => {
    BaseController.excute(req, res, null, null, CinemaBranchService.findAll);
});
router.post('/', (req, res) => {
    BaseController.excute(req, res, null, null, CinemaBranchService.create);
});
router.put('/', (req, res) => {
    BaseController.excute(req, res, null, null, CinemaBranchService.update);
});
router.get('/:id', (req, res) => {
    BaseController.excute(req, res, null, null, CinemaBranchService.findById);
});
router.delete('/:id', (req, res) => {
    BaseController.excute(req, res, null, null, CinemaBranchService.delete);
});

module.exports = router;