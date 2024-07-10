const express = require('express');
const { createQueue, getQueues, joinQueue, getQueueEntries } = require('../controllers/queueController');
const router = express.Router();

router.post('/', createQueue);
router.get('/', getQueues);
router.post('/join', joinQueue);
router.get('/entries', getQueueEntries);

module.exports = router;
