import axios from "axios"

export const GET_SMURF_START = "GET_SMURF_START"
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS"
export const GET_SMURF_FAILURE = "GET_SMURF_FAILURE"

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURF_START })
  fetch("http://localhost:3333/smurfs")
    .then(res => {
      return res.json()
    })
    .then(parsedRes => {
      dispatch({ type: GET_SMURF_SUCCESS, payload: parsedRes })
    })
    .catch(err => {
      dispatch({ type: GET_SMURF_FAILURE })
      console.log(err)
    })
}

export const ADD_SMURF_START = "ADD_SMURF_START"
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE"

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START })
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(response => {
      dispatch({ type: ADD_SMURF_SUCCESS })
    })
    .catch(err => {
      dispatch({ type: ADD_SMURF_FAILURE })
      console.log(err)
    })
}
