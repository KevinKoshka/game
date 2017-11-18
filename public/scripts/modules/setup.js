define([
  './spritesPath'
], function (spritesPath) {
  return function (PIXI, stage, renderer) {
    console.log(spritesPath)
    var resources = PIXI.loader.resources;
    PIXI.loader
      .add(spritesPath.mario)
      .add(spritesPath.marioSheet)
      .load(setup);

    function setup () {
      var sprite = new PIXI.Sprite(
        resources.mario_00.texture
      );
      sprite.position.set(96, 96);
      sprite.scale.set(1.5, 1.5);
      stage.addChild(sprite);

      renderer.render(stage);
    }
  }
});