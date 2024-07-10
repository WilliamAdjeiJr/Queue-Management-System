const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const queueRoutes = require('./routes/queueRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/queues', queueRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/queue_management_system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err => console.error(err));
