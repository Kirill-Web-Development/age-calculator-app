import getFebruaryDays from "./get-february-days.js";
import CreateError from "./errors/create-class-for-errors.js";

function dayValidation(day, month) {
    const error = new CreateError()

    if (day === '')  {
        error.setError('this value is required')
    } else if (day <= 0) {
        error.setError()
    } else {
        switch (month) {
            case 2 :
                const februaryDays = getFebruaryDays();
                if (day > februaryDays || day === 0) {
                   error.setError()
                }
            case 4 :
            case 6 :
            case 9 :
            case 11 :
                if (day > 30) {
                    error.setError()
                }
            default :
                if (day > 31) {
                    error.setError()
                }
        }
    }
    return error
}

export default dayValidation;
