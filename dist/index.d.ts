/// <reference types="node" resolution-mode="require"/>
import EventEmitter from "node:events";
import { z } from "zod";
import { Tracer, Meter } from "@opentelemetry/api";
import { SwitchCase, StepOptions, Roote, StepEvent, Iteration, IteratorFunction, StreamTransformer, RunnableParams } from "./types.js";
export default class Runnable {
    private name?;
    private state;
    private emitter;
    private steps;
    private iterator;
    private maxIterations;
    private nextStep;
    private nodes;
    private iteractionCount;
    private subEvents;
    private context;
    private tracer;
    private meter;
    private runDuration;
    private runId;
    private constructor();
    getState(): object;
    getEmitter(): EventEmitter;
    getTracer(): Tracer;
    getMeter(): Meter;
    private checkEnd;
    on(event: string | symbol, fnc: Function): Runnable;
    emit(event: string | symbol, ...args: any[]): boolean;
    private setStep;
    milestone(name: string): Runnable;
    pipe(fnc: Function | Runnable, options?: StepOptions): Runnable;
    assign(key: string | object, fnc?: Function | StepOptions, options?: StepOptions): Runnable;
    passThrough(fnc: Function, options?: StepOptions): Runnable;
    pick(keys: string | string[] | z.ZodType, options?: StepOptions): Runnable;
    branch(fnc: SwitchCase[], options?: StepOptions): Runnable;
    branchAll(fnc: SwitchCase[], options?: StepOptions): Runnable;
    parallel(fncs: (Function | Runnable)[], options?: StepOptions): Runnable;
    loop(params: {
        key: string;
        chain: Function;
    }, options?: StepOptions): Runnable;
    go(rootes: Roote[] | Roote, options?: StepOptions): Runnable;
    private getNow;
    private setSpanAttr;
    private _exec;
    private _pipe;
    private _pick;
    private _passThrough;
    private _assign;
    private _branch;
    private _parallel;
    private _loop;
    private _go;
    stepsIterator(): IteratorFunction;
    private emitStep;
    iterate(iteration?: Iteration): Promise<void>;
    private clone;
    run(state?: object, params?: RunnableParams): Promise<object>;
    stream(params?: RunnableParams): StreamTransformer;
    streamLog(state?: object, params?: RunnableParams): AsyncGenerator<StepEvent>;
    static from(steps: any[], params?: RunnableParams): Runnable;
    static init(params?: RunnableParams): Runnable;
}
