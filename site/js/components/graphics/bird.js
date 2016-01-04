var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
    this.image = new Image();
    this.image.src = '../site/img/flappy-bird-sml.gif';

};


BirdGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;

    context.save();
    context.translate(position.x, position.y);
    context.drawImage(this.image, 0, 0, 80, 64);

    context.restore();

    console.log(this.entity.components.physics.position);

    // context.save();
    // context.translate(position.x, position.y);
    // context.beginPath();
    // context.arc(0, 0, 0.02, 0, 2 * Math.PI);
    // context.fill();
    // context.closePath();
    // context.restore();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;
