import { combineReducers } from 'redux'
import EmployeeReducer from './EmployeeReducer'
import SalaryReducer from './SalaryReducers'

const reducers = combineReducers({
    employee: EmployeeReducer,
    salary: SalaryReducer
})

export default reducers