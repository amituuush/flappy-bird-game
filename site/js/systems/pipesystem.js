var pipe = require('../entities/pipe');

var PipeSystem = function(entities) {
    this.entities = entities;

};

PipeSystem.prototype.run = function() {
    this.pipeFunction = window.setInterval(function newPipes() {
    this.entities.push(new pipe.Pipe(1, (Math.random() * 0.5) + 0.35), new pipe.Pipe(1.7, (Math.random() * -0.5) - 0));
    }.bind(this), 2000);
};

PipeSystem.prototype.stop = function() {
    clearInterval(pipeFunction);
};


exports.PipeSystem = PipeSystem;
