import { useState } from "react";
import { Button, Heading } from "@chakra-ui/react";

import Score from "../../components/Score";
import { getResults } from "../../services/game";
import PlayArea from "../../components/PlayArea";
import WinnerDetails from "../../components/WinnerDetails";

import "./styles.scss";

function Game() {
  const [picks, setPicks] = useState({
    user: "",
    computer: "",
  });
  const [scores, setScores] = useState({
    user: 0,
    computer: 0,
  });
  const [winner, setWinner] = useState(null);
  const [animation, setAnimation] = useState(false);

  const updateScore = (winnerValue) => {
    if (winnerValue === "user") {
      setScores({
        ...scores,
        user: scores.user + 1,
      });
    }
    if (winnerValue === "computer") {
      setScores({
        ...scores,
        computer: scores.computer + 1,
      });
    }
  };

  const onPlay = async (userItem) => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 500);
    // let's do some animation before we show the results
    // it makes user feel that something is happening
    await new Promise((resolve) => setTimeout(resolve, 500));
    const computerItem = ["rock", "paper", "scissors"][
      Math.floor(Math.random() * 3)
    ];
    setPicks({
      user: userItem,
      computer: computerItem,
    });
    const winnerValue = getResults(userItem, computerItem);
    setWinner(winnerValue);
    updateScore(winnerValue);
  };

  const onReplay = () => {
    setWinner(null);
    setPicks({
      user: "",
      computer: "",
    });
  };

  const onRPSClick = (value) => {
    return () => {
      onPlay(value);
    };
  };

  return (
    <div className="game-container">
      <Heading marginBottom="24px">Rock Paper Scissors</Heading>
      <div className="subtitle">
        YOU <span>Vs</span> COMPUTER
      </div>
      <Score scores={scores} />
      <WinnerDetails winner={winner} />
      <PlayArea onRPSClick={onRPSClick} animation={animation} picks={picks} />
      {winner && (
        <Button onClick={onReplay} colorScheme="cyan">
          Play Again
        </Button>
      )}
    </div>
  );
}

export default Game;
