function closeAndShowOutput() {
    const   btn = document.querySelector('.divider__circle'),
            output = document.querySelector('.output__wrapper')
    btn.addEventListener('click', () => {
        output.classList.toggle('hide')
        if (btn.classList.contains('circle-anim')) {
            btn.classList.remove('circle-anim')
        } else {
            btn.classList.add('circle-anim')
        }
    })
}

export default closeAndShowOutput;