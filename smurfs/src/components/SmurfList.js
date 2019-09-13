import React, { useEffect } from "react"
import { connect } from "react-redux"
import Smurf from "./Smurf"
import { getSmurfs } from "../store/actions"

function SmurfList(props) {
  useEffect(() => {
    props.getSmurfs()
  }, [])

  return (
    <div className="Smurf-List">
      <h1>Village Smurfs</h1>
      {props.village.map(smurf => {
        return <Smurf key={smurf.id} smurf={smurf} />
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    village: state.village,
    isFetching: state.isFetching
  }
}

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList)
