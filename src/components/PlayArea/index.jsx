import React from "react";
import RPSImage from "../RPSImage";

import "./styles.scss";

function PlayArea({ picks, onRPSClick, animation }) {
  return (
    <div className="play-area-container ">
      {picks.user && picks.computer ? (
        <div className="items">
          <RPSImage item={picks.user} text="your pick" />
          <RPSImage item={picks.computer} text="computer pick" />
        </div>
      ) : (
        <div>
          <div className="items">
            <RPSImage
              item={"rock"}
              onClick={onRPSClick("rock")}
              spin={animation}
            />
            <RPSImage
              item={"paper"}
              onClick={onRPSClick("paper")}
              spin={animation}
            />
            <RPSImage
              item={"scissors"}
              onClick={onRPSClick("scissors")}
              spin={animation}
            />
          </div>
          <div className="how-to-play"> Pick any item to start the game </div>
        </div>
      )}
    </div>
  );
}

export default PlayArea;
