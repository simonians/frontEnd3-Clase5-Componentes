import React from "react";
import Animal from "./animal"

function List(props){
    const label = props.labels;
    const animals = props.animals;
    return(
    <div>
        {label.map((animalName, index) => 
        <>
            <h2>Nombre: {animalName}</h2>
            <Animal data={animals[index]}/>
        </>
        )}
    </div>
    )
}
export default List;