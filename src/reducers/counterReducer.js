const initialState = { count: 0 };

// BASED ON ACTION, CREATES AND RETURNS NEW VERSION
// OF STATE
function counterReducer(state=initialState, action) {
  if (action.type === 'INCREMENT_BUTTON_CLICK') {
    return { count: state.count + 1 };
  }

  return state;
}

export default counterReducer;
