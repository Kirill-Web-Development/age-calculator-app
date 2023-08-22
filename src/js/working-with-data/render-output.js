function renderOutput(isDateValid, date) {
    const   years = document.getElementById('output__years-value'),
            months = document.getElementById('output__months-value'),
            days = document.getElementById('output__days-value')
    if (isDateValid) {
        years.textContent = date.years;
        months.textContent = date.months;
        days.textContent = date.days;
    } else {
        years.textContent = '--';
        months.textContent = '--';
        days.textContent = '--';
    }
}

export default renderOutput;