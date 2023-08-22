import CreateError from "./errors/create-class-for-errors.js";

function yearValidation(year) {
    const error = new CreateError()
    const currentYear = new Date().getFullYear()
    if (year === '')  {
      error.setError('this value is required')
    } else if (year < 100 || year > currentYear)  {
        error.setError()
    } 

    return error
}

export default yearValidation;