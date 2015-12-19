var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");
var pipeSystem = require("../systems/pipesystem");
// var settings = require("../settings");

var Pipe = function(positionX, positionY) {
	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = positionX;
    physics.position.y = positionY;
    physics.velocity.x = -0.65;

    var graphics = new graphicsComponent.PipeGraphicsComponent(this);

    var collision = new collisionComponent.RectCollisionComponent(this, graphics.size);
    collision.onCollision = this.onCollision.bind(this);

    this.components = {
    	physics: physics,
        graphics: graphics,
        collision: collision
    };
};

Pipe.prototype.onCollision = function(entity) {
	console.log(pipeSystem.run);
};

exports.Pipe = Pipe;
