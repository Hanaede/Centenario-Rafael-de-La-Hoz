document.querySelectorAll('.audio-toggle').forEach(toggle => {
    toggle.addEventListener('change', function() {
        // Obtenemos el audio relacionado con el botón
        const audio = this.nextElementSibling.nextElementSibling;

        // Si el audio se está reproduciendo, lo pausamos
        if (this.checked) {
            // Pausar todos los audios
            document.querySelectorAll('audio').forEach(aud => {
                aud.pause();  // Pausamos el audio
                aud.currentTime = 0;  // Reiniciamos el tiempo del audio
            });

            // Reproducir el audio relacionado
            audio.play().then(() => {
                // Cuando el audio se reproduce correctamente, cambiamos el ícono de pausa
                this.nextElementSibling.classList.add('playing'); // Añadimos la clase playing
            }).catch((error) => {
                console.error("No se pudo reproducir el audio:", error);
            });
        } else {
            // Si el checkbox se desmarca, pausamos el audio
            audio.pause();
            audio.currentTime = 0;
            this.nextElementSibling.classList.remove('playing');  // Quitamos la clase playing
        }

        // Desmarcar todos los demás checkboxes
        document.querySelectorAll('.audio-toggle').forEach(btn => {
            if (btn !== this) {
                btn.checked = false;  // Deseleccionamos los otros checkboxes
                btn.nextElementSibling.classList.remove('playing');  // Limpiamos la clase playing
            }
        });
    });
});
