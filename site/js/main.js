var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function() {
    // Assigning the app to the global `window` object so we can
    // can access it within other modules more easily
    window.app = new flappyBird.FlappyBird();
    window.app.run();
});
