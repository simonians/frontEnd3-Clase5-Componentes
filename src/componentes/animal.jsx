import React from "react";

function Animal(props) {
    const data = props.data 
    return (<>
    <p>- Edad: {data.edad}</p>
    <p>- Sexo: {data.sexo}</p>
    <p>- Raza: {data.raza}</p>
    <p>- Tamaño: {data.tam}</p>
    </>)
}

export default Animal;