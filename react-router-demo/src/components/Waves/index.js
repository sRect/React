import React, { Component } from 'react'

// y = A * sin(Bx + C) + D
// y = 波浪高度 * sin(波浪宽度 * x + 水平位移) + 上下位移

class Waves extends Component {

  drawSin = (ctx) => {

  }

  render() {
    return (
      <div>
        <canvas ref="canvas">您的浏览器暂不支持canvas</canvas>
      </div>
    )
  }

  componentDidMount() {
    const self = this;
    const canvas = self.refs.canvas;
    canvas.height = 500;
    canvas.width = 500;
    this.canvas = canvas;
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    const ctx = canvas.getContext('2d');
    this.drawSin(ctx);
  }
}

export default Waves