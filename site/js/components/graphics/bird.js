var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
    this.image = new Image();
    this.image.src = '../site/img/flappy-bird-flat.png';

};


BirdGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;

    context.save();
    context.translate(position.x, position.y);
    context.scale(1, -1);
    context.translate(-0.05, -0.05);
    context.imageSmoothingEnabled = false;
    context.drawImage(this.image, 0, 0, 0.1, 0.1);


    context.restore();

    // context.save();
    // context.translate(position.x, position.y);
    // context.beginPath();
    // context.arc(0, 0, 0.03, 0, 2 * Math.PI);
    // context.fill();
    // context.closePath();
    // context.restore();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;
