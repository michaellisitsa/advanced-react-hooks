export default function countReducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'step':
      return {
        ...state,
        count: state.count + action.count,
      }
    default:
      throw Error('error')
  }
}
