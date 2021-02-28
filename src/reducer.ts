export function counterReducer(state = { value: 0, fetchCounter: 0 }, action: any) {
  switch (action.type) {
    case 'INC':
      return { ...state, value: state.value + 1 };
    case 'DEC':
      return { ...state, value: state.value - 1 };
    case 'FETCHED':
      return { ...state, fetchCounter: state.fetchCounter + 1 };
    default:
      return state;
  }
}
