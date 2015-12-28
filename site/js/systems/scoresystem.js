var counter = require('../entities/counter');

var ScoreSystem = function(entities, score) {
    this.entities = entities;
    this.score = score;
    this.realScore = 0;
};

ScoreSystem.prototype.update = function() {
    this.score++;
    this.realScore = Math.floor(this.score / 9);
    document.getElementById("counter").innerHTML = this.realScore;

};

exports.ScoreSystem = ScoreSystem;
