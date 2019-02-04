const express = require('express');
const RoomService = require('../models/services/RoomService');
const BaseController = require('../core/BaseController');
const router = express.Router();

router.get('/', (req, res) => {
    BaseController.excute(req, res, null, null, RoomService.findAll);
});
router.post('/', (req, res) => {
    BaseController.excute(req, res, null, null, RoomService.create);
});
router.put('/', (req, res) => {
    BaseController.excute(req, res, null, null, RoomService.update);
});
router.get('/:id', (req, res) => {
    BaseController.excute(req, res, null, null, RoomService.findById);
});
router.delete('/:id', (req, res) => {
    BaseController.excute(req, res, null, null, RoomService.delete);
});
router.get('/branch/:id', (req, res) => {
    BaseController.excute(req, res, null, null, RoomService.findRoomByCinemaBranch);
});

module.exports = router;