import "./styles.scss";

function WinnerDetails({ winner }) {
  return (
    <div className="winner-container">
      {winner === "user" ? (
        <h2 className="user-win">You Win! 😎</h2>
      ) : winner === "computer" ? (
        <h2 className="computer-win">Computer Wins! 😭</h2>
      ) : winner === "tie" ? (
        <h2 className="tie-win">It's a tie!</h2>
      ) : null}
    </div>
  );
}

export default WinnerDetails;
