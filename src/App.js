import Song from "./components/Song";
import React, { useState, useRef } from "react";
import Player from "./components/Player";
import "./styles/app.scss";
import data from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const [song, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(
    song.filter((actSong) => actSong.active === true)[0]
  );
  const [isPlaying, setIsplaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const audioRef = useRef(null);
  const [time, setTime] = useState({
    currenttime: 0,
    duration: 0,
    animetePercentage: 0,
  });
  const ChangeSong = (currsong) => {
    const newUpdatesongs = song.map((eachsong) => {
      if (eachsong.id === currsong.id) {
        return {
          ...eachsong,
          active: true,
        };
      } else {
        return {
          ...eachsong,
          active: false,
        };
      }
    });
    setSong(newUpdatesongs);
  };

  const fetchSongTime = (e) => {
    const currenttime = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(currenttime);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setTime({
      ...time,
      currenttime: currenttime,
      duration: duration,
      animetePercentage: animation,
    });
  };
  const toNext = async () => {
    const currentsongindex = song.findIndex(
      (esong) => esong.id === currentSong.id
    );
    if (currentsongindex + 1 < song.length) {
      await setCurrentSong(song[currentsongindex + 1]);
      ChangeSong(song[currentsongindex + 1]);
    } else {
      await setCurrentSong(song[0]);
      ChangeSong(song[0]);
    }
    if (isPlaying) audioRef.current.play();
  };
  // song.filter((actSong) => actSong.active === true);
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      ></Nav>
      <Song isPlaying={isPlaying} currentSong={currentSong}></Song>
      <Player
        audioRef={audioRef}
        time={time}
        setTime={setTime}
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        song={song}
        setSong={setSong}
        ChangeSong={ChangeSong}
      ></Player>
      <Library
        libraryStatus={libraryStatus}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
        song={song}
        setSong={setSong}
        setCurrentSong={setCurrentSong}
      ></Library>
      <audio
        onLoadedMetadata={fetchSongTime}
        onTimeUpdate={fetchSongTime}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={toNext}
      />
    </div>
  );
}

export default App;
