type Resolver<R> = (params: R) => void;
export class Stack<T | undefined> {
  private isBlocked: boolean = true;
  private waiters: Resolver<T | undefined>[] = [];
  private payload: T | undefined;
  ready(): Promise<T | undefined> {
    return new Promise((resolve: Resolver<T | undefined>) => {
      if (!this.isBlocked) {
        resolve(this.payload);
      } else {
        this.waiters.push(resolve);
      }
    });
  }
  setReady(param?: T): void {
    this.isBlocked = false;
    this.payload = param;
    if (this.waiters.length === 0) return;
    while (this.waiters.length) {
      const waiter = this.waiters.shift() as Resolver<T | undefined>;
      waiter(param);
    }
  }
  setBlock(): void {
    this.isBlocked = true;
  }
}

export default Stack;
