var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7da6a52f-e009-47fa-9b98-b5a8801a865f","4f88ac0a-6439-4dde-8c53-b8bb15cadaa2","475e28fd-9231-4c7d-ae76-7e159a65c264","a598a0c1-e5a7-40f4-bcd8-672e6a0367ae","630f8da0-3864-488d-b3b0-bc1da0341ca5","aca100f4-46fd-4707-abe7-f29b0b784b3d","8f60031c-564c-42bf-9479-970bd94e3c67"],"propsByKey":{"7da6a52f-e009-47fa-9b98-b5a8801a865f":{"name":"navel","sourceUrl":null,"frameSize":{"x":22,"y":23},"frameCount":1,"looping":true,"frameDelay":12,"version":"ds4TNXvtnNe9ealv2aqegPYefT9ThHjO","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":22,"y":23},"rootRelativePath":"assets/7da6a52f-e009-47fa-9b98-b5a8801a865f.png"},"4f88ac0a-6439-4dde-8c53-b8bb15cadaa2":{"name":"naver","sourceUrl":null,"frameSize":{"x":22,"y":23},"frameCount":1,"looping":true,"frameDelay":12,"version":"FmLkr7i5g2lKemM99bt0FqK9lVRXrKgF","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":22,"y":23},"rootRelativePath":"assets/4f88ac0a-6439-4dde-8c53-b8bb15cadaa2.png"},"475e28fd-9231-4c7d-ae76-7e159a65c264":{"name":"naveb","sourceUrl":null,"frameSize":{"x":22,"y":23},"frameCount":1,"looping":true,"frameDelay":12,"version":"IpIuwFm9BT0mhej5_qztMJ89eqGMCPAv","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":22,"y":23},"rootRelativePath":"assets/475e28fd-9231-4c7d-ae76-7e159a65c264.png"},"a598a0c1-e5a7-40f4-bcd8-672e6a0367ae":{"name":"nave","sourceUrl":null,"frameSize":{"x":22,"y":23},"frameCount":1,"looping":true,"frameDelay":12,"version":"g4wxqrr8NtjeXU2qDDUtnoEU0.uNwX5x","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":22,"y":23},"rootRelativePath":"assets/a598a0c1-e5a7-40f4-bcd8-672e6a0367ae.png"},"630f8da0-3864-488d-b3b0-bc1da0341ca5":{"name":"obni","sourceUrl":null,"frameSize":{"x":26,"y":26},"frameCount":1,"looping":true,"frameDelay":12,"version":"23L.aQwWUxPjRKr10pCtvK12VwX8QxHx","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":26,"y":26},"rootRelativePath":"assets/630f8da0-3864-488d-b3b0-bc1da0341ca5.png"},"aca100f4-46fd-4707-abe7-f29b0b784b3d":{"name":"obni2","sourceUrl":null,"frameSize":{"x":26,"y":26},"frameCount":1,"looping":true,"frameDelay":12,"version":"cTMnZf3jj9pciYFiu9Pd2DXOFGFmcKHX","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":26,"y":26},"rootRelativePath":"assets/aca100f4-46fd-4707-abe7-f29b0b784b3d.png"},"8f60031c-564c-42bf-9479-970bd94e3c67":{"sourceSize":{"x":55,"y":55},"frameSize":{"x":55,"y":55},"frameCount":1,"frameDelay":12,"name":"tierra","sourceUrl":null,"size":6747,"version":"hzdazrfAzmmn6moxL4GP9H0fpKHfX5UM","categories":[""],"looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/8f60031c-564c-42bf-9479-970bd94e3c67.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//variables
var nave;
var obni1,obni2,obni3,obni4,obni5,obni6,obni7,obni8,obni;
var meta;
var l1,l2;
var gameState = ("serve")
//score
var score = 0;

//sprite
nave = createSprite(200,390,10,10);
nave.setAnimation("nave");
obni1 = createSprite(65,80,20,20);
obni1.setAnimation("obni");
obni2 = createSprite(65,140,20,20);
obni2.setAnimation("obni2");
obni3 = createSprite(65,200,20,20);
obni3.setAnimation("obni");
obni4 = createSprite(65,260,20,20);
obni4.setAnimation("obni2");
obni5 = createSprite(65,320,20,20);
obni5.setAnimation("obni");
obni6 = createSprite(335,110,20,20);
obni6.setAnimation("obni2");
obni7 = createSprite(335,170,20,20);
obni7.setAnimation("obni");
obni8 = createSprite(335,230,20,20);
obni8.setAnimation("obni2");
obni9 = createSprite(335,290,20,20);
obni9.setAnimation("obni");
l1 = createSprite(50,200,5,400);
l1.shapeColor = "grey";
l2 = createSprite(350,200,5,400);
l2.shapeColor = "grey";
meta = createSprite(200,25,50,30);
meta.setAnimation("tierra");

