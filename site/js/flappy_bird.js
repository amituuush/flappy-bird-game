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

FlappyBird.prototype.run = function() {
    this.graphics.run();
    this.physics.run();
    this.input.run();

    var pipeInterval = window.setInterval(function newPipes() {
    	this.entities.push(new pipe.Pipe(0.5, (Math.random() * 0.5) - 0.15), new pipe.Pipe(1.25, (Math.random() * 0.5) - 1.1));

    }.bind(this), 2000);

    
};

exports.FlappyBird = FlappyBird;