export default function countReplicateSetState(state, action) {
  return {...state, count: action.count}
}
