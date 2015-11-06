var PipeGraphicsComponent = function(entity) {
    this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
    context.beginPath();
    context.arc(500, 100, 90, 0, 2 * Math.PI);
    context.fillStyle = 'red';
	context.fill();

    context.fillStyle = "green";
    context.fillRect(250, 100, 55, 50);
    


};

exports.PipeGraphicsComponent = PipeGraphicsComponent;