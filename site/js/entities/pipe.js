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
		document.getElementById('pipes-cleared').innerHTML = window.app.scores.realScore;

		document.getElementById('game-over').innerHTML = "Pipes don't like birds. Remember that. Try again!";
		$('#game-over-modal').css('display', 'block');
	}
	else if (entity.components.collision.type === "counter") {

	}

};

exports.Pipe = Pipe;
