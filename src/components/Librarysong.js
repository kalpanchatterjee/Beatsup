import React from "react";

const Librarysong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSong,
}) => {
  const changeCurrentSong = async (id) => {
    const currentclickedsong = songs.filter(
      (currentsong) => currentsong.id === id
    );
    await setCurrentSong(currentclickedsong[0]);
    if (isPlaying) audioRef.current.Play();
    const newUpdatesongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSong(newUpdatesongs);
  };

  return (
    <div>
      <div
        onClick={() => changeCurrentSong(song.id)}
        className={`library-song ${song.active ? "selected" : ""}`}
      >
        <img src={song.cover} alt="/"></img>
        <div className="song-desc">
          <h2>{song.name}</h2>
          <h3>{song.artist}</h3>
        </div>
      </div>
    </div>
  );
};

export default Librarysong;
