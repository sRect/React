// https://www.npmjs.com/package/worker-loader
// https://www.jianshu.com/p/d76def0a0e8f
// https://juejin.im/post/5dff8a26e51d4558105420ed

// 计算文件md5值

// this.importScripts("../../../node_modules/spark-md5.js");
import * as SparkMD5 from "spark-md5";

console.log(SparkMD5)
self.addEventListener("message", (e) => {
  console.log("Worker 线程===>", e.data);
  self.postMessage("hello worker");

  self.close();
});
