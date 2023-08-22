function calculateDateDifference(dateObj) {
    const {year, month, day} = dateObj;
    //Date.now() - получает текущее время в миллисекундах
    // Более оптимизированный вариант new Date().getTime()
    let res = Date.now() - new Date(`${year}-${month}-${day}`).getTime()
    // методы в возвращаемом объекте работают только после
    // обрачивания миллисекунд в new Date
    res = new Date(res)
    // если ничего не отнимать от res.getFullYear() и res.getDate()
    // будут некорректные данные
    return {
        years : res.getFullYear() - 1970,
        months: res.getMonth(),
        days: res.getDate() - 1
    }
}


export default calculateDateDifference;