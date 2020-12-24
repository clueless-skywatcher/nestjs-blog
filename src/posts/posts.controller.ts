import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ContextIdFactory } from '@nestjs/core';
import { PostsService } from './posts.service';


@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) {}

    @Post()
    async addPost(
        @Body('title') postTitle: string, 
        @Body('content') postContent: string
    ){
        const id = await this.postService.insertPost(postTitle, postContent);
        return {
            id: id
        };
    }

    @Get()
    async getAllPosts() {
        const posts = await this.postService.getPosts();
        return posts;
    }

    @Get(':id')
    getPost(@Param('id') id: string){
        return this.postService.getPost(id);
    }

    @Patch(':id')
    async patchPost(
        @Param('id') id: string, 
        @Body('title') title: string, 
        @Body('content') content: string
    ){
        await this.postService.patchPost(id, title, content);
        return null;
    }

    @Delete(':id')
    async deletePost(@Param('id') id: string){
        await this.postService.deletePost(id);
        return null;
    }
}
