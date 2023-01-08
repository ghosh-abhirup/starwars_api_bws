import React from "react";
import "./Character.css";

const Character = (props) => {
  return (
    <div className="show">
      <div>
        <h1>{props.data.name}</h1>
        <p>
          <span className="title">Height :</span>
          <span>{props.data.height && `${props.data.height} m`}</span>
        </p>

        <p>
          <span className="title">Gender :</span>
          <span>
            {props.data.gender &&
              props.data.gender.slice(0, 1).toUpperCase() +
                props.data.gender.slice(1)}
          </span>
        </p>
        <p>
          <span className="title">Species :</span>
          <span>
            {props.data.species.slice(0, 1).toUpperCase() +
              props.data.species.slice(1)}
          </span>
        </p>
        <p>
          <span className="title">Homeworld :</span>
          <span>
            {props.data.homeworld &&
              props.data.homeworld.slice(0, 1).toUpperCase() +
                props.data.homeworld.slice(1)}
          </span>
        </p>
        <p>
          <span className="title">Affiliations :</span>
          <ul>
            {props.data.affiliations.map((data) => {
              return <li>{data}</li>;
            })}
          </ul>
        </p>
      </div>
      <div>
        <img className="image" src={props.data.image} alt="Hey" />
      </div>
    </div>
  );
};

export default Character;
