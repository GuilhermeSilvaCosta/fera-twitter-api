import mongoose from 'mongoose';

const TweetSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
    }
}, {
    timestamps: true,
});

export default mongoose.model('Tweet', TweetSchema);
