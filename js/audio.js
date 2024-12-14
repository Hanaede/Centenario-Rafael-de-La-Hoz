document.querySelectorAll('.audio-toggle').forEach(toggle => {
    toggle.addEventListener('change', function() {
        const audio = this.nextElementSibling.nextElementSibling;

        if (this.checked) {
            document.querySelectorAll('audio').forEach(aud => {
                aud.pause();
                aud.currentTime = 0;
            });

            audio.play().then(() => {
                this.nextElementSibling.classList.add('playing');
            }).catch((error) => {
                console.error("No se pudo reproducir el audio:", error);
            });
        } else {
            audio.pause();
            audio.currentTime = 0;
            this.nextElementSibling.classList.remove('playing');
        }

        document.querySelectorAll('.audio-toggle').forEach(btn => {
            if (btn !== this) {
                btn.checked = false;
                btn.nextElementSibling.classList.remove('playing');
            }
        });
    });
});
