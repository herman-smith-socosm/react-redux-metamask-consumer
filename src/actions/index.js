export const ADD_OUTPUT_LINE = 'ADD_OUTPUT_LINE';
export const CLEAR_OUTPUTS = 'CLEAR_OUTPUTS';

let nextOutputLineId = 0;
export function addOutputLine(line) {
    return { 
        type: ADD_OUTPUT_LINE, 
        id: nextOutputLineId++,
        line: line
    }
}

export function clearOutputs() {
    return { 
        type: CLEAR_OUTPUTS
    }
}