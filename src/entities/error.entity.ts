import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema()
export class Error {
  @Prop({ type: String, required: true })
  errorUid: string;

  @Prop({ type: String, required: true })
  mechanismType: string;

  @Prop({ type: String, required: true })
  type: string;

  @Prop({ type: String })
  errorMessage: string;

  @Prop({ type: Object })
  meta: Record<string, any>;

  @Prop([
    raw({ fileName: String, functionName: String, row: Number, col: Number }),
  ])
  errorStack?: Array<{
    fileName?: string;
    functionName?: string;
    row?: number;
    col?: number;
  }>;

  @Prop([
    raw({
      name: String,
      page: String,
      value: Object,
      time: Number,
      timeFormat: String,
    }),
  ])
  hehaviorStack?: Array<{
    name: string;
    page: string;
    value: Record<string, any>;
    time: number;
    timeFormat: string;
  }>;

  @Prop(
    raw({
      href: String,
      origin: String,
      protocol: String,
      host: String,
      hostname: String,
      port: String,
      pathname: String,
      search: String,
      hash: String,
      title: String,
      language: String,
      userAgent: Object,
      winScreen: String,
      docScreen: String,
    }),
  )
  'page-information': {
    href: string;
    origin: string;
    protocol: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    hash: string;
    title: string;
    language: string;
    userAgent: Record<string, any>;
    winScreen: string;
    docScreen: string;
  };

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

export const ErrorSchema = SchemaFactory.createForClass(Error);
