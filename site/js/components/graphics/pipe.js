var PipeGraphicsComponent = function(entity) {
    this.entity = entity;
    this.size = {x: 0.1, y: 0.65};
};

PipeGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;
    
    context.save();
    context.translate(position.x, position.y);
    context.beginPath();
    context.fillStyle = "green";
    context.fillRect(0, 0, this.size.x, this.size.y);
    context.closePath();
    context.restore();


};

exports.PipeGraphicsComponent = PipeGraphicsComponent;