function draw() {
  background("black");
  
  textSize(20);
  text("intentos : " + score,239,30)
  
  //funciones
  if(gameState==("serve")){
    textSize(20);
    text("bienvenido al juego",115,200)
    if(keyDown("space")){
      obni1.velocityX = 14;
      obni2.velocityX = 14;
      obni3.velocityX = 14;
      obni4.velocityX = 14;
      obni5.velocityX = 14;
      obni6.velocityX = -14;
      obni7.velocityX = -14;
      obni8.velocityX = -14;
      obni9.velocityX = -14;
      gameState=("play")
    }
    
  }
  if(gameState==("play")){
    if(keyDown("w")){
      nave.y = nave.y -5;
    }
    if(keyDown("s")){
      nave.y = nave.y +5;
    }
    if(keyDown("a")){
      nave.x = nave.x -5;
    }
    if(keyDown("d")){
      nave.x = nave.x +5;
    }
    if(nave.isTouching(meta)){
      gameState="end";
    }
  }
  
  if(gameState=="end"){
   obni1.velocityX = 0;
   obni2.velocityX = 0;
   obni3.velocityX = 0;
   obni4.velocityX = 0;
   obni5.velocityX = 0;
   obni6.velocityX = 0;
   obni7.velocityX = 0;
   obni8.velocityX = 0;
   obni9.velocityX = 0; 
   if (nave.isTouching(meta)) {
     textSize(20);
     text("AS GANADO", 150, 200);
   }
  }
  
  if(nave.isTouching(obni1)||nave.isTouching(obni2)||nave.isTouching(obni3)||
  nave.isTouching(obni4)||nave.isTouching(obni5)||nave.isTouching(obni6)||
  nave.isTouching(obni7)||nave.isTouching(obni8)||nave.isTouching(obni9)){
    score = score +1
  }
  
  if (nave.isTouching(obni1)||nave.isTouching(obni2)||nave.isTouching(obni3)||
  nave.isTouching(obni4)||nave.isTouching(obni5)||nave.isTouching(obni6)||
  nave.isTouching(obni7)||nave.isTouching(obni8)||nave.isTouching(obni9)) {
    playSound("assets/category_explosion/8bit_explosion.mp3", false);
  }
  
  if(nave.isTouching(obni1)||nave.isTouching(obni2)||nave.isTouching(obni3)||
  nave.isTouching(obni4)||nave.isTouching(obni5)||nave.isTouching(obni6)||
  nave.isTouching(obni7)||nave.isTouching(obni8)||nave.isTouching(obni9)){
    nave.x=200;
    nave.y=390;
  }
  
  //baunce o collide
  createEdgeSprites();
  nave.collide(topEdge);
  nave.collide(bottomEdge);
  nave.collide(l1);
  nave.collide(l2);
  obni1.bounceOff(l1);
  obni2.bounceOff(l1);
  obni3.bounceOff(l1);
  obni4.bounceOff(l1);
  obni5.bounceOff(l1);
  obni6.bounceOff(l1);
  obni7.bounceOff(l1);
  obni8.bounceOff(l1);
  obni9.bounceOff(l1);
  obni1.bounceOff(l2);
  obni2.bounceOff(l2);
  obni3.bounceOff(l2);
  obni4.bounceOff(l2);
  obni5.bounceOff(l2);
  obni6.bounceOff(l2);
  obni7.bounceOff(l2);
  obni8.bounceOff(l2);
  obni9.bounceOff(l2);
  
  //animation
  if(keyDown("w")){
    nave.setAnimation("nave");
  }
  if(keyDown("d")){
    nave.setAnimation("naver");
  }
  if(keyDown("a")){
    nave.setAnimation("navel");
  }
  if(keyDown("s")){
    nave.setAnimation("naveb");
  }
  
  drawSprites()
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
