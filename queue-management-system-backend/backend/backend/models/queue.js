const mongoose = require('mongoose');

const queueSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Queue = mongoose.model('Queue', queueSchema);

const queueEntrySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    queue: { type: mongoose.Schema.Types.ObjectId, ref: 'Queue', required: true },
    joinedAt: { type: Date, default: Date.now },
    status: { type: String, default: 'waiting' },
});

const QueueEntry = mongoose.model('QueueEntry', queueEntrySchema);

module.exports = { Queue, QueueEntry };
