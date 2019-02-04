const express = require('express');
const UserService = require('../models/services/UserService');
const BaseController = require('../core/BaseController');
const router = express.Router();

router.get('/', (req, res) => {
    BaseController.excute(req, res, null, null, UserService.findAll);
});
router.post('/', (req, res) => {
    BaseController.excute(req, res, null, null, UserService.create);
});
router.put('/', (req, res) => {
    BaseController.excute(req, res, null, null, UserService.update);
});
router.get('/:id', (req, res) => {
    BaseController.excute(req, res, null, null, UserService.findById);
});
router.delete('/:id', (req, res) => {
    BaseController.excute(req, res, null, null, UserService.delete);
});

module.exports = router;