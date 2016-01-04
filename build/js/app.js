!function i(t,n,o){function s(c,p){if(!n[c]){if(!t[c]){var r="function"==typeof require&&require;if(!p&&r)return r(c,!0);if(e)return e(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var h=n[c]={exports:{}};t[c][0].call(h.exports,function(i){var n=t[c][1][i];return s(n?n:i)},h,h.exports,i,t,n,o)}return n[c].exports}for(var e="function"==typeof require&&require,c=0;c<o.length;c++)s(o[c]);return s}({1:[function(i,t,n){var o=function(i,t){this.entity=i,this.radius=t,this.type="circle"};o.prototype.collidesWith=function(i){return"circle"==i.components.collision.type?this.collideCircle(i):"rect"==i.components.collision.type?this.collideRect(i):!1},o.prototype.collideCircle=function(i){var t=this.entity.components.physics.position,n=i.components.physics.position,o=this.radius,s=i.components.collision.radius,e={x:t.x-n.x,y:t.y-n.y},c=e.x*e.x+e.y*e.y,p=o+s;return p*p>c},o.prototype.collideRect=function(i){var t=function(i,t,n){return t>i?t:i>n?n:i},n=this.entity.components.physics.position,o=i.components.physics.position,s=i.components.collision.size,e={x:t(n.x,o.x,o.x+s.x),y:t(n.y,o.y,o.y+s.y)},c=this.radius,p={x:n.x-e.x,y:n.y-e.y},r=p.x*p.x+p.y*p.y;return c*c>r},n.CircleCollisionComponent=o},{}],2:[function(i,t,n){var o=function(i,t){this.entity=i,this.size=t,this.type="counter"};o.prototype.collidesWith=function(i){return"rect"==i.components.collision.type?this.collideCounter(i):!1},o.prototype.collideCircle=function(i){return i.components.collision.collideCounter(this.entity)},o.prototype.collideCounter=function(i){var t=this.entity.components.physics.position,n=i.components.physics.position,o=this.size,s=i.components.collision.size,e=t.x-o.x/2,c=t.x+o.x/2,p=t.y-o.y/2,r=t.y+o.y/2,l=n.x-s.x/2,h=n.x+s.x/2,a=n.y-s.y/2,y=n.y+s.y/2;return!(e>h||l>c||p>y||a>r)},n.CounterCollisionComponent=o},{}],3:[function(i,t,n){var o=function(i,t){this.entity=i,this.size=t,this.type="rect"};o.prototype.collidesWith=function(i){return"circle"==i.components.collision.type?this.collideCircle(i):"counter"==i.components.collision.type?!1:!1},o.prototype.collideCircle=function(i){return i.components.collision.collideRect(this.entity)},n.RectCollisionComponent=o},{}],4:[function(i,t,n){var o=function(i){this.entity=i,this.image=new Image,this.image.src="../site/img/flappy-bird-flat.png"};o.prototype.draw=function(i){var t=this.entity.components.physics.position;i.save(),i.translate(t.x,t.y),i.scale(1,-1),i.translate(-.05,-.05),i.imageSmoothingEnabled=!1,i.drawImage(this.image,0,0,.1,.1),i.restore()},n.BirdGraphicsComponent=o},{}],5:[function(i,t,n){var o=function(i){this.entity=i,this.size={x:.5,y:.05}};o.prototype.draw=function(i){var t=this.entity.components.physics.position;i.save(),i.translate(t.x,t.y),i.beginPath(),i.fillStyle="blue",i.fillRect(0,0,this.size.x,this.size.y),i.closePath(),i.restore()},n.CeilingGraphicsComponent=o},{}],6:[function(i,t,n){var o=function(i){this.entity=i,this.size={x:.01,y:1}};o.prototype.draw=function(i){var t=this.entity.components.physics.position;i.save(),i.translate(t.x,t.y),i.beginPath(),i.fillStyle="transparent",i.fillRect(0,0,this.size.x,this.size.y),i.closePath(),i.restore()},n.CounterGraphicsComponent=o},{}],7:[function(i,t,n){var o=function(i){this.entity=i,this.size={x:.5,y:.05}};o.prototype.draw=function(i){var t=this.entity.components.physics.position;i.save(),i.translate(t.x,t.y),i.beginPath(),i.fillStyle="blue",i.fillRect(0,0,this.size.x,this.size.y),i.closePath(),i.restore()},n.FloorGraphicsComponent=o},{}],8:[function(i,t,n){var o=function(i){this.entity=i,this.size={x:.1,y:1}};o.prototype.draw=function(i){var t=this.entity.components.physics.position;i.save(),i.translate(t.x,t.y),i.beginPath(),i.fillStyle="white",i.fillRect(0,0,this.size.x,this.size.y),i.closePath(),i.restore()},n.LeftWallGraphicsComponent=o},{}],9:[function(i,t,n){var o=function(i){this.entity=i,this.size={x:.1,y:.65}};o.prototype.draw=function(i){var t=this.entity.components.physics.position;i.save(),i.translate(t.x,t.y),i.beginPath(),i.fillStyle="green",i.fillRect(0,0,this.size.x,this.size.y),i.closePath(),i.restore()},n.PipeGraphicsComponent=o},{}],10:[function(i,t,n){var o=function(i){this.entity=i,this.position={x:0,y:0},this.velocity={x:0,y:0},this.acceleration={x:0,y:0}};o.prototype.update=function(i){this.velocity.x+=this.acceleration.x*i,this.velocity.y+=this.acceleration.y*i,this.position.x+=this.velocity.x*i,this.position.y+=this.velocity.y*i},n.PhysicsComponent=o},{}],11:[function(i,t,n){var o=i("../components/graphics/bird"),s=i("../components/physics/physics"),e=i("../components/collision/circle"),c=(i("../flappy_bird"),function(){var i=new s.PhysicsComponent(this);i.position.y=.5,i.acceleration.y=-2;var t=new o.BirdGraphicsComponent(this),n=new e.CircleCollisionComponent(this,.03);n.onCollision=this.onCollision.bind(this),this.components={physics:i,graphics:t,collision:n}});c.prototype.resetPosition=function(){this.components.physics.position.y=2},c.prototype.onCollision=function(i){this.components.physics.acceleration.y=0,this.components.physics.velocity.y=0},n.Bird=c},{"../components/collision/circle":1,"../components/graphics/bird":4,"../components/physics/physics":10,"../flappy_bird":17}],12:[function(i,t,n){var o=i("../components/physics/physics"),s=i("../components/collision/rect"),e=i("../components/graphics/ceiling"),c=(i("../flappy_bird"),function(){var i=new o.PhysicsComponent(this);i.position.x=-.25,i.position.y=1;var t=new e.CeilingGraphicsComponent(this),n=new s.RectCollisionComponent(this,t.size);n.onCollision=this.onCollision.bind(this),this.components={physics:i,collision:n,graphics:t}});c.prototype.onCollision=function(){document.getElementById("game-over").innerHTML="Ouch! Watch your head! Try again.",window.app.collision()},n.Ceiling=c},{"../components/collision/rect":3,"../components/graphics/ceiling":5,"../components/physics/physics":10,"../flappy_bird":17}],13:[function(i,t,n){var o=i("../components/physics/physics"),s=i("../components/collision/counter"),e=i("../components/graphics/counter"),c=(i("../flappy_bird"),function(){var i=new o.PhysicsComponent(this);i.position.x=-.125,i.position.y=0;var t=new e.CounterGraphicsComponent(this),n=new s.CounterCollisionComponent(this,t.size);n.onCollision=function(){window.app.updateScore()},this.components={physics:i,collision:n,graphics:t}});n.Counter=c},{"../components/collision/counter":2,"../components/graphics/counter":6,"../components/physics/physics":10,"../flappy_bird":17}],14:[function(i,t,n){var o=i("../components/physics/physics"),s=i("../components/collision/rect"),e=i("../components/graphics/floor"),c=(i("../flappy_bird"),function(){var i=new o.PhysicsComponent(this);i.position.x=-.25,i.position.y=-.05;var t=new e.FloorGraphicsComponent(this),n=new s.RectCollisionComponent(this,t.size);n.onCollision=this.onCollision.bind(this),this.components={physics:i,collision:n,graphics:t}});c.prototype.onCollision=function(){document.getElementById("game-over").innerHTML="Crash landing. Try again!",window.app.collision()},n.Floor=c},{"../components/collision/rect":3,"../components/graphics/floor":7,"../components/physics/physics":10,"../flappy_bird":17}],15:[function(i,t,n){var o=i("../components/physics/physics"),s=i("../components/collision/rect"),e=i("../components/graphics/left-wall"),c=(i("../flappy_bird"),function(){var i=new o.PhysicsComponent(this);i.position.x=-.7,i.position.y=0;var t=new e.LeftWallGraphicsComponent(this),n=new s.RectCollisionComponent(this,t.size);n.onCollision=this.onCollision.bind(this),this.components={physics:i,collision:n,graphics:t}});c.prototype.onCollision=function(){window.app.deletePipes()},n.LeftWall=c},{"../components/collision/rect":3,"../components/graphics/left-wall":8,"../components/physics/physics":10,"../flappy_bird":17}],16:[function(i,t,n){var o=i("../components/graphics/pipe"),s=i("../components/physics/physics"),e=i("../components/collision/rect"),c=(i("../systems/pipesystem"),i("../flappy_bird"),function(i,t){var n=new s.PhysicsComponent(this);n.position.x=i,n.position.y=t,n.velocity.x=-.75;var c=new o.PipeGraphicsComponent(this),p=new e.RectCollisionComponent(this,c.size);p.onCollision=this.onCollision.bind(this),this.components={physics:n,graphics:c,collision:p}});c.prototype.onCollision=function(i){"circle"===i.components.collision.type&&(document.getElementById("game-over").innerHTML="Birds don't like pipes. Remember that. Try again!",window.app.collision())},n.Pipe=c},{"../components/collision/rect":3,"../components/graphics/pipe":9,"../components/physics/physics":10,"../flappy_bird":17,"../systems/pipesystem":23}],17:[function(i,t,n){var o=i("./systems/graphics"),s=i("./systems/physics"),e=i("./systems/input"),c=i("./systems/pipesystem"),p=i("./systems/scoresystem"),r=i("./entities/bird"),l=(i("./entities/pipe"),i("./entities/ceiling")),h=i("./entities/floor"),a=i("./entities/left-wall"),y=i("./entities/counter"),m=function(){this.entities=[new r.Bird,new l.Ceiling,new h.Floor,new a.LeftWall,new y.Counter],this.graphics=new o.GraphicsSystem(this.entities),this.physics=new s.PhysicsSystem(this.entities),this.input=new e.InputSystem(this.entities),this.pipes=new c.PipeSystem(this.entities),this.scores=new p.ScoreSystem(this.entities,0)};m.prototype.run=function(){this.graphics.run(),this.physics.run(),this.input.run(),this.pipes.run()},m.prototype.stop=function(){this.pipes.stop()},m.prototype.inputOff=function(){this.input.stop()},m.prototype.updateScore=function(){this.scores.update()},m.prototype.collision=function(){window.app.stop(),document.getElementById("pipes-cleared").innerHTML=window.app.scores.realScore,$("#game-over-modal").removeClass("hide")},n.FlappyBird=m},{"./entities/bird":11,"./entities/ceiling":12,"./entities/counter":13,"./entities/floor":14,"./entities/left-wall":15,"./entities/pipe":16,"./systems/graphics":20,"./systems/input":21,"./systems/physics":22,"./systems/pipesystem":23,"./systems/scoresystem":24}],18:[function(i,t,n){var o=i("./flappy_bird");document.addEventListener("DOMContentLoaded",function(){document.getElementById("start-button").addEventListener("click",function(){app=new o.FlappyBird,app.run(),document.getElementById("start-button").style.display="none"}),document.getElementById("new-game").addEventListener("click",function(){$("#game-over-modal").addClass("hide"),app.entities[0].components.physics.position.y=.5,console.log(app.entities[0].components.physics.position.y),document.getElementById("start-button").style.display="block",app.entities.splice(this.entities.length-5,this.entities.length-1),console.log(app.entities)})})},{"./flappy_bird":17}],19:[function(i,t,n){var o=function(i){this.entities=i};o.prototype.tick=function(){for(var i=0;i<this.entities.length;i++){var t=this.entities[i];if(t.components.collision)for(var n=i+1;n<this.entities.length;n++){var o=this.entities[n];o.components.collision&&t.components.collision.collidesWith(o)&&(t.components.collision.onCollision&&t.components.collision.onCollision(o),o.components.collision.onCollision&&o.components.collision.onCollision(t))}}},n.CollisionSystem=o},{}],20:[function(i,t,n){var o=function(i){this.entities=i,this.canvas=document.getElementById("main-canvas"),this.context=this.canvas.getContext("2d")};o.prototype.run=function(){window.requestAnimationFrame(this.tick.bind(this))},o.prototype.tick=function(){(this.canvas.width!=this.canvas.offsetWidth||this.canvas.height!=this.canvas.offsetHeight)&&(this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.save(),this.context.translate(this.canvas.width/2,this.canvas.height),this.context.scale(this.canvas.height,-this.canvas.height);for(var i=0;i<this.entities.length;i++){var t=this.entities[i];t.components.graphics&&t.components.graphics.draw(this.context)}this.context.restore(),window.requestAnimationFrame(this.tick.bind(this))},n.GraphicsSystem=o},{}],21:[function(i,t,n){var o=function(i){this.entities=i,this.canvas=document.getElementById("main-canvas")};o.prototype.run=function(){this.canvas.addEventListener("click",this.onClick.bind(this))},o.prototype.onClick=function(){var i=this.entities[0];i.components.physics.velocity.y=.7},o.prototype.stop=function(){var i=this.entities[0];i.components.physics.velocity.y=0},n.InputSystem=o},{}],22:[function(i,t,n){var o=i("./collision"),s=function(i){this.entities=i,this.collisionSystem=new o.CollisionSystem(i)};s.prototype.run=function(){window.setInterval(this.tick.bind(this),1e3/60)},s.prototype.tick=function(){for(var i=0;i<this.entities.length;i++){var t=this.entities[i];t.components.physics&&t.components.physics.update(1/60)}this.collisionSystem.tick()},n.PhysicsSystem=s},{"./collision":19}],23:[function(i,t,n){var o=i("../entities/pipe"),s=function(i){this.entities=i};s.prototype.run=function(){this.pipeFunction=window.setInterval(function(){this.entities.push(new o.Pipe(1,.5*Math.random()+.35),new o.Pipe(1.7,Math.random()*-.5-0));for(var i=5;i<this.entities.length;i++)this.entities[i].components.physics.position.x<-1&&this.entities.splice(i,1)}.bind(this),2e3)},s.prototype.stop=function(){null!==this.pipeFunction&&(window.clearInterval(this.pipeFunction),this.pipeFunction=null);for(var i=5,t=this.entities.length;t>i;i++)this.entities[i].components.physics.velocity.x=0},n.PipeSystem=s},{"../entities/pipe":16}],24:[function(i,t,n){var o=(i("../entities/counter"),function(i,t){this.entities=i,this.score=t,this.realScore=0});o.prototype.update=function(){this.score++,this.realScore=Math.floor(this.score/9),document.getElementById("counter").innerHTML=this.realScore},o.prototype.reset=function(){this.score=0},n.ScoreSystem=o},{"../entities/counter":13}]},{},[18,17,4,9,10,1,3,11,16,12,14,15,13,20,21,22,19,23,24]);