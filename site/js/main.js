var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-button').addEventListener('click', function() {
        app = new flappyBird.FlappyBird();
        app.run();
        document.getElementById('start-button').style.display = "none";
    });


    document.getElementById('new-game').addEventListener("click", function() {

        $('#game-over-modal').addClass('hide');
        app.entities[0].components.physics.position.y = 0.5;
        console.log(app.entities[0].components.physics.position.y);
        // document.getElementById('pipes-cleared').innerHTML = 0;
        document.getElementById('start-button').style.display = "block";
        app.entities.splice(this.entities.length - 5, this.entities.length - 1);
        console.log(app.entities);
    });
    // Assigning the app to the global `window` object so we can
    // can access it within other modules more easily
});
