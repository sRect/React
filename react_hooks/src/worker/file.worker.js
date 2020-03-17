// https://www.npmjs.com/package/worker-loader
// https://www.jianshu.com/p/d76def0a0e8f
// https://juejin.im/post/5dff8a26e51d4558105420ed

// 计算文件md5值

// this.importScripts("../../../node_modules/spark-md5.js");
import * as SparkMD5 from "spark-md5";

console.log(SparkMD5)
self.addEventListener("message", (e) => {
  console.log("Worker 线程===>", e.data);
  const file = e.data;

  // https://github.com/satazor/js-spark-md5
  let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
    // file = this.files[0],
    chunkSize = 2097152,                             // Read in chunks of 2MB
    chunks = Math.ceil(file.size / chunkSize),
    currentChunk = 0,
    spark = new SparkMD5.ArrayBuffer(),
    fileReader = new FileReader();

  fileReader.onload = function (e) {
    console.log('read chunk nr', currentChunk + 1, 'of', chunks);
    spark.append(e.target.result);                   // Append array buffer
    currentChunk++;

    if (currentChunk < chunks) {
      loadNext();
    } else {
      console.log('finished loading');
      let md5Val = spark.end();
      self.postMessage({ success: true, data: md5Val});
      self.close();
    }
  };

  fileReader.onerror = function () {
    console.warn('oops, something went wrong.');
    self.postMessage({ success: false, data: "文件MD5生成失败" });
    self.close();
  };

  function loadNext() {
    let start = currentChunk * chunkSize,
      end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;

    fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
  }

  loadNext();
});
