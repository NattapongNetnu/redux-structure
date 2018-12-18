const mylogger = (store) => (next) => (action) => {
    console.log("Log Action", action)
    next(action)
}

export default mylogger