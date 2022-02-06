import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onLike, onDeleteToy }) {
  const card = toys.map(toy => 
    <ToyCard 
      key = { toy.id } 
      toy= { toy } 
      onLike = { onLike } 
      onDeleteToy = { onDeleteToy }
    />)

  return (
    <div id="toy-collection">{ card }</div>
  );
}

export default ToyContainer;
