import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    content: {
        type: String,
        required: true
    },
    date_created: {
        type: String,
        required: false
    }
});

export interface Post extends mongoose.Document {
    id: string;
    title: string;
    content: string;
    date_created: string;
};