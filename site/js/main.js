var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-button').addEventListener('click', setTimeout (function() {
        app = new flappyBird.FlappyBird();
        app.run();
        document.getElementById('start-button').style.display = "none";

    }, 1000));


    document.getElementById('new-game').addEventListener("click", function() {
        var newGame = new flappyBird.FlappyBird();
        newGame.run();
        $('#game-over-modal').css('background', 'red');

    });
    // Assigning the app to the global `window` object so we can
    // can access it within other modules more easily
});
