import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema()
export class BehaviorStack {
  @Prop({
    type: [
      raw({
        name: String,
        page: String,
        value: Object,
        time: Number,
        timeFormat: String,
      }),
    ],
    required: true,
  })
  data: Array<{
    name: string;
    page: string;
    value: Record<string, any>;
    time: number;
    timeFormat: string;
  }>;

  @Prop({ type: Object })
  extra: Record<string, any>;

  @Prop({ type: String, required: true })
  appId: string;

  @Prop(String)
  uid: string;

  @Prop({ type: Number, required: true })
  time: number;

  @Prop({ type: String, required: true })
  timeFormat: string;
}

export const BehaviorStackSchema = SchemaFactory.createForClass(BehaviorStack);
