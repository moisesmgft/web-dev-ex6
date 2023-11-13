const initialState = {
    input: '',
    result: '',
  };
  
  const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_INPUT':
        return {
          ...state,
          input: state.input + action.payload,
        };
      case 'CALCULATE_RESULT':
        return {
          ...state,
          input: eval(state.input),
        };
      case 'CLEAR_INPUT':
        return {
          ...state,
          input: '',
        };
      default:
        return state;
    }
  };
  
  export default calculatorReducer;
  