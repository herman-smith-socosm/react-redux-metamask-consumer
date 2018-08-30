import { combineReducers } from 'redux';
import outputLines from './output-lines-reducer';

const rootReducers = combineReducers({
    outputLines
});

export default rootReducers;