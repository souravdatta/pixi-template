'use strict';

var app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
document.body.appendChild(app.view);
var bunny = PIXI.Sprite.fromImage('resources/bunny.png');
bunny.anchor.set(0.5);
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

app.ticker.add(function (delta) {
  bunny.rotation += delta / 40.0;
});