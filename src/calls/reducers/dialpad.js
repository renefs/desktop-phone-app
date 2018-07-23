import * as dialpadActions from 'calls/actions/dialpad'

const initialState = {
  display: false
}

const call = (state = initialState, action) => {
  switch (action.type) {
    case dialpadActions.TOGGLE_DIALPAD:
      return {
        ...state,
        display: action.newStatus
      }
    default:
      return state
  }
}

export default call