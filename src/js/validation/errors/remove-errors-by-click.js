function removeErrorsByClick() {
    window.addEventListener('click', (e) => {
        const isInputClicked = e.target.classList.contains('inputs-group__input')
        const isOpenBtnClicked = e.target.classList.contains('divider__circle-img')
        if (!isInputClicked && !isOpenBtnClicked) {
            const inputs = document.querySelectorAll('.input-item')
            inputs.forEach(input => {
                if (input.classList.contains('error')) {
                    input.classList.remove('error')
                    const error = input.querySelector('.input__error-message')
                    if (error) {
                        error.remove()
                    }
                }
            })
        } 
    })
}

export default removeErrorsByClick;