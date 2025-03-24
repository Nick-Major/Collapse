const btn = document.querySelector('.btn');
const textContainer = document.querySelector('.text-container');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    textContainer.classList.toggle('hidden');
})
