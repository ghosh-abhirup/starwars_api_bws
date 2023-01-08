import React, { useState } from "react";
import Character from "./Character";
import "./Item.css";

const Item = () => {
  const [loaded, setLoaded] = useState(false);
  const [char, setChar] = useState(null);

  const onCLickHandler = () => {
    const randomNumber = Math.ceil(Math.random() * 80);

    fetch(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`)
      .then((val) => val.json())
      .then((val) => {
        console.log(val);
        setChar(val);
      });

    setLoaded(true);
  };

  return (
    <div>
      {loaded && char != null && <Character data={char} />}
      <div className="btnClass">
        <button className="btn" onClick={onCLickHandler}>
          Randomized Character
        </button>
      </div>
    </div>
  );
};

export default Item;
