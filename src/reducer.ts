export function counterReducer(state = { value: 0 }, action: any) {
  switch (action.type) {
    case 'INC':
      return { value: state.value + 1 };
    case 'DEC':
      return { value: state.value - 1 };
    default:
      return state;
  }
}
