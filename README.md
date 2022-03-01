# js-stack-utility

**used to define a stack **

## **Usage**

### step first

`npm install --save js-stack-utility`

### step second

`import defineStack from 'js-stack-utility'`

`context.testStack = new defineStack()`

## Methods introduction

​		`context.testStack.ready()`

​		等待一个阻塞完成

​		`context.testStack.setReady()`

​		释放一个阻塞

```js
async function boot(){
    //do something immiditely
    await context.testStack.ready()
    //dosomething after timestamp A
}

//anywhere timestamp A
context.testStack.setReady()
```

​		`context.testStack.setBlock()`

​		恢复一个阻塞

​		`context.testStack.destory()`

​		销毁该阻塞实例

