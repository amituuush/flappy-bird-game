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
    window.app.stop();
    document.getElementById('pipes-cleared').innerHTML = window.app.scores.realScore;

    document.getElementById('game-over').innerHTML = "Crash landing. Try again!";
    $('#game-over-modal').css('display', 'block');
};

exports.Floor = Floor;
