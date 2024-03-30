export type Primitive = number | string | boolean | Date;
export type FunctionEncodeSpec = (value: any, index?: number, array?: any[]) => Primitive;
export type PrimitiveEncodeSpec = Primitive | FunctionEncodeSpec;