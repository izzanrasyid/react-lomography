import { SET_PHOTOS } from './action'

const initialState = {
  photos: []
}

export default function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_PHOTOS:
      return { ...state, photos: payload }
    default:
      return state
  }
}