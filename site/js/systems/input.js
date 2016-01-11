var InputSystem = function(entities) {
    this.entities = entities;
    this.canvas = document.getElementById('main-canvas');
};

InputSystem.prototype.run = function() {
    console.log(window.app.playing);
    this.canvas.addEventListener('click', this.onClick.bind(this));

};

InputSystem.prototype.onClick = function() {
    var bird = this.entities[0];
    if(window.app.playing) {
        bird.components.physics.velocity.y = 0.7;
    }
    console.log(window.app.playing);
};

// InputSystem.prototype.stop = function() {
//     this.canvas.removeEventListener('click', this.onClick.bind(this));
//     console.log('stop');
// };

exports.InputSystem = InputSystem;
