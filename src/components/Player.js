import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentSong,
  isPlaying,
  setIsplaying,
  audioRef,
  time,
  setTime,
  song,
  setCurrentSong,
  setSong,
  ChangeSong,
}) => {
  const play = () => {
    if (isPlaying) {
      audioRef.current.pause();

      setIsplaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsplaying(!isPlaying);
    }
  };
  const skipNext = async (direction) => {
    const currentsongindex = song.findIndex(
      (esong) => esong.id === currentSong.id
    );
    console.log(currentsongindex);
    console.log(currentSong);
    if (direction === "skip-forward") {
      if (currentsongindex + 1 < song.length) {
        await setCurrentSong(song[currentsongindex + 1]);
        ChangeSong(song[currentsongindex + 1]);
      } else {
        await setCurrentSong(song[0]);
        ChangeSong(song[0]);
      }
    } else {
      if (!currentsongindex - 1 < 0) {
        await setCurrentSong(song[(currentsongindex - 1) % song.length]);
        ChangeSong(song[currentsongindex - 1]);
      } else {
        await setCurrentSong(song[song.length - 1]);
        ChangeSong(song[song.length - 1]);
      }
    }
    if (isPlaying) audioRef.current.play();
  };

  function getTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
  const dragHandeler = (e) => {
    const current = e.target.value;
    audioRef.current.currentTime = e.target.value;
    setTime({ ...time, currenttime: current });
  };
  const trackAnim = {
    transform: `translateX(${time.animetePercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(time.currenttime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={time.duration}
            value={time.currenttime}
            onChange={dragHandeler}
            type="range"
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>

        <p>
          {getTime(time.duration).indexOf("NaN") > -1
            ? "0:00"
            : getTime(time.duration)}
        </p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipNext("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={play}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipNext("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
