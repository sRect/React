import React, { Component } from 'react';

class TikTok extends Component {
  constructor() {
    super();

    this.state = {
      tId: null, // rAf
      url: null // video url
    }
  }

  getGray = (r, g, b) => { // 获取灰度值
    return 0.299 * r + 0.578 * g + 0.114 * b;
  }

  img2Text = (g) => { // 根据灰度生成相应字符  
    let text = ['Aa', 'Bv', 'Cc', 'Ds', '#', '&', '@', '$', '*', '?', ';', '^', '·', '·', '·', '·'];
    let i = g % 16 === 0 ? Number.parseInt(g / 16, 10) - 1 : Number.parseInt(g / 16, 10);
    return text[i];
  }

  handleDrawText = (imgDataArr, canvas, ctx2) => { // 图片转字符
    for (var h = 0; h < canvas.height; h += 8) {
      for (var w = 0; w < canvas.width; w += 6) {
        var index = (w + canvas.width * h) * 4;
        var r = imgDataArr[index + 0];
        var g = imgDataArr[index + 1];
        var b = imgDataArr[index + 2];
        var gray = this.getGray(r, g, b);
        ctx2.fillText(this.img2Text(gray), w, h + 8);
      }
    }
    canvas = null;
  }

  captureImage = (video) => { // 截取图片
    const canvas = document.createElement("canvas");
    const showCanvas = this.showCanvas;

    const ctx = canvas.getContext('2d');
    const ctx2 = showCanvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    showCanvas.width = canvas.width;
    showCanvas.height = canvas.height;


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height); // 获取图片信息数据
    let imgDataArr = imgData.data;

    this.handleDrawText(imgDataArr, canvas, ctx2);

    this.setState(() => {
      let tId = window.requestAnimationFrame(() => {
        this.captureImage(video);
      })
      return {
        tId
      }
    })
  }

  handleInputChange = (e) => { // input框change事件
    e.stopPropagation();
    e.preventDefault();

    const file = e.target.files[0];
    if (file) {
      URL.revokeObjectURL(this.state.url); // 一个是 url用完不用的话，用 URL.revokeObjectURL 释放资源

      this.setState(() => {
        let url = URL.createObjectURL(file);

        return {
          url
        }
      })

      // console.log(url) // blob:null/43271aa3-ce8a-402b-8652-71df6ddffe5c
      // this.video.src = this.state.url;
    } else {
      this.video.pause();
      window.cancelAnimationFrame(this.state.tId);
      return;
    }
  }

  handlePlay = () => { // video播放事件
    this.setState(() => {
      let tId = window.requestAnimationFrame(() => {
        this.captureImage(this.video);
      })
      return {
        tId
      }
    })
  }

  handlePause = () => { // video暂停事件
    if (this.state.tId) {
      window.cancelAnimationFrame(this.state.tId);
    }
  }

  render() {
    return (
      <div>
        <input ref={input => { this.input = input }} type="file" accept="video/mp4" onChange={this.handleInputChange} />
        <div className="clearfix">
          <video
            className="fl"
            ref={video => { this.video = video }}
            src={this.state.url}
            controls
            loop
            onPlay={this.handlePlay}
            onPause={this.handlePause}
            onEnded={this.handlePause}>
          </video>
          <canvas className="fl" ref={showCanvas => { this.showCanvas = showCanvas }}>您的浏览器暂不支持canvas</canvas>
        </div>
      </div>
    )
  }

  // componentDidMount() {


  // }
}

export default TikTok