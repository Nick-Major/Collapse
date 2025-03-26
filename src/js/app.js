const btn = document.querySelector('.btn');
const textWrap = document.querySelector('.text-wrap');
const textContainer = textWrap.querySelector('.text-container');

textWrap.style.height = `${textContainer.scrollHeight}px`

btn.addEventListener('click', () => {
    const isCollapsed = textWrap.classList.contains('collapsed');

    if (isCollapsed) {
        // Разворачиваем
        textWrap.style.borderWidth = '1px';
        setTimeout(() => {
            textWrap.style.height = `${textContainer.scrollHeight}px`;
            textWrap.classList.remove('collapsed');
        }, 10)
    } else {
        // Сворачиваем
        textWrap.style.height = '0';
        textWrap.style.borderWidth = '0';
        textWrap.classList.add('collapsed');
    }
})
