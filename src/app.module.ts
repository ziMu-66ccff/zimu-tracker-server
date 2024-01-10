import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Performance, PerformanceSchema } from './entities/performance.entity';
import { UserAction, UserActionSchema } from './entities/userAction.entity';
import { Custom, CustomSchema } from './entities/custom.entity';
import { PV, PVSchema } from './entities/pv.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import {
  BehaviorStack,
  BehaviorStackSchema,
} from './entities/hehaviorStack.entity';
import { Error, ErrorSchema } from './entities/error.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/ziMuTracker'),
    MongooseModule.forFeature([
      { name: Performance.name, schema: PerformanceSchema },
      { name: UserAction.name, schema: UserActionSchema },
      { name: PV.name, schema: PVSchema },
      { name: Custom.name, schema: CustomSchema },
      { name: BehaviorStack.name, schema: BehaviorStackSchema },
      { name: Error.name, schema: ErrorSchema },
    ]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
