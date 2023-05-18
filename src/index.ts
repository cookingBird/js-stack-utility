type Resolver<R> = (params: R) => void;
export class Stack<T> {
  private isBlocked: boolean = true;
  private waiters: Resolver<T>[] = [];
  private payload: T;
  ready(): Promise<T> {
    return new Promise((resolve: Resolver<T>) => {
      if (!this.isBlocked) {
        resolve(this.payload);
      } else {
        this.waiters.push(resolve);
      }
    });
  }
  setReady(param: T): void {
    this.isBlocked = false;
    this.payload = param;
    if (this.waiters.length === 0) return;
    while (this.waiters.length) {
      const waiter = this.waiters.shift() as Resolver<T>;
      waiter(param);
    }
  }
  setBlock(): void {
    this.isBlocked = true;
  }
}

export default Stack;
