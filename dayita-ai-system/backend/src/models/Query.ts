import { Schema, model } from 'mongoose';

const querySchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    queryText: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Query = model('Query', querySchema);

export default Query;