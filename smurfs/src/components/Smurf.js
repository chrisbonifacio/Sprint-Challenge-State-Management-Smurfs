import React from "react"

export default function Smurf({ smurf }) {
  return (
    <div className="Smurf">
      <h2>{smurf.name}</h2>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
    </div>
  )
}
