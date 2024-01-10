import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema()
export class PV {
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
  pageInfo: {
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

  @Prop([
    raw({
      referrer: String,
      type: String,
    }),
  ])
  originInformation: {
    referrer: string;
    type: string;
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

export const PVSchema = SchemaFactory.createForClass(PV);
