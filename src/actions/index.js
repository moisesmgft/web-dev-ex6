export const setInput = (value) => {
    return {
      type: 'SET_INPUT',
      payload: value,
    };
  };
  
  export const calculateResult = () => {
    return {
      type: 'CALCULATE_RESULT',
    };
  };
  
  export const clearInput = () => {
    return {
      type: 'CLEAR_INPUT',
    };
  };
  