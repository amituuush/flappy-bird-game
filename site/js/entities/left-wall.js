var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");
var graphicsComponent = require("../components/graphics/left-wall");
var flappyBird = require("../flappy_bird");

var LeftWall = function() {
    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.x = -0.7;
    physics.position.y = 0;

    var graphics = new graphicsComponent.LeftWallGraphicsComponent(this);

    var collision = new collisionComponent.RectCollisionComponent(this, graphics.size);
    collision.onCollision = this.onCollision.bind(this);

    this.components = {
        physics: physics,
        collision: collision,
        graphics: graphics
    };
};

LeftWall.prototype.onCollision = function() {
    window.app.deletePipes();

};

exports.LeftWall = LeftWall;
