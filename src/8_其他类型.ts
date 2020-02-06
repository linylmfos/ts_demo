function fn():void {
     
}
let v= fn();

/**
 * 当一个函数永远不可能执行return的时候， 返回的就是newver, 与void不同， 
 * void是执行了return, 只是没有值， never是不会执行return, 比如抛出错误，
 *  导致函数终止执行
 */

 function ffn(): never {
     throw new Error('error')
 }