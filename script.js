/* --- ANCIENT CURRENTS: OFFICIAL PLAYER LOGIC --- */

document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('main-track');
    const playBtn = document.getElementById('play-pause');
    const icon = playBtn.querySelector('i');

    // GitHub Pages can be slow; this ensures the metadata is ready
    music.load();

    function toggleMusic() {
        // Log to console so you can see if the button is responding on mobile
        console.log("Toggle clicked. Current state: " + (music.paused ? "Paused" : "Playing"));

        if (music.paused) {
            // Promise-based play for mobile compatibility
            music.play()
                .then(() => {
                    icon.classList.remove('fa-play');
                    icon.classList.add('fa-pause');
                    console.log("Playback started successfully.");
                })
                .catch(error => {
                    console.error("Playback failed:", error);
                    // If this pops up, the file path 'outnow.mp3' is wrong on GitHub
                    alert("Audio Error: Check if 'outnow.mp3' is in your main GitHub folder.");
                });
        } else {
            music.pause();
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    }

    // Attach the listener to your HTML button ID
    playBtn.addEventListener('click', toggleMusic);

    // Auto-reset icon if the song ends
    music.onended = () => {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    };
});
