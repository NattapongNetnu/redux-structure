import {
    SALARY_ADD,
    SALARY_SUBTRACT
} from '../actions/types'

const initialState = {
    salary: 15000,
    range: []
}

const SalaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SALARY_ADD:
            state = {
                ...state,
                salary: state.salary += action.payload,
                range: [...state.range, action.payload]
            }
            break
        case SALARY_SUBTRACT:
            state = {
                ...state,
                salary: state.salary -= action.payload,
                range: [...state.range, action.payload]
            }
            break
        default:
            break
    }
    return state
}

export default SalaryReducer