import React from "react";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <div>
      <nav>
        <h1>Beats Up</h1>
        <button
          onClick={() => {
            setLibraryStatus(!libraryStatus);
          }}
        >
          Library
          <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
        </button>
      </nav>
    </div>
  );
};

export default Nav;
