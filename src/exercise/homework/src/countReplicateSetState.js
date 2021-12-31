export default function countReplicateSetState(state, action) {
  switch (typeof action) {
    case 'function':
      const evaluatedAction = action(state)
      return {...state, count: evaluatedAction.count}
    case 'object':
      return {...state, count: action.count}
    default:
      throw Error('incorrect type passed in')
  }
}
