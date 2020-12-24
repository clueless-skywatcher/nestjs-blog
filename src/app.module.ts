import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    PostsModule, 
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ltcluster.qb1gz.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
