var flappyBird = require('./flappy_bird');
var counter = require('./entities/counter');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-button').addEventListener('click', function() {
        app = new flappyBird.FlappyBird();
        app.run();
        document.getElementById('start-button').style.display = "none";

    });


    document.getElementById('new-game').addEventListener("click", function() {
        window.location.reload(true);
    });

});
