import CreateError from "./errors/create-class-for-errors.js";

function monthValidation(month) {
    const error = new CreateError()

    if (month === '')  {
      error.setError('this value is required')
    } else if (month <= 0 || month > 12)  {
        error.setError()
    } 

    return error
}

export default monthValidation;