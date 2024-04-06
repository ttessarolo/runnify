import EventEmitter from "node:events";
import { Span, Tracer, Context } from "@opentelemetry/api";
import Runnable from "./index.js";

export { Runnable };

export enum StepType {
  START = "start",
  PIPE = "pipe",
  ASSIGN = "assign",
  PASSTHROUGH = "passThrough",
  PICK = "pick",
  BRANCH = "branch",
  PARALLEL = "parallel",
  LOOP = "loop",
  GOTO = "goto",
  MILESTONE = "milestone",
  END = "end"
}

export type SwitchCase = {
  if: Function;
  then: Function | Runnable;
};

export type StepOptions = {
  name?: string;
  tags?: string[];
  processAll?: boolean;
};

export type Roote = { to: string; if?: Function };
export type Step = {
  step?: any;
  type: StepType;
  fnc?: Function;
  key?: string;
  options?: StepOptions;
};

export type StepEvent = {
  id: string;
  name?: string;
  type: string;
  origin?: string;
  tags?: string[];
  state: { [key: string]: any };
};

export type Iteration = {
  value: Step | null;
  done: boolean;
};

export type IteratorFunction = {
  next: () => Iteration;
};

export type EventType = {
  name: string | symbol;
  listener: any;
};

export type RunnableParams = {
  name?: string;
  emitter?: EventEmitter;
  maxIterations?: number;
  nodes?: Map<string, number>;
  steps?: Step[];
  subEvents?: EventType[];
  highWaterMark?: number;
  context?: any;
};

export interface RunFncInterface {
  (
    state: object,
    params: { emit: (arg1: string | symbol, arg2: any) => void }
  ): Promise<object>;
}
