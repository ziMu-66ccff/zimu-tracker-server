import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema()
export class UserAction {
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

  @Prop([
    raw({
      referrer: String,
      type: String,
    }),
  ])
  'origin-information': {
    referrer: string;
    type: string;
  };

  @Prop([
    raw({
      jumpType: String,
      pageInfo: raw({
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
      time: Number,
      timeFormat: String,
    }),
  ])
  'router-change-record': Array<{
    jumpType: string;
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
    time: number;
    timeFormat: string;
  }>;

  @Prop({ type: Object })
  'dom-behavior-record': Record<
    string,
    Array<{
      tagInfo: {
        id: string;
        classList: string[];
        tagName: string;
        text: string | null;
      };
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
      time: number;
      timeFormat: string;
    }>
  >;

  @Prop({ type: [Object] })
  'http-record': Array<{
    method: string;
    url: string | URL;
    body: Document | XMLHttpRequestBodyInit | null | undefined | ReadableStream;
    requestTime: number;
    requestTimeFormat: string;
    responseTime: number;
    responseTimeFormat: string;
    status: number;
    statusText: string;
    response?: any;
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

export const UserActionSchema = SchemaFactory.createForClass(UserAction);
