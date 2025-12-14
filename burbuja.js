      const audio = document.getElementById("audioBackground");
      const video = document.querySelector("video");
      const audioBubble = document.getElementById("audioBubble");
      const audioIcon = document.getElementById("audioIcon");

      audio.volume = 0.2;
      audio
        .play()
        .catch(() =>
          console.log("Interacción requerida para reproducir audio")
        );

      if (video) {
        video.addEventListener("play", () => {
          audio.pause();
          console.log("Video iniciado, música en pausa");
        });

        video.addEventListener("pause", () => {
          audio.play();
          console.log("Video pausado, música reanudada");
        });

        video.addEventListener("ended", () => {
          audio.play();
          console.log("Video finalizado, música reanudada");
        });
      }

      audioBubble.addEventListener("click", () => {
        if (audio.paused) {
          audio.play();
          audioIcon.className = "bi bi-music-note-beamed";
        } else {
          audio.pause();
          audioIcon.className = "bi bi-music-note";
        }
      });
