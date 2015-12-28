var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");
var pipeSystem = require("../systems/pipesystem");
var flappyBird = require("../flappy_bird");

var Pipe = function(positionX, positionY) {
	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = positionX;
    physics.position.y = positionY;
    physics.velocity.x = -0.75;

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
	if (entity.components.collision.type === "circle") {
		window.app.stop();
		window.app.inputOff();
		document.getElementById('game-over-modal').style.display = "block";
		document.getElementById('game-over').innerHTML = "Pipes don't like birds. Remember that. Try again!";
		document.getElementById('pipes-cleared').innerHTML = window.app.scores.realScore;


	}
	else if (entity.components.collision.type === "counter") {
		console.log("collided with counter");
	}

};

exports.Pipe = Pipe;
