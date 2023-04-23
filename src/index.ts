type Resolver<R> = (params?: R) => void;
export class Stack {
  private isBlocked: boolean = true;
  private waiters: Resolver<any>[] = [];
  ready<R>(param?: R): Promise<R | undefined> {
    return new Promise((resolve: Resolver<R>) => {
      if (!this.isBlocked) {
        resolve(param);
      } else {
        this.waiters.push(resolve);
      }
    });
  }
  setReady<R>(param?: R): void {
    this.isBlocked = false;
    if (this.waiters.length === 0) return;
    while (this.waiters.length) {
      const waiter = this.waiters.shift() as Resolver<R>;
      waiter(param);
    }
  }
  setBlock(): void {
    this.isBlocked = true;
  }
}

export default Stack;
