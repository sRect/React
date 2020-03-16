import React, { memo, useState, useEffect, useRef } from 'react';
import Worker from '../../worker/file.worker.js';

const WebWorker = () => {
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);

  const handleChange = e => {
    const file = e.target.files[0];
    if(file) {
      setFile(file);
    }
  }

  const getFileMd5 = (e) => {
    const file = e.target.files[0];

    if (file) {
      console.log("计算文件MD5...");
      const worker = new Worker();
      worker.postMessage(file);
      worker.addEventListener("message", (e) => {
        console.log("主线程", e)
      });

      worker.addEventListener("error", (error) => {
        console.log(error)
      })
    }
    
  }

  useEffect(() => {
    inputRef.current.addEventListener("change", getFileMd5, false);

    return () => {
      inputRef.current.removeEventListener("change", getFileMd5, false);
    }
  }, []);

  return (
    <div>
      <h2>web worker demo</h2>
      <input type="file" ref={inputRef} onChange={handleChange} />
    </div>
  );
}

export default memo(WebWorker);

/**
 * return new Promise(function (resolve, reject) {
      // https://github.com/satazor/js-spark-md5
      var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
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
          var md5Val = spark.end();
          resolve(md5Val);
        }
      };

      fileReader.onerror = function () {
        console.warn('oops, something went wrong.');
        reject('文件MD5生成失败');
      };

      function loadNext() {
        var start = currentChunk * chunkSize,
          end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;

        fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
      }

      loadNext();
    })
 */
