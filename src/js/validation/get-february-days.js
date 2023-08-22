function getFebruaryDays() {
    const year = +document.getElementById('year-input').value;
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return 29
    } else {
        return 28
    }
}

export default getFebruaryDays;