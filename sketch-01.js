const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#000000';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "rgba(50, 252, 5, 0.1)"
    context.lineWidth = width * 0.001;
    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;

    const off = width * 0.02;

    let x, y;

    // TELA VERDE
    for(let i = 0; i < 2000; i++){
      context.beginPath();
      context.arc(Math.random() * 1000, Math.random() * 1000, Math.random() * 1000, 0, Math.PI * 2);
      //context.rect(x, y, w, h);
      context.stroke();
    }

    // for(let i = 0; i< 5; i++){
    //     for(let j = 0; j < 5; j++){
    //         x = 100 + (w + gap) * i;
    //         y = 100 + (h + gap) * j;

    //         context.beginPath();
    //         context.arc(Math.random() * 1000, Math.random() * 1000, Math.random() * 20, 0, Math.PI * 2);
    //         //context.rect(x, y, w, h);
    //         context.stroke();

    //         // if(Math.random() > 0.5){
    //         //   context.beginPath();
    //         //     context.arc(x, y, Math.random() * 20, 0, Math.PI * 2);
    //         //     //context.rect(x + off / 2, y + off / 2, w - off, h - off);
    //         //   context.stroke();
    //         // }
    //     }
    
    // }
  };
};

canvasSketch(sketch, settings);
