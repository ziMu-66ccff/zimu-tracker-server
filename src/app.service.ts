import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Performance } from './entities/performance.entity';
import { Model } from 'mongoose';
import { CreateTrackedDataDto } from './dto/create-trackedData.dto';
import { UserAction } from './entities/userAction.entity';
import { Custom } from './entities/custom.entity';
import { PV } from './entities/pv.entity';
import { BehaviorStack } from './entities/hehaviorStack.entity';
import { Error } from './entities/error.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Performance.name)
    private readonly PerformanceModel: Model<Performance>,
    @InjectModel(UserAction.name)
    private readonly UserActionModel: Model<UserAction>,
    @InjectModel(Custom.name)
    private readonly CustomModel: Model<Custom>,
    @InjectModel(BehaviorStack.name)
    private readonly BehaviorStack: Model<BehaviorStack>,
    @InjectModel(PV.name)
    private readonly PVModel: Model<PV>,
    @InjectModel(Error.name)
    private readonly ErrorModel: Model<Error>,
  ) {}

  async saveTrackedData(createTrackedDataDto: CreateTrackedDataDto) {
    const { type, data, appId, uid, extra, time, timeFormat } =
      createTrackedDataDto;

    if (type === 'performance') {
      const performanceData = await this.PerformanceModel.create({
        ...data,
        extra,
        appId,
        uid,
        time,
        timeFormat,
      });
      if (performanceData) return console.log('performance data send success');
      else return console.log('performance data sendfail');
    }

    if (type === 'userAction') {
      const userActionData = await this.UserActionModel.create({
        ...data,
        extra,
        appId,
        uid,
        time,
        timeFormat,
      });
      if (userActionData) return console.log('userAction data send success');
      else return console.log('userAction data sendfail');
    }

    if (type === 'custom') {
      const customData = await this.CustomModel.create({
        data,
        extra,
        appId,
        uid,
        time,
        timeFormat,
      });
      if (customData) return console.log('custom data send success');
      else return console.log('custom data sendfail');
    }

    if (type === 'behaviorStack') {
      const behaviorStack = await this.BehaviorStack.create({
        data,
        extra,
        appId,
        uid,
        time,
        timeFormat,
      });
      if (behaviorStack) return console.log('behaviorStack data send success');
      else return console.log('behaviorStack data sendfail');
    }

    if (type === 'PV') {
      const PVData = await this.PVModel.create({
        ...data,
        extra,
        appId,
        uid,
        time,
        timeFormat,
      });
      if (PVData) return console.log('PV data send success');
      else return console.log('PV data sendfail');
    }

    if (type === 'error') {
      const errorData = await this.ErrorModel.create({
        ...data,
        extra,
        appId,
        uid,
        time,
        timeFormat,
      });
      if (errorData) return console.log('error data send success');
      else return console.log('error data sendfail');
    }
  }
}
