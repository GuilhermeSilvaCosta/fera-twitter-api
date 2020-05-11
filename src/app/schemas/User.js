import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    identify: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
    },
    background_url: {
        type: String,
    }
}, {
    timestamps: true,
});

export default mongoose.model('User', UserSchema);
