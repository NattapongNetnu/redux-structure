import {
    SET_AGE,
    SET_NAME
} from '../actions/types'

const initialState = {
    name: "Nattapong",
    age: 13
}

const EmployeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME:
            state = { ...state, name: action.payload}
            break
        case SET_AGE:
            state = { ...state, age: action.payload}
            break
        default:
    }
    return state
}

export default EmployeeReducer