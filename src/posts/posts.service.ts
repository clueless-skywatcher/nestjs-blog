import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
    private posts: Post[] = [];

    constructor(
        @InjectModel('Post') private readonly postModel: Model<Post>
    ) {}

    async insertPost(title: string, content: string): Promise<object>{
        const post = new this.postModel({
            title, 
            content,
            date_created: new Date().toString()
        });
        const result = await post.save();
        return result._id;
    }

    async getPosts(){
        const result = await this.postModel.find().exec();
        return result.map(
            (prod) => ({
                id: prod.id, 
                title: prod.title,
                content: prod.content,
                date_created: prod.date_created
            })
        );
    }

    async getPost(id: string){
        const post = await this.findPost(id);
        return {
            id: post.id,
            title: post.title,
            content: post.content,
            date_created: post.date_created
        };
    }

    async patchPost(id: string, title: string, content: string){
        const newPost = await this.findPost(id);
        if (title) {
            newPost.title = title;
        }
        if (content){
            newPost.content = content;
        }
        newPost.save();
        return null;
    }

    private async findPost(id: string): Promise<Post>{
        let post;
        try {
            post = await this.postModel.findById(id);
        } catch(error){
            throw new NotFoundException("Post with this ID was not found");
        }

        if (!post){
            throw new NotFoundException("Post with this ID was not found");
        }
        return post;
    }

    async deletePost(id: string) {
        const result = await this.postModel.deleteOne({
            _id: id
        }).exec();

        if (result.n === 0){
            throw new NotFoundException("Post with this ID was not found");
        }
    }
}
