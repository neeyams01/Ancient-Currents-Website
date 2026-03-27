/* --- BIG CITY STARS PLAYER LOGIC --- */
const music = document.getElementById('bg-music');
const btnText = document.querySelector('.music-btn .text');

function toggleMusic() {
    if (music.paused) {
        // We use a promise check because 'Big City Stars.mp3' might take 
        // a second to load on mobile data.
        music.play()
            .then(() => {
                btnText.innerText = "PAUSE THEME";
            })
            .catch(err => {
                console.log("Playback blocked. tap the screen again.");
            });
    } else {
        music.pause();
        btnText.innerText = "PLAY THEME";
    }
}

// Ensure the button resets if the music ever stops
music.onended = function() {
    btnText.innerText = "PLAY THEME";
};
