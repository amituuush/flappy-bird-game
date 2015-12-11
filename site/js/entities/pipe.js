var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");


var Pipe = function(positionX, positionY) {
	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = positionX;
    physics.position.y = positionY;
    physics.velocity.x = -0.65;

    var graphics = new graphicsComponent.PipeGraphicsComponent(this);

    this.components = {
    	physics: physics,
        graphics: graphics
    };
};

exports.Pipe = Pipe;