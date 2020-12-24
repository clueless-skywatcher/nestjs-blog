import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './posts.model';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Post',
      schema: PostSchema
    }])
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
