import { useState, useEffect, useRef } from "react";

function MusicPlayer() {
  const MUSIC = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fractionalCompletion, setFractionalCompletion] = useState(0);

  useEffect(() => {
    if (MUSIC.current != null) {
      if (isPlaying) {
        MUSIC.current.play();
      } else {
        MUSIC.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <>
      <audio
        ref={MUSIC}
        src="/assets/music/song-1.mp3"
        onTimeUpdate={(event) =>
          setFractionalCompletion(
            event.target.currentTime / event.target.duration
          )
        }
        autoPlay={true}
        onLoadedData={() => undefined}
      />
      <input
        type="range"
        value={isNaN(fractionalCompletion) ? 0 : fractionalCompletion * 100}
        onChange={(e) => {
          if (MUSIC.current != null) {
            MUSIC.current.currentTime =
              (MUSIC.current.duration * e.target.value) / 100;
            setFractionalCompletion(e.target.value / 100);
          }
        }}
      />
      <button onClick={() => setIsPlaying(!isPlaying)}>Pause/Play</button>
    </>
  );
}

export default MusicPlayer;
