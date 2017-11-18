require(
  [
    'pixi.min',
    './modules/setup'
  ], function (
    PIXI,
    Setup
  ) {
  /*
  - Crea renderer y elige automáticamente si usar WebGL o Canvas Drawing API, por lo
  general usa WebGL pero si quisiera usar Canvas:
  + renderer = new PIXI.CanvasRenderer(256, 256);

  - O se puede forzar WebGL:
  + renderer = new PIXI.WebGLRenderer(256, 256);

  - El antialias suaviza los bordes de las primitivas 3D.
  - La transparencia es la del fondo del canvas.
  - La resolución hace fácil trabajar con distintas resoluciones y densidades de pixeles.

  */
  var renderer = PIXI.autoDetectRenderer(256, 256,
    {
      antialias: false,
      transparent: false,
      resolution: 1
    });
  //Añade el canvas al HTML
  document.body.appendChild(renderer.view);
  //Container del objeto stage
  var stage = new PIXI.Container();
  //El renderer renderiza el stage
  renderer.render(stage);

  Setup(PIXI);

});

