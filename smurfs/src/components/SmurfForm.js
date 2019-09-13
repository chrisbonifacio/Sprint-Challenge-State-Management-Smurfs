import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { addSmurf, getSmurfs } from "../store/actions"

function SmurfForm(props) {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState("")
  const [inputSmurf, setInputSmurf] = useState({ name, age, height })

  useEffect(() => {
    setInputSmurf({ name, age, height })
  }, [name, age, height])

  return (
    <div className="Form">
      <form
        onSubmit={e => {
          props.addSmurf(inputSmurf)
        }}
      >
        <input
          type="text"
          onChange={e => {
            setName(e.target.value)
          }}
          name="name"
          placeholder="enter name..."
        />
        <input
          type="number"
          onChange={e => {
            setAge(Number(e.target.value))
          }}
          name="age"
          placeholder="enter age..."
        />
        <input
          type="text"
          onChange={e => {
            setHeight(e.target.value + "cm")
          }}
          name="height"
          placeholder="enter height..."
        />
        <button type="submit">Add to Village</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    village: state.village
  }
}

export default connect(
  mapStateToProps,
  { addSmurf, getSmurfs }
)(SmurfForm)
