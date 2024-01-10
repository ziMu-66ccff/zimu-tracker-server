import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Custom {
  @Prop({ type: Object, required: true })
  data: Record<string, any>;

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

export const CustomSchema = SchemaFactory.createForClass(Custom);
