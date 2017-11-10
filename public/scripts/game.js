require(["pixi.min"], function(PIXI){
  var type = "WebGL"
  if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
  }
  
  PIXI.utils.sayHello(type);
});

