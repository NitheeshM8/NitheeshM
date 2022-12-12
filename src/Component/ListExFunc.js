import React from 'react'

export default function ListExFunc() {
    const cars=[{model:"Toyoto",id:1},
                {model:"Swift",id:2},
                {model:"Bolero",id:3},
                {model:"Mahindra",id:4}];
    return (
     <h1>{cars.map((val) => <li key={val.id}>{val.model}</li>)}</h1>

    )
}
