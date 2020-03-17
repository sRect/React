import React, { memo, useState, useEffect, useRef } from 'react';
import Worker from '../../worker/file.worker.js';

const WebWorker = () => {
  const [file, setFile] = useState({ name: "", size: 0 });
  const [fileMd5, setFileMd5] = useState();
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
      const worker = new Worker({
        inline: true
      });
      worker.postMessage(file);
      worker.addEventListener("message", (e) => {
        const { success, data } = e.data;
        if (success) {
          console.log("主线程,获取到文件MD5值：", data);
          setFileMd5(data);
        }

        worker.terminate();
      });

      worker.addEventListener("error", (error) => {
        console.log(error);
        worker.terminate();
      });
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
      <p>filename: {file.name}</p>
      <p>filesize: {(file.size / 1024).toFixed(2)}kb</p>
      <p>fileMd5: {fileMd5}</p>
      <input type="file" ref={inputRef} onChange={handleChange} />
    </div>
  );
}

export default memo(WebWorker);

