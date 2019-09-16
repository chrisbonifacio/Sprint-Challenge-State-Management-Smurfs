import {
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILURE,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_START,
  ADD_SMURF_FAILURE
} from "../actions"

const initalState = {
  isFetching: false,
  village: [],
  smurf: { name: "", age: 0, height: "" }
}

export const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_SMURF_START:
      return { ...state, isFetching: true }
    case GET_SMURF_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        isFetching: false,
        village: state.village.concat(action.payload)
      }
    case ADD_SMURF_START:
      return { ...state, isFetching: true }
    case ADD_SMURF_SUCCESS:
      console.log("SMURF ADDED TO API SUCCESSFULLY")
      return {
        ...state,
        village: [...state.village],
        isFetching: false
      }
    case ADD_SMURF_FAILURE:
      console.log("FAILED TO ADD SMURF TO API")
    default:
      return state
  }
}
