import {
    SET_NAME,
    SET_AGE
} from './types'

export const setName = (name) => {
    return {
        type: SET_NAME,
        payload: name
    }
}

export const setAge = (age) => {
    return {
        type: SET_AGE,
        payload: age
    }
}