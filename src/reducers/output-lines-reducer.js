import { ADD_OUTPUT_LINE, CLEAR_OUTPUTS } from '../actions';

const outputLines = (state = [], action) => {
    switch (action.type) {
      case ADD_OUTPUT_LINE:
        return [
          ...state,
          {
            id: action.id,
            line: action.line
          }
        ]
      case CLEAR_OUTPUTS:
        return [];
      default:
        return state;
    }
  }
  
  export default outputLines;
  