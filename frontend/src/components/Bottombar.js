import React, { useContext, useEffect, useRef } from "react";
import Player from "./Bottombar/Player";
import songContext from "../context/SongContext";

function Bottombar() {
  const context = useContext(songContext);
  const { isplaying, currentSong, setCurrentSong } = context;

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying, currentSong]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };
  return (
    <>
      <audio
        src={currentSong?.url}
        ref={audioElem}
        onTimeUpadate={onPlaying}
      ></audio>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="h-24 border-t bg-footer border-white border-opacity-5">
          <Player audioElem={audioElem} />
        </div>
      </div>
    </>
  );
}

export default Bottombar;
