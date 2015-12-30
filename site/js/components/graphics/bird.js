var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
};


BirdGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;

    var image = document.getElementById('flappy-bird');
    context.save();
    context.translate(position.x, position.y);
    // context.drawImage(image, 0, 0, 1360, 1083, 0, 0, 1360, 1083);
    context.drawImage(image, -15, -15, 41, 41);
    context.restore();

    // context.save();
    // context.translate(position.x, position.y);
    // context.beginPath();
    // context.arc(0, 0, 0.02, 0, 2 * Math.PI);
    // context.fill();
    // context.closePath();
    // context.restore();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;
