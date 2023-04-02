import React from "react";
import rockImage from "../../assets/rock.png";
import paperImage from "../../assets/paper.png";
import scissorsImage from "../../assets/scissors.png";
import "./styles.scss";

const RPSImage = ({ item, text, onClick, spin }) => {
  let imageSrc;

  switch (item) {
    case "rock":
      imageSrc = rockImage;
      break;
    case "paper":
      imageSrc = paperImage;
      break;
    case "scissors":
      imageSrc = scissorsImage;
      break;
    default:
      return null;
  }

  const onItemClick = () => {
    onClick && onClick();
  };

  const className = spin ? "rps spin" : "rps";
  return (
    <div onClick={onItemClick} className={className}>
      <img
        src={imageSrc}
        alt={item}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
      {text && <p>{text}</p>}
    </div>
  );
};

export default RPSImage;
