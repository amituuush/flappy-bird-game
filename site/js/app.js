(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var CircleCollisionComponent = function(entity, radius) {
    this.entity = entity;
    this.radius = radius;
    this.type = 'circle';
};


CircleCollisionComponent.prototype.collidesWith = function(entity) {
    if (entity.components.collision.type == 'circle') {
        return this.collideCircle(entity);
    }
    else if (entity.components.collision.type == 'rect') {
        return this.collideRect(entity);
    }
    return false;
};

CircleCollisionComponent.prototype.collideCircle = function(entity) {
    var positionA = this.entity.components.physics.position;
    var positionB = entity.components.physics.position;

    var radiusA = this.radius;
    var radiusB = entity.components.collision.radius;

    var diff = {x: positionA.x - positionB.x,
                y: positionA.y - positionB.y};

    var distanceSquared = diff.x * diff.x + diff.y * diff.y;
    var radiusSum = radiusA + radiusB;

    return distanceSquared < radiusSum * radiusSum;
};

CircleCollisionComponent.prototype.collideRect = function(entity) {
    var clamp = function(value, low, high) {
        if (value < low) {
            return low;
        }
        if (value > high) {
            return high;
        }
        return value;
    };

    var positionA = this.entity.components.physics.position;
    var positionB = entity.components.physics.position;
    var sizeB = entity.components.collision.size;

    var closest = {
        x: clamp(positionA.x, positionB.x,
                 positionB.x + sizeB.x),
        y: clamp(positionA.y, positionB.y,
                 positionB.y + sizeB.y)
    };


    var radiusA = this.radius;

    var diff = {x: positionA.x - closest.x,
                y: positionA.y - closest.y};

    var distanceSquared = diff.x * diff.x + diff.y * diff.y; // calculates a^2 + b^2. distanceSquared now represents c^2, which is the distance between the center of the circle and the closest point of the pipe to the circle.
    return distanceSquared < radiusA * radiusA;
    //we compare c^2, the distance between the center of the circle and the closest point of the pipe, to the radius^2. If the radius^2 is greater than c^2, then the center of the circle is closer to the closest point of the pipe than the distance of the radius. This means there is a collision between circle and pipe.
};

exports.CircleCollisionComponent = CircleCollisionComponent;

},{}],2:[function(require,module,exports){
var RectCollisionComponent = function(entity, size) {
    this.entity = entity;
    this.size = size;
    this.type = 'rect';
};

RectCollisionComponent.prototype.collidesWith = function(entity) {
    if (entity.components.collision.type == 'circle') {
        return this.collideCircle(entity);
    }
    // else if (entity.components.collision.type == 'rect') {
    //     return this.collideRect(entity);
    // }
    return false;
};

RectCollisionComponent.prototype.collideCircle = function(entity) {
    return entity.components.collision.collideRect(this.entity);
};

// RectCollisionComponent.prototype.collideRect = function(entity) {
//     var positionA = this.entity.components.physics.position;
//     var positionB = entity.components.physics.position;
//
//     var sizeA = this.size;
//     var sizeB = entity.components.collision.size;
//
//     var leftA = positionA.x - sizeA.x / 2;
//     var rightA = positionA.x + sizeA.x / 2;
//     var bottomA = positionA.y - sizeA.y / 2;
//     var topA = positionA.y + sizeA.y / 2;
//
//     var leftB = positionB.x - sizeB.x / 2;
//     var rightB = positionB.x + sizeB.x / 2;
//     var bottomB = positionB.y - sizeB.y / 2;
//     var topB = positionB.y + sizeB.y / 2;
//
//     return !(leftA > rightB || leftB > rightA ||
//              bottomA > topB || bottomB > topA);
// };

exports.RectCollisionComponent = RectCollisionComponent;

},{}],3:[function(require,module,exports){
var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
};


BirdGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;
    
    context.save();
    context.translate(position.x, position.y);
    context.beginPath();
    context.arc(0, 0, 0.02, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
    context.restore();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;

},{}],4:[function(require,module,exports){
var CeilingGraphicsComponent = function(entity) {
    this.entity = entity;
    this.size = {x: 0.5, y: 0.05};
};

CeilingGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;

    context.save();
    context.translate(position.x, position.y);
    context.beginPath();
    context.fillStyle = "blue";
    context.fillRect(0, 0, this.size.x, this.size.y);
    context.closePath();
    context.restore();

};

exports.CeilingGraphicsComponent = CeilingGraphicsComponent;

},{}],5:[function(require,module,exports){
var FloorGraphicsComponent = function(entity) {
    this.entity = entity;
    this.size = {x: 0.5, y: 0.05};
};

FloorGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;

    context.save();
    context.translate(position.x, position.y);
    context.beginPath();
    context.fillStyle = "blue";
    context.fillRect(0, 0, this.size.x, this.size.y);
    context.closePath();
    context.restore();

};

exports.FloorGraphicsComponent = FloorGraphicsComponent;

},{}],6:[function(require,module,exports){
var PipeGraphicsComponent = function(entity) {
    this.entity = entity;
    this.size = {x: 0.1, y: 0.65};
};

PipeGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;
    
    context.save();
    context.translate(position.x, position.y);
    context.beginPath();
    context.fillStyle = "green";
    context.fillRect(0, 0, this.size.x, this.size.y);
    context.closePath();
    context.restore();


};

exports.PipeGraphicsComponent = PipeGraphicsComponent;


},{}],7:[function(require,module,exports){
var PhysicsComponent = function(entity) {
    this.entity = entity;

    this.position = {
        x: 0,
        y: 0
    };
    this.velocity = {
        x: 0,
        y: 0
    };
    this.acceleration = {
        x: 0,
        y: 0
    };
};

PhysicsComponent.prototype.update = function(delta) {
    this.velocity.x += this.acceleration.x * delta;
    this.velocity.y += this.acceleration.y * delta;

    this.position.x += this.velocity.x * delta;
    this.position.y += this.velocity.y * delta;
};

exports.PhysicsComponent = PhysicsComponent;
},{}],8:[function(require,module,exports){
var graphicsComponent = require("../components/graphics/bird");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/circle");
var flappyBird = require("../flappy_bird");
// var settings = require("../settings");

var Bird = function() {
    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 0.5;
    physics.acceleration.y = -2;

    var graphics = new graphicsComponent.BirdGraphicsComponent(this);
    var collision = new collisionComponent.CircleCollisionComponent(this, 0.02);
    collision.onCollision = this.onCollision.bind(this); // ??

    this.components = {
        physics: physics,
        graphics: graphics,
        collision: collision
    };
};


Bird.prototype.onCollision = function(entity) {

};

exports.Bird = Bird;

},{"../components/collision/circle":1,"../components/graphics/bird":3,"../components/physics/physics":7,"../flappy_bird":12}],9:[function(require,module,exports){
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");
var graphicsComponent = require("../components/graphics/ceiling");
var flappyBird = require("../flappy_bird");

var Ceiling = function() {
    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.x = -0.25;
    physics.position.y = 1;

    var graphics = new graphicsComponent.CeilingGraphicsComponent(this);

    var collision = new collisionComponent.RectCollisionComponent(this, graphics.size);
    collision.onCollision = this.onCollision.bind(this);



    this.components = {
        physics: physics,
        collision: collision,
        graphics: graphics
    };
};

Ceiling.prototype.onCollision = function() {
    console.log("Collision with ceiling");

};

exports.Ceiling = Ceiling;

},{"../components/collision/rect":2,"../components/graphics/ceiling":4,"../components/physics/physics":7,"../flappy_bird":12}],10:[function(require,module,exports){
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");
var graphicsComponent = require("../components/graphics/floor");
var flappyBird = require("../flappy_bird");

var Floor = function() {
    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.x = -0.25;
    physics.position.y = -0.05;

    var graphics = new graphicsComponent.FloorGraphicsComponent(this);

    var collision = new collisionComponent.RectCollisionComponent(this, graphics.size);
    collision.onCollision = this.onCollision.bind(this);



    this.components = {
        physics: physics,
        collision: collision,
        graphics: graphics
    };
};

Floor.prototype.onCollision = function() {
    console.log("Collision with floor");

};

exports.Floor = Floor;

},{"../components/collision/rect":2,"../components/graphics/floor":5,"../components/physics/physics":7,"../flappy_bird":12}],11:[function(require,module,exports){
var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");
var pipeSystem = require("../systems/pipesystem");
var flappyBird = require("../flappy_bird");
// var settings = require("../settings");

var Pipe = function(positionX, positionY) {
	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = positionX;
    physics.position.y = positionY;
    physics.velocity.x = -0.65;

    var graphics = new graphicsComponent.PipeGraphicsComponent(this);

    var collision = new collisionComponent.RectCollisionComponent(this, graphics.size);
		var pipesystem = new pipeSystem.PipeSystem(this);
    collision.onCollision = this.onCollision.bind(this);

    this.components = {
    	physics: physics,
        graphics: graphics,
        collision: collision
    };
};

Pipe.prototype.onCollision = function(entity) {
    window.app.stop();
};

exports.Pipe = Pipe;

},{"../components/collision/rect":2,"../components/graphics/pipe":6,"../components/physics/physics":7,"../flappy_bird":12,"../systems/pipesystem":18}],12:[function(require,module,exports){
var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');
var pipeSystem = require('./systems/pipesystem');
var bird = require('./entities/bird');
var pipe = require('./entities/pipe');
var ceiling = require('./entities/ceiling');
var floor = require('./entities/floor');

var FlappyBird = function() {
    this.entities = [new bird.Bird(), new ceiling.Ceiling(), new floor.Floor()];
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
    this.physics = new physicsSystem.PhysicsSystem(this.entities);
    this.input = new inputSystem.InputSystem(this.entities);
    this.pipes = new pipeSystem.PipeSystem(this.entities);
};


FlappyBird.prototype.run = function() {
    this.graphics.run();
    this.physics.run();
    this.input.run();
    this.pipes.run();
};

FlappyBird.prototype.stop = function() {
  this.pipes.stop();
};

exports.FlappyBird = FlappyBird;

},{"./entities/bird":8,"./entities/ceiling":9,"./entities/floor":10,"./entities/pipe":11,"./systems/graphics":15,"./systems/input":16,"./systems/physics":17,"./systems/pipesystem":18}],13:[function(require,module,exports){
var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function() {
    // Assigning the app to the global `window` object so we can
    // can access it within other modules more easily
    app = new flappyBird.FlappyBird();
    app.run();
});

},{"./flappy_bird":12}],14:[function(require,module,exports){
var CollisionSystem = function(entities) {
    this.entities = entities;
};

CollisionSystem.prototype.tick = function() {
    for (var i=0; i<this.entities.length; i++) {
        var entityA = this.entities[i];
        if (!entityA.components.collision) {
            continue;
        }

        for (var j=i+1; j<this.entities.length; j++) {
            var entityB = this.entities[j];
            if (!entityB.components.collision) {
                continue;
            }

            if (!entityA.components.collision.collidesWith(entityB)) {
                continue;
            }

            if (entityA.components.collision.onCollision) {
                entityA.components.collision.onCollision(entityB);
            }

            if (entityB.components.collision.onCollision) {
                entityB.components.collision.onCollision(entityA);
            } // this code seems like a waste of cpu since we only need to compare the first entity in the array to all the other entities. We don't need to compare pipes to pipes.
        }
    }
};

exports.CollisionSystem = CollisionSystem;
},{}],15:[function(require,module,exports){
var GraphicsSystem = function(entities) {
    this.entities = entities;
    // Canvas is where we draw
    this.canvas = document.getElementById('main-canvas');
    // Context is what we draw to
    this.context = this.canvas.getContext('2d');
};

GraphicsSystem.prototype.run = function() {
    // Run the render loop
    window.requestAnimationFrame(this.tick.bind(this));
};

GraphicsSystem.prototype.tick = function() {
    // Set the canvas to the correct size if the window is resized
    if (this.canvas.width != this.canvas.offsetWidth ||
        this.canvas.height != this.canvas.offsetHeight) {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.save();
    this.context.translate(this.canvas.width / 2, this.canvas.height);
    this.context.scale(this.canvas.height, -this.canvas.height);

    for (var i=0; i<this.entities.length; i++) {
        var entity = this.entities[i];
        if (!entity.components.graphics) {
            continue;
        }

        entity.components.graphics.draw(this.context);
    }

    this.context.restore();

    window.requestAnimationFrame(this.tick.bind(this));
};

exports.GraphicsSystem = GraphicsSystem;

},{}],16:[function(require,module,exports){
var InputSystem = function(entities) {
    this.entities = entities;

    // Canvas is where we get input from
    this.canvas = document.getElementById('main-canvas');
};

InputSystem.prototype.run = function() {
    this.canvas.addEventListener('click', this.onClick.bind(this));
};

InputSystem.prototype.onClick = function() {
    var bird = this.entities[0];
    bird.components.physics.velocity.y = 0.7;
};

exports.InputSystem = InputSystem;
},{}],17:[function(require,module,exports){
var collisionSystem = require("./collision");

var PhysicsSystem = function(entities) {
    this.entities = entities;
    this.collisionSystem = new collisionSystem.CollisionSystem(entities);

};

PhysicsSystem.prototype.run = function() {
    // Run the update loop
    window.setInterval(this.tick.bind(this), 1000 /60);
};

PhysicsSystem.prototype.tick = function() {
    for (var i=0; i<this.entities.length; i++) {
        var entity = this.entities[i];
        if (!entity.components.physics) {
            continue;
        }

        entity.components.physics.update(1/60);
        
    }


    this.collisionSystem.tick();
};

exports.PhysicsSystem = PhysicsSystem;
},{"./collision":14}],18:[function(require,module,exports){
var pipe = require('../entities/pipe');

var PipeSystem = function(entities) {
    this.entities = entities;

};

PipeSystem.prototype.run = function() {
    this.pipeFunction = window.setInterval(function newPipes() {
      this.entities.push(new pipe.Pipe(1, (Math.random() * 0.5) + 0.35), new pipe.Pipe(1.7, (Math.random() * -0.5) - 0));

      for (var i = 3; i < this.entities.length; i++) {
          if (this.entities[i].components.physics.position.x < -1) {
          this.entities.splice(i, 1);
          }
      }
    }.bind(this), 2000);


};

PipeSystem.prototype.stop = function() {
  if (this.pipeFunction !== null) {
        window.clearInterval(this.pipeFunction);
        this.pipeFunction = null;
    }
};


exports.PipeSystem = PipeSystem;

},{"../entities/pipe":11}]},{},[13,12,3,6,7,1,2,8,11,15,16,17,14]);
