import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTrackedDataDto {
  @IsString({ message: 'the type of message must be string' })
  @IsNotEmpty({ message: '类型不能为空奥' })
  type: string;

  @IsNotEmpty({ message: '数据不能为空奥' })
  data: Record<string, any>;

  extra: Record<string, any>;

  @IsString({ message: 'the type of appId must be string' })
  @IsNotEmpty({ message: 'appId不能为空奥' })
  appId: string;

  @IsString({ message: 'the type of uid must be string' })
  uid: string;

  @IsString({ message: 'the type of time must be number' })
  @IsNotEmpty({ message: 'time不能为空奥' })
  time: number;

  @IsString({ message: 'the type of timeFormat must be string' })
  @IsNotEmpty({ message: 'timeFormat不能为空奥' })
  timeFormat: string;
}
