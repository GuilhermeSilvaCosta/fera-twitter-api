import mongoose from 'mongoose';

class Database {
    constructor() {
        this.mongo();
    }

    mongo() {
        this.mongoConnections = mongoose.connect(
            process.env.MONGO_URL,
            { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true, useFindAndModify: false  },
        );
        mongoose.connection.on('error', err => {
            console.log(`MongoDB connection error: ${err}`);
        });
    }
}

export default new Database();
