import React from "react";
import Librarysong from "./Librarysong";

const Library = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSong,
  libraryStatus,
}) => {
  return (
    <div>
      <div className={`library ${libraryStatus ? "active-library" : ""}`}>
        <h1>Library</h1>
        <div className="library-songs">
          {song.map((songs) => (
            <Librarysong
              key={songs.id}
              song={songs}
              isPlaying={isPlaying}
              setCurrentSong={setCurrentSong}
              songs={song}
              setSong={setSong}
              audioRef={audioRef}
            ></Librarysong>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
