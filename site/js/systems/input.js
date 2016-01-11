var InputSystem = function(entities) {
    this.entities = entities;
    this.canvas = document.getElementById('main-canvas');
};

InputSystem.prototype.run = function() {
    this.canvas.addEventListener('click', this.onClick.bind(this));
    console.log('input run working');
};

InputSystem.prototype.onClick = function() {
    var bird = this.entities[0];
    bird.components.physics.velocity.y = 0.7;
    console.log('input onclick responding');
};

// InputSystem.prototype.stop = function() {
//     this.canvas.removeEventListener('click', this.onClick.bind(this));
//     console.log('stop');
// };

exports.InputSystem = InputSystem;
