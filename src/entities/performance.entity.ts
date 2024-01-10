import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema()
export class Performance {
  @Prop(raw({ name: String, value: Number, rating: String }))
  FCP: {
    name: string;
    value: number;
    rating: 'good' | 'needs-improvement' | 'poor';
  };

  @Prop(raw({ name: String, value: Number, rating: String }))
  LCP: {
    name: string;
    value: number;
    rating: 'good' | 'needs-improvement' | 'poor';
  };

  @Prop(raw({ name: String, value: Number, rating: String }))
  FID: {
    name: string;
    value: number;
    rating: 'good' | 'needs-improvement' | 'poor';
  };

  @Prop(raw({ name: String, value: Number, rating: String }))
  CLS: {
    name: string;
    value: number;
    rating: 'good' | 'needs-improvement' | 'poor';
  };

  @Prop(
    raw({
      DNS: raw({ start: Number, end: Number, value: Number }),
      SSL: raw({ start: Number, end: Number, value: Number }),
      TCP: raw({ start: Number, end: Number, value: Number }),
      TTFB: raw({ start: Number, end: Number, value: Number }),
      Trans: raw({ start: Number, end: Number, value: Number }),
      FP: raw({ start: Number, end: Number, value: Number }),
      DomParse: raw({ start: Number, end: Number, value: Number }),
      TTI: raw({ start: Number, end: Number, value: Number }),
      DomReady: raw({ start: Number, end: Number, value: Number }),
      Res: raw({ start: Number, end: Number, value: Number }),
      Load: raw({ start: Number, end: Number, value: Number }),
    }),
  )
  navigationTiming: {
    DNS: { start: number; end: number; value: number };
    SSL: { start: number; end: number; value: number };
    TCP: { start: number; end: number; value: number };
    TTFB: { start: number; end: number; value: number };
    Trans: { start: number; end: number; value: number };
    FP: { start: number; end: number; value: number };
    DomParse: { start: number; end: number; value: number };
    TTI: { start: number; end: number; value: number };
    DomReady: { start: number; end: number; value: number };
    Res: { start: number; end: number; value: number };
    Load: { start: number; end: number; value: number };
  };

  @Prop([
    raw({
      name: String,
      initiatorType: String,
      transferSize: Number,
      start: Number,
      end: Number,
      DNS: Number,
      TCP: Number,
      SSL: Number,
      TTFB: Number,
      Trans: Number,
    }),
  ])
  'resource-flow': Array<{
    name: string;
    initiatorType: string;
    transferSize: number;
    start: number;
    end: number;
    DNS: number;
    TCP: number;
    SSL: number;
    TTFB: number;
    Trans: number;
  }>;

  @Prop(
    raw({
      cacheHitQuantity: Number,
      noCacheHitQuantity: Number,
      cacheHitRate: String,
    }),
  )
  'cache-data': {
    cacheHitQuantity: number;
    noCacheHitQuantity: number;
    cacheHitRate: string;
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

export const PerformanceSchema = SchemaFactory.createForClass(Performance);
