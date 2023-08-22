function errorRender(error, errorWrapper) {
    const container = errorWrapper.closest('.input-item')
    const {check, message} = error;
        let errorEl = container.querySelector('.input__error-message'); // Поиск элемента, если он есть
        if (check) {
            if (!errorEl) {
                errorEl = document.createElement('div');
                errorEl.classList.add('input__error-message');
                container.append(errorEl);
            }
            errorEl.textContent = message;
            container.classList.add('error');
        } else {
            if (errorEl) {
                errorEl.remove();
            }
            container.classList.remove('error');
        }
    }
    
export default errorRender;