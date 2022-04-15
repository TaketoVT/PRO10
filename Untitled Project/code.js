var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["51ac9ea0-8cb9-4a01-95c1-89b2685e8c29","6a3e662c-ceec-4a85-a24a-1c6e56790fb1","fc7ed943-da92-40c8-a6d6-969f661e3b05","cd66794d-574f-449c-8b8e-5616af3d81c3","3d87e5e5-da13-4838-9c65-23c252de1a80","2f462d29-84b2-4e01-aef3-7407bbae3629","ac82c59b-43f3-43f2-91b7-c444f550cdf0"],"propsByKey":{"51ac9ea0-8cb9-4a01-95c1-89b2685e8c29":{"name":"boyfriend.png_1","sourceUrl":null,"frameSize":{"x":73,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"BREvjFDd2iRpUpDv3Oc5k2oxs9MZBIV3","loadedFromSource":true,"saved":true,"sourceSize":{"x":73,"y":49},"rootRelativePath":"assets/51ac9ea0-8cb9-4a01-95c1-89b2685e8c29.png"},"6a3e662c-ceec-4a85-a24a-1c6e56790fb1":{"name":"girlfriend.png_1","sourceUrl":"assets/v3/animations/6eHPrefMfo3-BLAi6i7X57z3n0i1VmqHWSty63ADfiU/6a3e662c-ceec-4a85-a24a-1c6e56790fb1.png","frameSize":{"x":57,"y":51},"frameCount":1,"looping":true,"frameDelay":4,"version":"L.ysxcdtnB6Axx0Ij2HTgpUSrxEFqwYT","loadedFromSource":true,"saved":true,"sourceSize":{"x":57,"y":51},"rootRelativePath":"assets/v3/animations/6eHPrefMfo3-BLAi6i7X57z3n0i1VmqHWSty63ADfiU/6a3e662c-ceec-4a85-a24a-1c6e56790fb1.png"},"fc7ed943-da92-40c8-a6d6-969f661e3b05":{"name":"mom.png_1","sourceUrl":"assets/v3/animations/6eHPrefMfo3-BLAi6i7X57z3n0i1VmqHWSty63ADfiU/fc7ed943-da92-40c8-a6d6-969f661e3b05.png","frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":4,"version":"zu_qujyCedZXh6EtRSNXurau4Czl3Ucu","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/v3/animations/6eHPrefMfo3-BLAi6i7X57z3n0i1VmqHWSty63ADfiU/fc7ed943-da92-40c8-a6d6-969f661e3b05.png"},"cd66794d-574f-449c-8b8e-5616af3d81c3":{"name":"dad.png_1","sourceUrl":"assets/v3/animations/6eHPrefMfo3-BLAi6i7X57z3n0i1VmqHWSty63ADfiU/cd66794d-574f-449c-8b8e-5616af3d81c3.png","frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":4,"version":"hJ6fkD468GHKCENXBOv9alhgApjUqwT8","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/v3/animations/6eHPrefMfo3-BLAi6i7X57z3n0i1VmqHWSty63ADfiU/cd66794d-574f-449c-8b8e-5616af3d81c3.png"},"3d87e5e5-da13-4838-9c65-23c252de1a80":{"name":"sempai.png_1","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"2LgGDYn7m1OcwsEXSLYCfPaUCM.Oe62L","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/3d87e5e5-da13-4838-9c65-23c252de1a80.png"},"2f462d29-84b2-4e01-aef3-7407bbae3629":{"name":"lemon.png_1","sourceUrl":"assets/v3/animations/6eHPrefMfo3-BLAi6i7X57z3n0i1VmqHWSty63ADfiU/2f462d29-84b2-4e01-aef3-7407bbae3629.png","frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":4,"version":"7.Rqu4CiLxMKvutsEA3MmgBxs6BEvc4L","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/v3/animations/6eHPrefMfo3-BLAi6i7X57z3n0i1VmqHWSty63ADfiU/2f462d29-84b2-4e01-aef3-7407bbae3629.png"},"ac82c59b-43f3-43f2-91b7-c444f550cdf0":{"name":"bf_and_gf.png_1","sourceUrl":"assets/v3/animations/6eHPrefMfo3-BLAi6i7X57z3n0i1VmqHWSty63ADfiU/ac82c59b-43f3-43f2-91b7-c444f550cdf0.png","frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":4,"version":"vrj7UJ0FnMXsrHI7whpIio3yFQ2ey5lQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/v3/animations/6eHPrefMfo3-BLAi6i7X57z3n0i1VmqHWSty63ADfiU/ac82c59b-43f3-43f2-91b7-c444f550cdf0.png"}}};
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

var boyfriend;
var girlfriend;
var mom, dad, sempai,lemon;



boyfriend = createSprite(200,390,20,20);
boyfriend.setAnimation("boyfriend.png_1");
boyfriend.scale = 0.60;
girlfriend = createSprite(200,20,20,20);
girlfriend.setAnimation("girlfriend.png_1");
girlfriend.scale = 0.75;
mom = createSprite(10,75,20,20);
mom.setAnimation("mom.png_1");
mom.scale = 0.75;
dad = createSprite(390,125,20,20);
dad.setAnimation("dad.png_1");
dad.scale = 0.75;
sempai = createSprite(10,200,20,20);
sempai.setAnimation("sempai.png_1");
sempai.scale = 0.75;
lemon = createSprite(390,275,20,20);
lemon.setAnimation("lemon.png_1");
lemon.scale = 0.75;


mom.velocityX = 6
dad.velocityX = -6
sempai.velocityX = 6
lemon.velocityX =-6


createEdgeSprites()




function draw() {
  
  
  if (boyfriend.isTouching(girlfriend)) {
  boyfriend.destroy(girlfriend);
  girlfriend.setAnimation("bf_and_gf.png_1")
  girlfriend.scale= 1;
  mom.velocityX = 0
  dad.velocityX = 0
  sempai.velocityX = 0
  lemon.velocityX =0
}
  
  background("lightblue")
  drawSprites()
  
  mom.bounceOff(leftEdge);
  mom.bounceOff(rightEdge);
  
  dad.bounceOff(leftEdge);
  dad.bounceOff(rightEdge);
  
  sempai.bounceOff(leftEdge);
  sempai.bounceOff(rightEdge);
  
  lemon.bounceOff(leftEdge);
  lemon.bounceOff(rightEdge);
  
  if (keyDown("UP_ARROW")) {
    boyfriend.y -= 3;
  }
  if (keyDown("DOWN_ARROW")) {
    boyfriend.y += 3;
  }
  
if (boyfriend.isTouching(mom)||
    boyfriend.isTouching(dad)||
    boyfriend.isTouching(sempai)||
    boyfriend.isTouching(lemon))
    {
    boyfriend.y = 390;
  }
  
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
