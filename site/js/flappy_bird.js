var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');
var pipeSystem = require('./systems/pipesystem');
var scoreSystem = require('./systems/scoresystem');
var bird = require('./entities/bird');
var pipe = require('./entities/pipe');
var ceiling = require('./entities/ceiling');
var floor = require('./entities/floor');
var leftWall = require('./entities/left-wall');
var counter = require('./entities/counter');

var FlappyBird = function() {
    this.entities = [new bird.Bird(), new ceiling.Ceiling(), new floor.Floor(), new leftWall.LeftWall(), new counter.Counter()];
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
    this.physics = new physicsSystem.PhysicsSystem(this.entities);
    this.input = new inputSystem.InputSystem(this.entities);
    this.pipes = new pipeSystem.PipeSystem(this.entities);
    this.scores = new scoreSystem.ScoreSystem(this.entities, 0);
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

FlappyBird.prototype.inputOff = function() {
    this.input.stop();
};

FlappyBird.prototype.updateScore = function() {
    this.scores.update();
};

exports.FlappyBird = FlappyBird;
