var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');
var bird = require('./entities/bird');
var pipe = require('./entities/pipe');

var FlappyBird = function() {
    this.entities = [new bird.Bird()];
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
    this.physics = new physicsSystem.PhysicsSystem(this.entities);
    this.input = new inputSystem.InputSystem(this.entities);
};

var pipeInterval;

FlappyBird.prototype.run = function() {
    this.graphics.run();
    this.physics.run();
    this.input.run();

    var pipeInterval = window.setInterval(function newPipes() {
    this.entities.push(new pipe.Pipe(1, (Math.random() * 0.5) + 0.35), new pipe.Pipe(1.7, (Math.random() * -0.5) - 0));

    }.bind(this), 2000);

    for (var i = 1; i < this.entities.length; i++) {
        if (this.entities[i].components.physics.position.x < 0) {
            delete this.entities[i];
            console.log(this.entities);
        }

    }
    
};

exports.FlappyBird = FlappyBird;