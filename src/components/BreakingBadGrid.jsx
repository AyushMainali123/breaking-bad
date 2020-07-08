import React from "react";
import Character from "./Character";

const BreakingBadGrid = ({ items }) => {
  return (
    <div className="grid">
      {items.map((character) => (
        <Character data={character} key={character.char_id} />
      ))}
    </div>
  );
};

export default BreakingBadGrid;
