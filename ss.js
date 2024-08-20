document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    const text = document.getElementById('text');
    const container = document.getElementById('container');

    button.addEventListener('click', () => {
        const isInitialState = button.classList.contains('initial');

        if (isInitialState) {
            button.classList.remove('initial');
            button.classList.add('changed');
            button.textContent = 'Reset State';
            text.textContent = 'Here are some more techniques you can adopt from creative writing to improve your essays.';
            container.style.backgroundColor = 'plum';
        } else {
            button.classList.remove('changed');
            button.classList.add('initial');
            button.textContent = 'Change State';
            text.textContent = 'Start with an attention-grabbing hook to draw them in, such as a controversial statement, a tantalising snippet of information or a rhetorical question.';
            container.style.backgroundColor = 'lightpink';
        }
    });
});
