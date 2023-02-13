import React, { useState } from "react";

interface GameState {
  word: string;
  attempts: number;
  guessedLetters: Set<string>;
  status: "playing" | "won" | "lost";
}

const initialState: GameState = {
  word: "React",
  attempts: 6,
  guessedLetters: new Set(),
  status: "playing",
};

const Hangman: React.FC = () => {
  const [game, setGame] = useState(initialState);

  const handleGuess = (letter: string) => {
    if (game.guessedLetters.has(letter) || game.status !== "playing") {
      return;
    }

    const newGuessedLetters = new Set(game.guessedLetters);
    newGuessedLetters.add(letter);

    let newStatus: GameState["status"] = "playing";
    if (!game.word.includes(letter)) {
      newStatus = game.attempts === 1 ? "lost" : "playing";
    } else if (!game.word.split("").some((char) => !newGuessedLetters.has(char))) {
      newStatus = "won";
    }

    setGame({
      ...game,
      attempts: game.attempts - (newStatus === "playing" ? 0 : 1),
      guessedLetters: newGuessedLetters,
      status: newStatus,
    });
  };

  return (
    <div>
      <p>Attempts remaining: {game.attempts}</p>
      <p>
        {game.word.split("").map((letter) => (
          <span key={letter} style={{ padding: "0 10px" }}>
            {game.guessedLetters.has(letter) ? letter : "_"}
          </span>
        ))}
      </p>
      <p>
        {Array.from(new Set(game.word.split(""))).map((letter) => (
          <button key={letter} onClick={() => handleGuess(letter)} disabled={game.guessedLetters.has(letter) || game.status !== "playing"}>
            {letter}
          </button>
        ))}
      </p>
      <p>{game.status === "playing" ? "Playing..." : game.status === "won" ? "You won!" : "You lost :("}</p>
    </div>
  );
};

export default Hangman;
