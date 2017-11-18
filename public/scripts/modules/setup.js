define(function () {
  return function (PIXI) {
    PIXI.loader
      .add('../../assets/images/mario_00.png')
      .load(setup);

    function setup () {
      var sprite = new PIXI.Sprite(
        PIXI.loader.resources['../../assets/images/mario_00.png'].texture
      )
      alert("alldone");
    }
  }
});