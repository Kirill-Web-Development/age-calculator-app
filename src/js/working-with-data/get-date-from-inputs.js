import "core-js/stable";

import calculateDateDifference from './calculate-date-difference'
import dayValidation from '../validation/day-valid'
import monthValidation from '../validation/month-valid'
import yearValidation from '../validation/year-valid'
import CreateError from '../validation/errors/create-class-for-errors'
import renderOutput from './render-output'
import removeErrorsByClick from '../validation/errors/remove-errors-by-click'
import closeAndShowOutput from '../anim/close-and-show-output'

const   dayEl = document.getElementById('day-input'),
        monthEl = document.getElementById('month-input'),
        yearEl = document.getElementById('year-input');

function getDateFromInputs() {

const   day = +dayEl.value.trim() || '',
        month = +monthEl.value.trim() || '',
        year = +yearEl.value.trim() || ''

let date = {
    day,
    month,
    year
}

const isDayValid = dayValidation(date.day, date.month)
const isMonthValid = monthValidation(date.month)
const isYearValid = yearValidation(date.year)

CreateError.renderError(isDayValid, dayEl)
CreateError.renderError(isMonthValid, monthEl)
CreateError.renderError(isYearValid, yearEl)

const isAllValid = [isDayValid, isMonthValid, isYearValid].every(errorLog => errorLog.check === false)

const timeDifference = calculateDateDifference(date)

renderOutput(isAllValid, timeDifference)

}

document.querySelectorAll('.inputs-group__input').forEach(input => {
    input.addEventListener('input', getDateFromInputs)
    input.addEventListener('click', getDateFromInputs)
})

removeErrorsByClick();
closeAndShowOutput();

