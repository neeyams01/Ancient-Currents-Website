/* --- ANCIENT CURRENTS PLAYER LOGIC --- */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('main-track');
    const playBtn = document.getElementById('play-pause');
    const icon = playBtn.querySelector('i');

    /**
     * Logic to toggle play/pause
     */
    function toggleMusic() {
        if (music.paused) {
            music.play()
                .then(() => {
                    // Update icon to pause state
                    icon.classList.remove('fa-play');
                    icon.classList.add('fa-pause');
                })
                .catch(error => {
                    console.error("Playback failed. Ensure 'Big City Stars.mp3' is in the root folder.", error);
                });
        } else {
            music.pause();
            // Update icon back to play state
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    }

    // Attach click listener to the button
    playBtn.addEventListener('click', toggleMusic);

    // Reset button icon if the song reaches the end
    music.onended = () => {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    };
});
