import { CLEAN_UP, ERROR, LOADING, SUCCESS } from '../actionTypes'

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case CLEAN_UP:
      return {
        ...state,
        data: '',
        error: false,
        loading: false,
      }

    default:
      return state
  }
}

export default reducer
