export declare class Stack {
    private isBlocked;
    private waiters;
    ready<R>(param?: R): Promise<R | undefined>;
    setReady<R>(param?: R): void;
    setBlock(): void;
}
export default Stack;
//# sourceMappingURL=index.d.ts.map