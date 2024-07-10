const { Queue, QueueEntry } = require('../models/queue');
const User = require('../models/user');

const createQueue = async (req, res) => {
    const { name, description } = req.body;
    try {
        const queue = new Queue({ name, description });
        await queue.save();
        res.status(201).json(queue);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getQueues = async (req, res) => {
    try {
        const queues = await Queue.find();
        res.json(queues);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const joinQueue = async (req, res) => {
    const { userId, queueId } = req.body;
    try {
        const user = await User.findById(userId);
        const queue = await Queue.findById(queueId);
        if (!user || !queue) {
            return res.status(404).json({ message: 'User or Queue not found' });
        }
        const queueEntry = new QueueEntry({ user, queue });
        await queueEntry.save();
        res.status(201).json(queueEntry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getQueueEntries = async (req, res) => {
    try {
        const entries = await QueueEntry.find().populate('user').populate('queue');
        res.json(entries);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { createQueue, getQueues, joinQueue, getQueueEntries };
