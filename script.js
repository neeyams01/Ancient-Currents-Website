
document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('main-track');
    const playBtn = document.getElementById('play-pause');
    const icon = playBtn.querySelector('i');

    music.load();

    function toggleMusic() {
        console.log("Toggle clicked. Current state: " + (music.paused ? "Paused" : "Playing"));

        if (music.paused) {
            music.play()
                .then(() => {
                    icon.classList.remove('fa-play');
                    icon.classList.add('fa-pause');
                    console.log("Playback started successfully.");
                })
                .catch(error => {
                    console.error("Playback failed:", error);
                    alert("Audio Error: Check if 'outnow.mp3' is in your main GitHub folder.");
                });
        } else {
            music.pause();
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    }

    playBtn.addEventListener('click', toggleMusic);

    music.onended = () => {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    };
});
