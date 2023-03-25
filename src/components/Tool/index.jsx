import React from 'react';
import rockImage from '../../assets/rock.png';
import paperImage from '../../assets/paper.png';
import scissorsImage from '../../assets/scissors.png';

const RPSImage = ({ item }) => {
  let imageSrc;

  switch (item) {
    case 'rock':
      imageSrc = rockImage;
      break;
    case 'paper':
      imageSrc = paperImage;
      break;
    case 'scissors':
      imageSrc = scissorsImage;
      break;
    default:
      return null;
  }

  return <div><img src={imageSrc} alt={item} style={{
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    cursor: 'pointer',
  }}/></div>;
};

export default RPSImage;