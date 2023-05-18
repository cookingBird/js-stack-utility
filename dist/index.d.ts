export declare class Stack<T> {
    private isBlocked;
    private waiters;
    private payload;
    ready(): Promise<T>;
    setReady(param: T): void;
    setBlock(): void;
}
export default Stack;
//# sourceMappingURL=index.d.ts.map